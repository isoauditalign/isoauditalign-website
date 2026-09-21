export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface Standard {
  slug: string;
  tag: string;
  name: string;
  shortDesc: string;
  heroCopy: string;
  whatIncluded: string[];
  workflow: WorkflowStep[];
  assessmentSlug?: string;
  relatedGuides?: { title: string; slug: string }[];
  contentNote?: string; // internal flag — not rendered; surfaced in pre-launch checklist
}

const certificationWorkflow = (standardTag: string): WorkflowStep[] => [
  { title: 'Discovery & Scoping', desc: `We assess your current state, define the scope of your ${standardTag} management system, identify stakeholders, and map your operating context against the standard's requirements.` },
  { title: 'Gap Analysis & Roadmap', desc: 'Clause-by-clause gap assessment, prioritised by risk and effort. Delivered as an actionable project plan with clear milestones and a realistic timeline.' },
  { title: 'Framework Implementation', desc: 'We build your policies, procedures, risk registers, and controls library — tailored to your actual business and how it really operates, not a generic template.' },
  { title: 'Internal Audit & Review', desc: 'A full internal audit simulating your Stage 2 certification audit. Non-conformances are found and closed before the real audit counts against you.' },
  { title: 'Certification Audit Support', desc: "We're in the room for Stage 1 and Stage 2 — managing auditor questions in real-time so nothing gets lost. Certificate issued." },
];

export const STANDARDS: Standard[] = [
  {
    slug: 'iso-27001',
    tag: 'ISO 27001:2022',
    name: 'Information Security Management',
    shortDesc: 'ISMS design, risk assessment, Statement of Applicability, 93 Annex A controls, and full certification audit support. The standard enterprise clients and government require.',
    heroCopy: 'End-to-end ISO 27001:2022 implementation — from scoping and risk assessment through to the certification audit room. Built for organisations that need real security governance, not a folder of templates.',
    whatIncluded: [
      'Governance & direction: policies, ownership, and leadership review',
      'People & awareness: onboarding, offboarding, and staff training',
      'Physical security: sites, equipment, and secure disposal',
      'Technical controls: identity, cloud, logging, and backups',
      'Response & resilience: incident handling and business continuity',
      'Statement of Applicability and full 93 Annex A control mapping',
    ],
    workflow: certificationWorkflow('ISO 27001'),
    assessmentSlug: 'iso-27001-assessment',
    relatedGuides: [
      { title: 'How Much Does ISO 27001 Certification Cost in Australia?', slug: 'iso-27001-cost-australia' },
      { title: 'ISO 27001 vs SOC 2: Which Does Your MSP Actually Need?', slug: 'iso-27001-vs-soc-2-msp' },
    ],
  },
  {
    slug: 'iso-9001',
    tag: 'ISO 9001:2015',
    name: 'Quality Management System',
    shortDesc: 'Process design, KPI frameworks, customer satisfaction systems, and supplier quality management for manufacturing, services, and technology sectors.',
    heroCopy: 'A Quality Management System built around how your business actually operates — process control, supplier management, and continual improvement your team can run day-to-day.',
    whatIncluded: [
      'Leadership & context: policy, roles, and organisational scope',
      'Planning & risk: quality objectives linked to real business direction',
      'Support & resources: competence, communication, and documentation',
      'Operations: customer requirements, design control, and supplier management',
      'Performance & improvement: internal audit and management review',
    ],
    workflow: certificationWorkflow('ISO 9001'),
    assessmentSlug: 'iso-9001-assessment',
  },
  {
    slug: 'iso-14001',
    tag: 'ISO 14001:2015',
    name: 'Environmental Management',
    shortDesc: 'Environmental aspects register, legal compliance obligations, and programmes to reduce ecological impact and demonstrate genuine environmental responsibility.',
    heroCopy: 'An Environmental Management System that goes beyond compliance paperwork — genuine aspects and impacts assessment, obligations tracking, and measurable improvement over time.',
    whatIncluded: [
      'Context & leadership: environmental policy and defined roles',
      'Planning: aspects, impacts, and compliance obligations register',
      'Support: competence, communication, and documented information',
      'Operational control: waste, resource use, and emergency preparedness',
      'Performance evaluation: monitoring, audit, and continual improvement',
    ],
    workflow: certificationWorkflow('ISO 14001'),
    assessmentSlug: 'iso-14001-assessment',
  },
  {
    slug: 'iso-45001',
    tag: 'ISO 45001:2018',
    name: 'Work Health & Safety',
    shortDesc: 'Hazard identification, risk assessment, safety controls, and emergency planning. Replaces AS/NZS 4801 for Australian organisations.',
    heroCopy: 'A Work Health & Safety Management System built on real hazard identification and worker participation — not a compliance exercise that sits on a shelf.',
    whatIncluded: [
      'Leadership & participation: commitment and worker consultation',
      'Planning: hazard identification, risk assessment, and the hierarchy of controls',
      'Support: competence, PPE, and emergency preparedness',
      'Operation: operational controls, change management, and contractors',
      'Performance evaluation: incident investigation and continual improvement',
    ],
    workflow: certificationWorkflow('ISO 45001'),
    assessmentSlug: 'iso-45001-assessment',
  },
  {
    slug: 'iso-42001',
    tag: 'ISO 42001:2023',
    name: 'AI Management System',
    shortDesc: "The world's first AI governance standard. Ethical AI frameworks, risk controls, and demonstrable trustworthy AI for regulators and stakeholders.",
    heroCopy: 'Practical AI governance built to ISO 42001:2023 — risk and impact assessment, lifecycle controls, and human oversight that demonstrates trustworthy AI to regulators and customers.',
    whatIncluded: [
      'Governance & context: AI policy, roles, and defined scope',
      'Risk & impact assessment: bias, fairness, and data governance',
      'Support & resources: competence and third-party AI management',
      'AI system lifecycle controls: design, testing, deployment, monitoring',
      'Performance & improvement: incident management and audit',
    ],
    workflow: certificationWorkflow('ISO 42001'),
    assessmentSlug: 'iso-42001-assessment',
  },
  {
    slug: 'ndis',
    tag: 'NDIS',
    name: 'NDIS Audit Support',
    shortDesc: 'Registration and re-registration audit support for disability service providers. Quality and Safeguarding Framework documentation and evidence packs.',
    heroCopy: 'Registration and re-registration audit support for NDIS providers — practical documentation and evidence packs built against the NDIS Practice Standards and Quality and Safeguarding Framework.',
    whatIncluded: [
      'Gap review against the NDIS Practice Standards relevant to your registration groups',
      'Evidence pack preparation for registration and re-registration audits',
      'Policy and procedure development aligned to the Quality and Safeguarding Framework',
      'Audit day support with your chosen Approved Quality Auditor',
    ],
    workflow: [
      { title: 'Registration Scope Review', desc: 'We confirm which registration groups apply to your service and map the specific Practice Standards you need to evidence.' },
      { title: 'Gap Review', desc: 'A practical review of your current policies, procedures, and records against the Quality and Safeguarding Framework.' },
      { title: 'Documentation & Evidence Build', desc: 'We build or refresh the policies, procedures, and evidence packs your Approved Quality Auditor will expect to see.' },
      { title: 'Audit Day Support', desc: 'We support you on the day with your chosen Approved Quality Auditor, making sure evidence is presented clearly and confidently.' },
    ],
    contentNote: 'Thin on the live site — only a short card exists. Flagged in the pre-launch checklist for the client to supply more detail on registration groups covered and typical engagement scope.',
  },
];

export const getStandard = (slug: string) => STANDARDS.find((s) => s.slug === slug);
