import type { PercentageAssessment } from './types';

export const iso14001Assessment: PercentageAssessment = {
  slug: 'iso-14001-assessment',
  title: 'ISO 14001:2015 Self-Assessment',
  standardTag: 'ISO 14001:2015',
  timeEstimate: '12–15 min',
  scoringMode: 'percentage',
  domains: [
    {
      key: 'lead', label: 'Context & Leadership', desc: 'Environmental context, policy, and roles.',
      questions: [
        { id: 'q1', t: 'Environmental context understood', q: 'Has the business identified environmental conditions and issues relevant to its operations?', h: 'Climate, resource use, local environment, regulation.' },
        { id: 'q2', t: 'Interested parties identified', q: 'Are the environmental expectations of regulators, customers, and community understood?', h: 'These shape compliance obligations and reputation risk.' },
        { id: 'q3', t: 'Environmental policy in place', q: 'Is there an environmental policy that reflects genuine commitments, not just words?', h: 'Should guide real operational decisions.' },
        { id: 'q4', t: 'Roles and authorities clear', q: 'Are environmental management roles and responsibilities clearly assigned?', h: 'Who owns permits, monitoring, and incident response.' },
        { id: 'q5', t: 'Leadership engaged', q: 'Does leadership actively support and review environmental performance?', h: 'Visible commitment beyond policy sign-off.' },
        { id: 'q6', t: 'EMS scope defined', q: 'Is the scope of the environmental management system clearly defined?', h: 'Sites, activities, products, and services covered.' },
      ],
    },
    {
      key: 'plan', label: 'Planning', desc: 'Aspects, impacts, obligations, and objectives.',
      questions: [
        { id: 'q7', t: 'Environmental aspects identified', q: 'Are environmental aspects and impacts of activities, products, and services identified?', h: 'Emissions, waste, energy use, water, resource consumption.' },
        { id: 'q8', t: 'Significant impacts prioritised', q: 'Are significant environmental impacts prioritised for management attention?', h: 'Not all aspects carry equal risk.' },
        { id: 'q9', t: 'Compliance obligations known', q: 'Are legal and other environmental compliance obligations identified and tracked?', h: 'Licences, permits, regulations, contractual commitments.' },
        { id: 'q10', t: 'Risks and opportunities addressed', q: 'Are environmental risks and opportunities identified and actioned in planning?', h: 'Should influence real operational decisions.' },
        { id: 'q11', t: 'Environmental objectives set', q: 'Are measurable environmental objectives established at relevant levels?', h: 'Energy reduction, waste diversion, emissions targets.' },
        { id: 'q12', t: 'Objectives resourced and tracked', q: 'Are environmental objectives adequately resourced and progress tracked?', h: 'Objectives without resourcing rarely succeed.' },
      ],
    },
    {
      key: 'sup', label: 'Support', desc: 'Resources, competence, and documented information.',
      questions: [
        { id: 'q13', t: 'Competence managed', q: 'Is competence for roles with significant environmental impact determined and maintained?', h: 'Training for operators, contractors, and managers.' },
        { id: 'q14', t: 'Awareness of environmental impact', q: 'Are staff aware of their role in environmental performance and the impact of nonconformance?', h: 'Induction and refresher content.' },
        { id: 'q15', t: 'Resources adequate', q: 'Are resources (equipment, systems, budget) adequate to manage environmental performance?', h: 'Monitoring equipment, spill kits, systems.' },
        { id: 'q16', t: 'Communication effective', q: 'Is environmental performance communicated internally and, where relevant, externally?', h: 'Reporting to staff, regulators, or community.' },
        { id: 'q17', t: 'Documented information controlled', q: 'Is documented information relevant to the EMS controlled and current?', h: 'Procedures, permits, monitoring records.' },
        { id: 'q18', t: 'Emergency preparedness documented', q: 'Are potential environmental emergencies identified with documented response plans?', h: 'Spills, leaks, fire, extreme weather events.' },
      ],
    },
    {
      key: 'ops', label: 'Operational Control', desc: 'Operational controls and life cycle considerations.',
      questions: [
        { id: 'q19', t: 'Operational controls established', q: 'Are operational controls in place for activities with significant environmental impact?', h: 'Procedures, permits, work instructions.' },
        { id: 'q20', t: 'Life cycle perspective applied', q: 'Is environmental impact considered across the life cycle of products or services where relevant?', h: 'Design, sourcing, use, and disposal.' },
        { id: 'q21', t: 'Contractors and suppliers managed', q: 'Are contractors and suppliers managed to meet relevant environmental requirements?', h: 'Site inductions, contract clauses, audits.' },
        { id: 'q22', t: 'Waste managed appropriately', q: 'Is waste identified, segregated, and disposed of in line with obligations?', h: 'Hazardous waste, recycling, general waste streams.' },
        { id: 'q23', t: 'Resource and energy use monitored', q: 'Is energy, water, or material use monitored to identify efficiency opportunities?', h: 'Metering, tracking, or periodic review.' },
        { id: 'q24', t: 'Emergency drills or reviews conducted', q: 'Are emergency response plans tested or reviewed periodically?', h: 'Drills, tabletop exercises, or plan reviews.' },
      ],
    },
    {
      key: 'perf', label: 'Performance Evaluation & Improvement', desc: 'Monitoring, audit, and continual improvement.',
      questions: [
        { id: 'q25', t: 'Environmental performance monitored', q: 'Is environmental performance monitored, measured, and evaluated against objectives?', h: 'Emissions data, waste volumes, energy consumption.' },
        { id: 'q26', t: 'Compliance evaluated', q: 'Is compliance with legal and other obligations periodically evaluated?', h: 'Formal compliance evaluation process.' },
        { id: 'q27', t: 'Internal audits conducted', q: 'Are internal audits of the EMS conducted at planned intervals?', h: 'Covering relevant sites and processes over a cycle.' },
        { id: 'q28', t: 'Management review held', q: 'Does leadership conduct a formal management review of environmental performance?', h: 'Inputs and outputs aligned to ISO 14001 requirements.' },
        { id: 'q29', t: 'Nonconformity and corrective action managed', q: 'When environmental nonconformities occur, is root cause found and corrected?', h: 'Not just addressing the immediate issue.' },
        { id: 'q30', t: 'Continual improvement demonstrated', q: 'Can the business show measurable improvement in environmental performance over time?', h: 'Trend data, reduced impacts, or better practices.' },
      ],
    },
  ],
  actions: {
    q1: 'Document environmental conditions and issues relevant to operations.', q2: 'Identify interested parties and their environmental expectations.', q3: 'Develop or refresh a genuine, actionable environmental policy.', q4: 'Clarify environmental management roles and responsibilities.', q5: 'Increase visible leadership engagement with environmental performance.', q6: 'Define and document the scope of the EMS.', q7: 'Identify environmental aspects and impacts systematically.', q8: 'Prioritise significant environmental impacts for action.', q9: 'Establish a compliance obligations register and tracking process.', q10: 'Address environmental risks and opportunities in planning.', q11: 'Set measurable environmental objectives at relevant levels.', q12: 'Resource environmental objectives and track progress.', q13: 'Formalise competence requirements for environmentally significant roles.', q14: 'Improve staff awareness of environmental impact and responsibilities.', q15: 'Review adequacy of resources for environmental management.', q16: 'Strengthen internal and external environmental communication.', q17: 'Improve control of EMS documented information.', q18: 'Document and communicate emergency preparedness plans.', q19: 'Establish or strengthen operational controls for significant impacts.', q20: 'Apply a life cycle perspective to relevant products or services.', q21: 'Improve management of contractor and supplier environmental performance.', q22: 'Tighten waste identification, segregation, and disposal practices.', q23: 'Introduce monitoring of energy, water, or material use.', q24: 'Test or review emergency response plans regularly.', q25: 'Establish structured environmental performance monitoring.', q26: 'Introduce periodic compliance evaluation against obligations.', q27: 'Establish or improve the internal audit programme for the EMS.', q28: 'Formalise management review of environmental performance.', q29: 'Improve root cause analysis and corrective action for environmental issues.', q30: 'Build a visible track record of environmental improvement.',
  },
};
