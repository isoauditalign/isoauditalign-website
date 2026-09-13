import type { Standard } from './standards';

export const AUDIT_SERVICES: Standard[] = [
  {
    slug: 'gap-analysis',
    tag: 'Audit Services',
    name: 'Gap Analysis',
    shortDesc: 'A clause-by-clause readiness review against your target standard, before you commit to a certification timeline or budget.',
    heroCopy: 'Before you commit to a certification date, know exactly where you stand. Our gap analysis maps your current practice against every clause of your target standard and hands you a prioritised, honest picture of the work ahead.',
    whatIncluded: [
      'Clause-by-clause review against your target ISO standard',
      'Evidence and documentation audit of what already exists',
      'Prioritised gap list, scored by risk and effort to close',
      'A realistic implementation timeline and resourcing estimate',
    ],
    workflow: [
      { title: 'Discovery Call', desc: 'A short conversation to understand your target standard, current maturity, and what\'s driving the certification (tender, client requirement, risk reduction).' },
      { title: 'Clause-by-Clause Review', desc: 'We work through every requirement of the standard against your actual policies, records, and operating practice — not a checkbox exercise.' },
      { title: 'Evidence Audit', desc: 'We check what documentation and evidence already exists and whether it would hold up under a real certification audit.' },
      { title: 'Gap Report Delivered', desc: 'A prioritised, plain-English report scoring each gap by risk and effort, with a realistic timeline and resourcing estimate to close them.' },
    ],
  },
  {
    slug: 'internal-audits',
    tag: 'Audit Services',
    name: 'Internal Audit Support',
    shortDesc: 'Independent internal audit services across all ISO standards. We conduct clause-by-clause internal audits, write findings, and help close non-conformances before your external certification audit.',
    heroCopy: 'Independent internal audit services across all ISO standards. We conduct clause-by-clause internal audits, write findings, and help close non-conformances before your external certification audit.',
    whatIncluded: [
      'Annual or cyclical internal audit programme design',
      'Independent, clause-by-clause internal audits',
      'Formal findings and non-conformance reports',
      'Corrective action tracking through to close-out',
    ],
    workflow: [
      { title: 'Audit Programme Design', desc: 'We design an annual or cyclical internal audit programme covering every relevant clause and process area over a defined cycle.' },
      { title: 'Independent Audit Execution', desc: 'Clause-by-clause internal audits conducted independently, so findings are credible and not softened by internal relationships.' },
      { title: 'Findings & Non-Conformance Reports', desc: 'Formal, evidence-backed findings written the way a certification auditor would expect to see them.' },
      { title: 'Corrective Action Tracking', desc: 'We track corrective actions through to genuine close-out, not just a ticked box, ready for your next external audit.' },
    ],
  },
  {
    slug: 'external-audit-scheduling',
    tag: 'Audit Services',
    name: 'External Audit Scheduling',
    shortDesc: 'We coordinate directly with your certification body to plan and schedule Stage 1 and Stage 2 audits, so timelines stay realistic and nothing falls through the cracks.',
    heroCopy: 'Certification audit logistics — handled. We liaise directly with your chosen certification body to plan, schedule, and prepare for Stage 1 and Stage 2 audits around your business, not the other way around.',
    whatIncluded: [
      'Certification body liaison and audit date coordination',
      'Stage 1 and Stage 2 scheduling aligned to your readiness',
      'Pre-audit logistics: site access, evidence packs, attendee planning',
      'A clear runway so nothing is scheduled before you\'re ready',
    ],
    workflow: [
      { title: 'Certification Body Liaison', desc: 'We contact and coordinate directly with your chosen (or recommended) certification body on your behalf.' },
      { title: 'Readiness Check', desc: 'A quick check that your management system is genuinely ready before any date gets locked in — no audits scheduled before you\'re prepared.' },
      { title: 'Date Confirmation', desc: 'Stage 1 and Stage 2 dates are agreed and confirmed around your business schedule, not the certification body\'s convenience.' },
      { title: 'Logistics Preparation', desc: 'Site access, evidence packs, and attendee planning organised well ahead of audit day.' },
    ],
  },
  {
    slug: 'external-audit-support',
    tag: 'Audit Services',
    name: 'External Audit Support',
    shortDesc: 'On-site or remote support during your Stage 1 and Stage 2 certification audits. We manage auditor questions in real-time and ensure your team presents evidence clearly and confidently.',
    heroCopy: 'On-site or remote support during your Stage 1 and Stage 2 certification audits. We manage auditor questions in real-time and ensure your team presents evidence clearly and confidently.',
    whatIncluded: [
      'On-site or remote presence for the full audit duration',
      'Real-time management of auditor questions and evidence requests',
      'Coaching your team on how to present evidence confidently',
      'Same-day debrief and action plan for any findings raised',
    ],
    workflow: [
      { title: 'Pre-Audit Briefing', desc: 'We brief your team on what to expect, who the auditor will likely want to speak to, and how to present evidence clearly.' },
      { title: 'On-Site or Remote Support', desc: 'We\'re present for the full audit duration — in the room or on the call — for both Stage 1 and Stage 2.' },
      { title: 'Real-Time Evidence Management', desc: 'Auditor questions and evidence requests are managed in real time so nothing gets lost or fumbled under pressure.' },
      { title: 'Same-Day Debrief', desc: 'A same-day debrief covering any findings raised, with a clear action plan if anything needs closing out.' },
    ],
  },
  {
    slug: 'surveillance-audit-support',
    tag: 'Audit Services',
    name: 'Surveillance Audit Support',
    shortDesc: 'Ongoing support for your annual surveillance audits, keeping your certification active and your management system genuinely maintained, not just filed away.',
    heroCopy: 'Certification is the start, not the finish line. We support your annual surveillance audits year after year, keeping your management system genuinely operating — and your certificate valid.',
    whatIncluded: [
      'Annual surveillance audit preparation and readiness checks',
      'Management system health checks between audits',
      'On-site or remote support on surveillance audit day',
      'Continuous improvement recommendations to stay ahead of drift',
    ],
    workflow: [
      { title: 'Annual Health Check', desc: 'A yearly check-in on how your management system is actually operating, well ahead of your surveillance audit date.' },
      { title: 'Readiness Review', desc: 'We confirm records, internal audits, and management reviews are up to date and ready to be evidenced.' },
      { title: 'Audit Day Support', desc: 'On-site or remote support on the day, the same as your original certification audit.' },
      { title: 'Certification Maintained', desc: 'Continuous improvement recommendations so your system stays ahead of drift before the next cycle.' },
    ],
  },
];
