import type { PercentageAssessment } from './types';

export const iso42001Assessment: PercentageAssessment = {
  slug: 'iso-42001-assessment',
  title: 'ISO 42001:2023 Self-Assessment',
  standardTag: 'ISO 42001:2023',
  timeEstimate: '12–15 min',
  scoringMode: 'percentage',
  domains: [
    {
      key: 'gov', label: 'Governance & Context', desc: 'AI governance, roles, policy, and scope.',
      questions: [
        { id: 'q1', t: 'AI context understood', q: 'Has the business identified how it develops, uses, or provides AI systems and the risks involved?', h: 'Internal use, customer-facing products, or embedded AI.' },
        { id: 'q2', t: 'Stakeholder needs identified', q: 'Are the expectations of customers, regulators, and affected parties around AI understood?', h: 'These shape what the AI management system needs to cover.' },
        { id: 'q3', t: 'AI policy in place', q: 'Is there an AI policy covering responsible development, deployment, and use of AI?', h: 'Should guide real decisions, not sit unused.' },
        { id: 'q4', t: 'Roles and authorities clear', q: 'Are AI governance roles and responsibilities clearly assigned?', h: 'Who owns risk assessment, approvals, and incident response.' },
        { id: 'q5', t: 'Leadership engaged', q: 'Does leadership actively support and review AI governance and risk management?', h: 'Visible commitment, not just a signed policy.' },
        { id: 'q6', t: 'AIMS scope defined', q: 'Is the scope of the AI management system clearly defined?', h: 'Which AI systems, teams, and processes are covered.' },
      ],
    },
    {
      key: 'risk', label: 'Risk & Impact Assessment', desc: 'AI risk, impact assessment, and data governance.',
      questions: [
        { id: 'q7', t: 'AI risks identified', q: 'Are risks associated with AI systems systematically identified?', h: 'Bias, safety, security, misuse, reliability.' },
        { id: 'q8', t: 'AI impact assessment conducted', q: 'Is the impact of AI systems on individuals and groups assessed before deployment?', h: 'Fairness, discrimination, and broader societal impact.' },
        { id: 'q9', t: 'Bias and fairness considered', q: 'Are AI systems assessed for bias and fairness issues in training data and outcomes?', h: 'Especially for systems affecting people directly.' },
        { id: 'q10', t: 'Data governance applied', q: 'Is the data used to train and operate AI systems governed for quality and provenance?', h: 'Data quality, lineage, consent, and appropriate use.' },
        { id: 'q11', t: 'AI objectives set', q: 'Are measurable objectives established for responsible AI performance?', h: 'Accuracy, fairness, robustness, or transparency targets.' },
        { id: 'q12', t: 'Risk treatment tracked', q: 'Are identified AI risks treated with tracked mitigation actions?', h: 'Risks without treatment plans rarely get addressed.' },
      ],
    },
    {
      key: 'sup', label: 'Support & Resources', desc: 'Competence, awareness, and documented information.',
      questions: [
        { id: 'q13', t: 'Competence managed', q: 'Is the competence of people developing or overseeing AI systems determined and maintained?', h: 'Technical skills and responsible AI awareness.' },
        { id: 'q14', t: 'Awareness of AI policy', q: 'Are relevant staff aware of the AI policy and their responsibilities under it?', h: 'Developers, product owners, and decision-makers.' },
        { id: 'q15', t: 'Resources adequate', q: 'Are resources (tooling, compute, expertise) adequate to manage AI systems responsibly?', h: 'Testing environments, monitoring tools, expert review.' },
        { id: 'q16', t: 'Communication effective', q: 'Is information about AI system capabilities and limitations communicated to relevant parties?', h: 'Internal teams, customers, and affected individuals.' },
        { id: 'q17', t: 'Documented information controlled', q: 'Is documentation for AI systems (model cards, risk assessments) controlled and current?', h: 'Version control and traceability of AI artefacts.' },
        { id: 'q18', t: 'Third-party AI managed', q: 'Are third-party or vendor AI components assessed for risk before adoption?', h: 'Foundation models, APIs, or embedded AI features.' },
      ],
    },
    {
      key: 'life', label: 'AI System Lifecycle Controls', desc: 'Design, testing, deployment, and monitoring.',
      questions: [
        { id: 'q19', t: 'Design controls applied', q: 'Are AI systems designed with defined requirements, including safety and ethics considerations?', h: 'Requirements gathering before development starts.' },
        { id: 'q20', t: 'Testing and validation performed', q: 'Are AI systems tested and validated before deployment against defined criteria?', h: 'Accuracy, robustness, edge cases, and adversarial testing.' },
        { id: 'q21', t: 'Deployment controls applied', q: 'Are there controls governing how AI systems are approved and released into production?', h: 'Sign-off, staged rollout, rollback plans.' },
        { id: 'q22', t: 'Human oversight maintained', q: 'Is appropriate human oversight maintained for AI-driven decisions where needed?', h: 'Especially for high-impact or high-risk decisions.' },
        { id: 'q23', t: 'Production monitoring in place', q: 'Are deployed AI systems monitored for performance drift and unexpected behaviour?', h: 'Ongoing monitoring after go-live, not just at launch.' },
        { id: 'q24', t: 'Change control applied', q: 'Are changes to AI models or systems assessed for risk before being applied?', h: 'Retraining, fine-tuning, or configuration changes.' },
      ],
    },
    {
      key: 'perf', label: 'Performance & Improvement', desc: 'Monitoring, incidents, audit, and improvement.',
      questions: [
        { id: 'q25', t: 'AI incidents managed', q: 'Is there a defined process for identifying, reporting, and responding to AI-related incidents?', h: 'Model failures, harmful outputs, security issues.' },
        { id: 'q26', t: 'Performance reviewed', q: 'Is AI system performance reviewed against defined objectives on an ongoing basis?', h: 'Accuracy, fairness, and reliability metrics.' },
        { id: 'q27', t: 'Internal audits conducted', q: 'Are internal audits of the AI management system conducted at planned intervals?', h: 'Covering relevant AI systems and processes.' },
        { id: 'q28', t: 'Management review held', q: 'Does leadership conduct a formal management review of AI governance and performance?', h: 'Inputs and outputs aligned to ISO 42001 requirements.' },
        { id: 'q29', t: 'Nonconformity and corrective action managed', q: 'When AI-related issues occur, is root cause identified and corrective action taken?', h: 'Not just patching the immediate symptom.' },
        { id: 'q30', t: 'Continual improvement demonstrated', q: 'Can the business show ongoing improvement of AI governance and system performance?', h: 'Evidence of change driven by the system over time.' },
      ],
    },
  ],
  actions: {
    q1: 'Document how the business develops, uses, or provides AI systems.', q2: 'Identify stakeholder expectations around AI use.', q3: 'Develop or refresh a responsible AI policy.', q4: 'Clarify AI governance roles and responsibilities.', q5: 'Increase visible leadership engagement with AI governance.', q6: 'Define and document the scope of the AI management system.', q7: 'Implement systematic AI risk identification.', q8: 'Introduce AI impact assessments before deployment.', q9: 'Assess AI systems for bias and fairness issues.', q10: 'Strengthen data governance for AI training and operation.', q11: 'Set measurable objectives for responsible AI performance.', q12: 'Track treatment of identified AI risks to completion.', q13: 'Formalise competence requirements for AI-related roles.', q14: 'Improve staff awareness of the AI policy and responsibilities.', q15: 'Review adequacy of resources for responsible AI management.', q16: 'Improve communication of AI capabilities and limitations.', q17: 'Strengthen control of AI system documentation.', q18: 'Assess third-party AI components for risk before adoption.', q19: 'Build safety and ethics considerations into AI design requirements.', q20: 'Strengthen testing and validation before AI deployment.', q21: 'Formalise deployment approval and rollback controls.', q22: 'Maintain appropriate human oversight for AI-driven decisions.', q23: 'Implement ongoing monitoring of deployed AI systems.', q24: 'Apply change control to AI model and system changes.', q25: 'Establish a defined AI incident management process.', q26: 'Introduce ongoing review of AI system performance.', q27: 'Establish or improve the internal audit programme for the AIMS.', q28: 'Formalise management review of AI governance and performance.', q29: 'Improve root cause analysis and corrective action for AI issues.', q30: 'Build a visible track record of AI governance improvement.',
  },
};
