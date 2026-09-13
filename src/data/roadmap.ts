export interface RoadmapStage {
  title: string;
  desc: string;
  linkLabel: string;
  linkHref: string;
}

export const ROADMAP: RoadmapStage[] = [
  {
    title: 'Discovery & Scoping',
    desc: 'We assess your current state, define scope, and map your operating context against the standard you need.',
    linkLabel: 'Book a Consultation',
    linkHref: '/contact/',
  },
  {
    title: 'Gap Analysis',
    desc: 'A clause-by-clause readiness review against your target standard, before you commit to a timeline or budget.',
    linkLabel: 'Gap Analysis Service',
    linkHref: '/services/gap-analysis/',
  },
  {
    title: 'Framework Implementation',
    desc: 'We build the policies, procedures, risk registers, and controls your standard requires — tailored to your business.',
    linkLabel: 'Explore Standards',
    linkHref: '/#services',
  },
  {
    title: 'Internal Audit & Review',
    desc: 'An independent internal audit simulating your real certification audit, closing non-conformances before they count.',
    linkLabel: 'Internal Audit Support',
    linkHref: '/services/internal-audits/',
  },
  {
    title: 'External Audit Scheduling',
    desc: 'We coordinate directly with your certification body to plan Stage 1 and Stage 2 dates around your readiness.',
    linkLabel: 'Audit Scheduling Service',
    linkHref: '/services/external-audit-scheduling/',
  },
  {
    title: 'Certification Audit Support',
    desc: "We're in the room for Stage 1 and Stage 2 — managing auditor questions in real time. Certificate issued.",
    linkLabel: 'Audit Support Service',
    linkHref: '/services/external-audit-support/',
  },
  {
    title: 'Surveillance & Continual Improvement',
    desc: 'Ongoing support for your annual surveillance audits, keeping your management system genuinely operating.',
    linkLabel: 'Surveillance Audit Support',
    linkHref: '/services/surveillance-audit-support/',
  },
];
