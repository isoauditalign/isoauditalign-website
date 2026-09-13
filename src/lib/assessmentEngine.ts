import type { Assessment, PercentageAssessment, MaturityAssessment } from '../data/assessments/types';
import { CHOICES, MATURITY_SCALE } from '../data/assessments/types';
import { submitLead } from './leadSubmit';

// Fisher–Yates. Used once at mount to randomise question order per attempt —
// scoring is keyed by question id (percentage mode) or by array index within
// a session-stable shuffled copy (maturity mode), so shuffling display order
// never affects scoring correctness.
function shuffled<T>(arr: T[]): T[] {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function mountAssessment(container: HTMLElement, assessment: Assessment) {
  if (assessment.scoringMode === 'percentage') {
    // Clone with each domain's questions reshuffled — domain order stays stable
    // (keeps the tab navigation sensible), only question order within a domain varies.
    const randomised: PercentageAssessment = {
      ...assessment,
      domains: assessment.domains.map((d) => ({ ...d, questions: shuffled(d.questions) })),
    };
    mountPercentageAssessment(container, randomised);
  } else {
    const randomised: MaturityAssessment = {
      ...assessment,
      sections: assessment.sections.map((s) => ({ ...s, questions: shuffled(s.questions) })),
    };
    mountMaturityAssessment(container, randomised);
  }
}

// ─────────────────────────────────────────────────────────
// Shared: lead-capture modal. Renders static/trusted markup via innerHTML,
// but every user-entered field (name/org/phone/email) is written back via
// textContent only — never concatenated into an HTML string. This is the
// fix for the self-XSS bug found in the original site's 6 assessment tools.
// ─────────────────────────────────────────────────────────
function showLeadModal(standardTag: string, onSubmit: (lead: { name: string; org: string; phone: string; email: string }) => void) {
  const modal = document.createElement('div');
  modal.className = 'lead-modal-overlay';
  modal.innerHTML = `
    <div class="lead-modal">
      <div class="lead-modal-accent"></div>
      <h3>Almost there — one last step</h3>
      <p>Enter your details to unlock your personalised report.</p>
      <div class="field-row">
        <div class="field-group"><label>Full Name <span class="req">*</span></label><input id="ld-name" placeholder="Jane Smith" /></div>
        <div class="field-group"><label>Organisation <span class="req">*</span></label><input id="ld-org" placeholder="Acme Pty Ltd" /></div>
      </div>
      <div class="field-row">
        <div class="field-group"><label>Phone <span class="req">*</span></label><input id="ld-phone" placeholder="+61 4XX XXX XXX" /></div>
        <div class="field-group"><label>Email <span class="req">*</span></label><input id="ld-email" type="email" placeholder="jane@company.com.au" /></div>
      </div>
      <div class="lead-modal-actions">
        <button class="btn" id="ld-submit" style="flex:1">View My Report</button>
        <button class="btn-outline" id="ld-cancel">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  (document.getElementById('ld-name') as HTMLInputElement)?.focus();

  document.getElementById('ld-cancel')?.addEventListener('click', () => modal.remove());
  document.getElementById('ld-submit')?.addEventListener('click', async () => {
    const name = (document.getElementById('ld-name') as HTMLInputElement).value.trim();
    const org = (document.getElementById('ld-org') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('ld-phone') as HTMLInputElement).value.trim();
    const email = (document.getElementById('ld-email') as HTMLInputElement).value.trim();
    if (!name || !org || !phone || !email) {
      alert('Please fill in all fields.');
      return;
    }
    const btn = document.getElementById('ld-submit') as HTMLButtonElement;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    const delivered = await submitLead({ name, email, phone, org, assessment: standardTag });
    if (!delivered) console.warn('[assessment] lead notification failed to send — report still shown to the user.');
    modal.remove();
    onSubmit({ name, org, phone, email });
  });
}

// ─────────────────────────────────────────────────────────
// Percentage-mode engine (ISO 27001 / 9001 / 14001 / 45001 / 42001)
// ─────────────────────────────────────────────────────────
function bandForPct(pct: number) {
  if (pct <= 0.44) return { label: 'Early Stage', cls: 'low' };
  if (pct <= 0.56) return { label: 'Developing', cls: 'warn' };
  if (pct <= 0.67) return { label: 'Reasonably Prepared', cls: 'warn' };
  return { label: 'Strong Position', cls: 'good' };
}

function overallText(standardTag: string, pct: number) {
  if (pct <= 0.44) return `The assessment suggests the organisation is at an early stage of ${standardTag} readiness. The immediate focus should be on core governance, ownership, repeatable processes, and evidence of control operation.`;
  if (pct <= 0.56) return `The assessment suggests a workable base is being built for ${standardTag}, but some important areas may still be inconsistent, informal, or hard to evidence.`;
  if (pct <= 0.67) return `The assessment suggests a reasonably good base for ${standardTag} readiness. Targeted uplift, evidence strengthening, and formal gap review would be the next step.`;
  return `The assessment suggests a comparatively strong starting point for ${standardTag} readiness, subject to detailed evidence review and confirmation of how controls operate in practice.`;
}

function mountPercentageAssessment(container: HTMLElement, assessment: PercentageAssessment) {
  const total = assessment.domains.reduce((s, d) => s + d.questions.length, 0);
  const state: { domainIndex: number; answers: Record<string, number>; lead: { name: string; org: string } | null } = {
    domainIndex: 0,
    answers: {},
    lead: null,
  };

  function pct() {
    return Math.round((Object.keys(state.answers).length / total) * 100);
  }

  function render() {
    const answered = Object.keys(state.answers).length;
    const domain = assessment.domains[state.domainIndex];
    const next = assessment.domains[state.domainIndex + 1];

    let html = '<div class="asmnt">';
    html += `<div class="asmnt-intro"><h2>${assessment.title}</h2><p>Answer each question honestly based on current practice. At the end you'll receive a readiness score and tailored improvement priorities.</p>
      <div class="asmnt-metrics">
        <div class="asmnt-metric"><strong>${assessment.domains.length}</strong><span>Assessment domains</span></div>
        <div class="asmnt-metric"><strong>${total}</strong><span>Questions total</span></div>
        <div class="asmnt-metric"><strong>${answered} / ${total}</strong><span>Answered so far</span></div>
      </div></div>`;

    html += `<div class="asmnt-progress-wrap"><div class="asmnt-progress-bar"><div class="asmnt-progress-fill" style="width:${pct()}%"></div></div>
      <span class="asmnt-progress-txt">${answered} of ${total} answered (${pct()}%)</span>`;
    if (answered === total) html += `<button class="btn" data-action="review" style="font-size:.84rem;padding:10px 18px">Review Results →</button>`;
    html += '</div>';

    html += '<div class="domain-tabs">';
    assessment.domains.forEach((d) => {
      const dAnswered = d.questions.filter((q) => state.answers[q.id] !== undefined).length;
      html += `<button class="domain-tab${d.key === domain.key ? ' active' : ''}" data-action="goto-domain" data-domain="${d.key}">${d.label} <span style="opacity:.6;font-size:.72rem">(${dAnswered}/${d.questions.length})</span></button>`;
    });
    html += '</div>';

    domain.questions.forEach((q) => {
      const ans = state.answers[q.id];
      html += `<div class="q-card"><h4>${q.t}<br><span style="font-size:.85rem;font-weight:400;color:var(--muted)">${q.q}</span></h4>`;
      html += `<div class="q-hint"><strong>Context:</strong> ${q.h}</div><div class="q-options">`;
      CHOICES.forEach((c) => {
        html += `<label class="q-option${ans === c.v ? ' selected' : ''}"><input type="radio" name="${q.id}" value="${c.v}" ${ans === c.v ? 'checked' : ''} data-action="answer" data-qid="${q.id}" data-value="${c.v}"><div class="q-option-label"><strong>${c.l}</strong><span>${c.d}</span></div></label>`;
      });
      html += '</div></div>';
    });

    html += '<div class="asmnt-btn-row">';
    if (state.domainIndex > 0) html += `<button class="btn btn-secondary-domain" data-action="goto-domain" data-domain="${assessment.domains[state.domainIndex - 1].key}">← ${assessment.domains[state.domainIndex - 1].label}</button>`;
    if (next) html += `<button class="btn" data-action="goto-domain" data-domain="${next.key}">Next: ${next.label} →</button>`;
    else if (answered === total) html += `<button class="btn" data-action="review">View Results →</button>`;
    html += '</div></div>';

    container.innerHTML = html;
  }

  function renderResults() {
    const results = assessment.domains.map((d) => {
      const vals = d.questions.map((q) => state.answers[q.id] ?? 0);
      const scoreTotal = vals.reduce((a, b) => a + b, 0);
      const max = d.questions.length * 3;
      return { label: d.label, total: scoreTotal, max, band: bandForPct(scoreTotal / max) };
    });
    const overallTot = results.reduce((a, b) => a + b.total, 0);
    const maxTot = total * 3;
    const overallPct = Math.round((overallTot / maxTot) * 100);
    const low = Object.entries(state.answers)
      .filter(([, v]) => v <= 1)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 8)
      .map(([id]) => assessment.actions[id])
      .filter(Boolean);
    const uniqueActions = [...new Set(low)];
    const lead = state.lead;

    let html = '<div class="asmnt">';
    html += `<div class="asmnt-intro"><h2>Your ${assessment.standardTag} Readiness Report</h2>
      <p>Organisation: <strong id="report-org"></strong> · Assessed by: <span id="report-name"></span></p>
      <div class="asmnt-metrics">
        <div class="asmnt-metric"><strong>${overallPct}%</strong><span>Overall readiness</span></div>
        <div class="asmnt-metric"><strong>${total}</strong><span>Questions answered</span></div>
        <div class="asmnt-metric"><strong>${uniqueActions.length}</strong><span>Priority actions</span></div>
      </div></div>`;

    html += '<div class="result-grid">';
    results.forEach((r) => {
      html += `<div class="result-card"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><h3>${r.label}</h3><span class="result-band ${r.band.cls}">${r.band.label}</span></div><div class="result-score">${r.total} / ${r.max}</div></div>`;
    });
    html += '</div>';

    html += `<div class="result-panel"><h3>Overall Assessment</h3><p>${overallText(assessment.standardTag, overallPct / 100)}</p></div>`;

    if (uniqueActions.length) {
      html += '<div class="result-panel"><h3>Priority Improvement Actions</h3>';
      uniqueActions.forEach((a, i) => {
        html += `<div class="report-item"><p><strong>${i + 1}.</strong> ${a}</p></div>`;
      });
      html += '</div>';
    }

    html += `<div class="result-cta"><h3>Need help with your ${assessment.standardTag} journey?</h3>
      <p>ISO Audit Align can help you close the gaps identified in this assessment, build your management system, and achieve certification — with a 100% first-audit pass rate.</p>
      <a class="btn-white" href="/contact/">Book a Free Consultation →</a></div>`;

    html += `<div class="asmnt-btn-row"><button class="btn" data-action="print">Print / Save as PDF</button><button class="btn btn-secondary-domain" data-action="retake">Retake Assessment</button></div>`;
    html += '</div>';

    container.innerHTML = html;
    if (lead) {
      const orgEl = document.getElementById('report-org');
      const nameEl = document.getElementById('report-name');
      if (orgEl) orgEl.textContent = lead.org;
      if (nameEl) nameEl.textContent = lead.name;
    }
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  container.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
    if (!target) return;
    const action = target.dataset.action;
    if (action === 'goto-domain') {
      state.domainIndex = assessment.domains.findIndex((d) => d.key === target.dataset.domain);
      render();
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'answer') {
      state.answers[target.dataset.qid!] = Number(target.dataset.value);
      render();
    } else if (action === 'review') {
      showLeadModal(assessment.standardTag, (lead) => {
        state.lead = { name: lead.name, org: lead.org };
        renderResults();
      });
    } else if (action === 'print') {
      window.print();
    } else if (action === 'retake') {
      state.answers = {};
      state.domainIndex = 0;
      render();
    }
  });

  render();
}

// ─────────────────────────────────────────────────────────
// Maturity-mode engine (ASD Essential Eight)
// ─────────────────────────────────────────────────────────
function mountMaturityAssessment(container: HTMLElement, assessment: MaturityAssessment) {
  const state: { step: number; answers: Record<string, number>; lead: { name: string; org: string } | null } = {
    step: 0,
    answers: {},
    lead: null,
  };
  const totalQ = assessment.sections.reduce((s, x) => s + x.questions.length, 0);

  function sectionScore(sec: MaturityAssessment['sections'][number]) {
    const vals = sec.questions.map((_, i) => state.answers[`${sec.key}_${i}`]).filter((v) => v !== undefined);
    if (!vals.length) return { avg: 0, lvl: 0 };
    const avg = vals.reduce((a, b) => a + b, 0) / sec.questions.length;
    const lvl = avg >= 2.6 && vals.length === sec.questions.length ? 3 : avg >= 1.8 ? 2 : avg >= 1.0 ? 1 : 0;
    return { avg, lvl };
  }

  function summaryText(title: string, lvl: number) {
    return [
      `<strong>${title}</strong> appears weak or inconsistent. Preventable gaps may leave the organisation exposed.`,
      `<strong>${title}</strong> has some controls in place but the process is not yet reliable or consistently enforced.`,
      `<strong>${title}</strong> is generally established, though some gaps may affect consistency, coverage, or resilience.`,
      `<strong>${title}</strong> appears mature and well embedded, with stronger consistency across people, process, and technology.`,
    ][lvl];
  }

  function actionText(title: string, lvl: number) {
    return [
      `Prioritise a basic control baseline for ${title.toLowerCase()}, assign ownership, and define minimum operating rules.`,
      `Standardise ${title.toLowerCase()} so the control works the same way across systems, users, and exceptions.`,
      `Tighten governance, evidence, and exception handling for ${title.toLowerCase()} to support the next maturity step.`,
      `Maintain evidence, review exceptions, and periodically validate that ${title.toLowerCase()} remains effective.`,
    ][lvl];
  }

  function render() {
    const sec = assessment.sections[state.step];
    const answered = Object.keys(state.answers).length;
    let html = '<div class="asmnt">';

    html += '<div class="e8-steps">';
    assessment.sections.forEach((s, i) => {
      const sc = sectionScore(s);
      html += `<button class="e8-step${i === state.step ? ' active' : ''}" data-action="goto-step" data-step="${i}"><span class="e8-step-num">${sc.lvl > 0 ? 'M' + sc.lvl : i + 1}</span>${s.title}</button>`;
    });
    html += '</div>';

    html += `<div class="asmnt-progress-wrap"><div class="asmnt-progress-bar"><div class="asmnt-progress-fill" style="width:${Math.round((answered / totalQ) * 100)}%"></div></div>
      <span class="asmnt-progress-txt">${answered} of ${totalQ} answered</span>`;
    if (answered === totalQ) html += `<button class="btn" data-action="review" style="font-size:.84rem;padding:10px 18px;white-space:nowrap">✓ View Report →</button>`;
    html += '</div>';

    html += `<div class="asmnt-intro" style="margin-bottom:20px"><h2>${sec.title}</h2><p>Answer based on current control design and actual operating practice across your environment.</p></div>`;

    sec.questions.forEach((q, qi) => {
      html += `<div class="q-card"><h4>${q}</h4><div class="e8-answers">`;
      MATURITY_SCALE.forEach((opt) => {
        const active = state.answers[`${sec.key}_${qi}`] === opt.v;
        html += `<button class="e8-ans${active ? ' active' : ''}" data-action="e8-answer" data-key="${sec.key}" data-idx="${qi}" data-value="${opt.v}">${opt.l}</button>`;
      });
      html += '</div></div>';
    });

    html += '<div class="asmnt-btn-row">';
    if (state.step > 0) html += `<button class="btn btn-secondary-domain" data-action="goto-step" data-step="${state.step - 1}">← ${assessment.sections[state.step - 1].title}</button>`;
    if (state.step < assessment.sections.length - 1) {
      html += `<button class="btn" data-action="goto-step" data-step="${state.step + 1}">Next: ${assessment.sections[state.step + 1].title} →</button>`;
    } else {
      const allDone = answered === totalQ;
      html += `<button class="btn" ${allDone ? '' : 'style="opacity:.55;cursor:not-allowed" disabled'} data-action="${allDone ? 'review' : ''}">${allDone ? '✓ View Maturity Report →' : `Complete all questions to view report (${totalQ - answered} remaining)`}</button>`;
    }
    html += '</div>';

    if (answered === totalQ && state.step < assessment.sections.length - 1) {
      html += `<div class="e8-finish-banner"><p>All ${totalQ} questions answered!</p><button class="btn-white" data-action="review">View Maturity Report →</button></div>`;
    }
    html += '</div>';
    container.innerHTML = html;
  }

  function renderResults() {
    const sectionResults = assessment.sections.map((s) => {
      const sc = sectionScore(s);
      return { title: s.title, lvl: sc.lvl };
    });
    const avgLevel = sectionResults.reduce((a, b) => a + b.lvl, 0) / sectionResults.length;
    const lead = state.lead;

    let html = '<div class="asmnt">';
    html += `<div class="asmnt-intro"><h2>Your Essential Eight Maturity Report</h2>
      <p>Organisation: <strong id="report-org"></strong> · Assessed by: <span id="report-name"></span></p>
      <div class="asmnt-metrics">
        <div class="asmnt-metric"><strong>${avgLevel.toFixed(1)}</strong><span>Average maturity level</span></div>
        <div class="asmnt-metric"><strong>${totalQ}</strong><span>Questions answered</span></div>
        <div class="asmnt-metric"><strong>8</strong><span>Mitigation strategies</span></div>
      </div></div>`;

    html += '<div class="result-grid">';
    sectionResults.forEach((r) => {
      const cls = r.lvl >= 3 ? 'good' : r.lvl >= 2 ? 'warn' : 'low';
      html += `<div class="result-card"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><h3>${r.title}</h3><span class="result-band ${cls}">Maturity ${r.lvl}</span></div><p style="font-size:.82rem;color:var(--muted);line-height:1.6">${summaryText(r.title, r.lvl)}</p></div>`;
    });
    html += '</div>';

    html += '<div class="result-panel"><h3>Priority Improvement Actions</h3>';
    sectionResults
      .slice()
      .sort((a, b) => a.lvl - b.lvl)
      .slice(0, 5)
      .forEach((r, i) => {
        html += `<div class="report-item"><p><strong>${i + 1}.</strong> ${actionText(r.title, r.lvl)}</p></div>`;
      });
    html += '</div>';

    html += `<div class="result-cta"><h3>Need help lifting your Essential Eight maturity?</h3>
      <p>ISO Audit Align can help you close the gaps identified in this assessment and build a practical, evidenced uplift plan.</p>
      <a class="btn-white" href="/contact/">Book a Free Consultation →</a></div>`;

    html += `<div class="asmnt-btn-row"><button class="btn" data-action="print">Print / Save as PDF</button><button class="btn btn-secondary-domain" data-action="retake">Retake Assessment</button></div>`;
    html += '</div>';

    container.innerHTML = html;
    if (lead) {
      const orgEl = document.getElementById('report-org');
      const nameEl = document.getElementById('report-name');
      if (orgEl) orgEl.textContent = lead.org;
      if (nameEl) nameEl.textContent = lead.name;
    }
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  container.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-action]') as HTMLElement | null;
    if (!target || !target.dataset.action) return;
    const action = target.dataset.action;
    if (action === 'goto-step') {
      state.step = Number(target.dataset.step);
      render();
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'e8-answer') {
      state.answers[`${target.dataset.key}_${target.dataset.idx}`] = Number(target.dataset.value);
      render();
    } else if (action === 'review') {
      showLeadModal(assessment.standardTag, (lead) => {
        state.lead = { name: lead.name, org: lead.org };
        renderResults();
      });
    } else if (action === 'print') {
      window.print();
    } else if (action === 'retake') {
      state.answers = {};
      state.step = 0;
      render();
    }
  });

  render();
}
