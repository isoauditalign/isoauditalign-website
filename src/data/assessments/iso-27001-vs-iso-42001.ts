import type { RecommendationAssessment } from './types';

export const iso27001VsIso42001Assessment: RecommendationAssessment = {
  slug: 'iso-27001-vs-iso-42001-assessment',
  title: 'ISO 27001 or ISO 42001: Which Do You Need?',
  standardTag: 'ISO 27001 vs ISO 42001',
  timeEstimate: '5 min',
  scoringMode: 'recommendation',
  intro: 'Simple questions — no security or AI background needed. Answer honestly and you\'ll get a clear recommendation on which standard to prioritise.',
  questions: [
    {
      id: 'q1',
      target: 'iso27001',
      q: 'Do you store, process, or have access to customer, staff, or business data that would cause real harm if it were breached or leaked?',
      h: 'Think customer records, financial data, contracts, or anything a competitor or attacker would want.',
    },
    {
      id: 'q2',
      target: 'iso27001',
      q: 'Have clients, tenders, or procurement processes specifically asked you for information security certification, like ISO 27001?',
      h: 'A direct request from a customer or a tender requirement counts as a strong yes.',
    },
    {
      id: 'q3',
      target: 'iso27001',
      q: 'Do you handle particularly sensitive data — health records, financial data, government information, or children\'s data?',
      h: 'Higher-sensitivity data usually means higher security expectations from regulators and customers.',
    },
    {
      id: 'q4',
      target: 'iso27001',
      q: 'Does your organisation currently lack formal, written information security policies and controls?',
      h: 'If security today runs on "how we\'ve always done it" rather than documented policy, that\'s a yes.',
    },
    {
      id: 'q5',
      target: 'iso42001',
      q: 'Do you build, deploy, or heavily rely on AI or machine learning models as part of your product or operations?',
      h: 'This means more than using ChatGPT occasionally — think AI features you\'ve built, trained, or that are core to what you sell.',
    },
    {
      id: 'q6',
      target: 'iso42001',
      q: 'Have clients, regulators, or partners asked about your AI governance, responsible AI practices, or AI risk management?',
      h: 'Increasingly common in vendor due diligence, especially from enterprise and government buyers.',
    },
    {
      id: 'q7',
      target: 'iso42001',
      q: 'Is AI used in decisions that materially affect people — hiring, credit, healthcare, eligibility, or safety?',
      h: 'High-stakes AI decisions carry more governance and regulatory scrutiny.',
    },
    {
      id: 'q8',
      target: 'iso42001',
      q: 'Does your organisation currently lack a formal process for assessing and managing AI-related risks, such as bias, data governance, or human oversight?',
      h: 'If AI risk isn\'t formally reviewed by anyone today, that\'s a yes.',
    },
  ],
  outcomes: {
    iso27001: {
      title: 'ISO 27001 looks like your priority',
      body: 'Based on your answers, information security governance is the more pressing need right now — you\'re handling data that matters and facing real security expectations from clients or regulators. ISO 27001 gives you a recognised, independently audited management system to point to. AI governance may become relevant later, but it isn\'t the sharper gap today.',
    },
    iso42001: {
      title: 'ISO 42001 looks like your priority',
      body: 'Based on your answers, AI governance is the more pressing need right now — you\'re building or relying on AI in ways that carry real risk and scrutiny. ISO 42001 gives you a structured way to demonstrate responsible, trustworthy AI to regulators and customers. Broader information security may still matter, but AI governance is the sharper gap today.',
    },
    both: {
      title: 'You likely need both, eventually',
      body: 'Your answers point to real exposure on both fronts — sensitive data plus meaningful AI use or risk. Most organisations in this position start with ISO 27001, since its controls form a foundation that ISO 42001 builds on, then layer AI governance in once the ISMS is established. Running them as a staged, combined project can also reduce total cost and effort compared to two separate engagements.',
    },
  },
};
