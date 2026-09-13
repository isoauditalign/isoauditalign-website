import type { PercentageAssessment } from './types';

export const iso45001Assessment: PercentageAssessment = {
  slug: 'iso-45001-assessment',
  title: 'ISO 45001:2018 Self-Assessment',
  standardTag: 'ISO 45001:2018',
  timeEstimate: '12–15 min',
  scoringMode: 'percentage',
  domains: [
    {
      key: 'lead', label: 'Leadership & Participation', desc: 'Leadership commitment and worker participation.',
      questions: [
        { id: 'q1', t: 'Leadership commitment visible', q: 'Does leadership actively demonstrate commitment to health and safety, not just compliance?', h: 'Visible presence, resourcing, and priority in decisions.' },
        { id: 'q2', t: 'Worker participation enabled', q: 'Are workers actively consulted and involved in health and safety decisions?', h: 'Not just informed after the fact.' },
        { id: 'q3', t: 'OHS policy in place', q: 'Is there an OHS policy that reflects genuine commitments and is understood by workers?', h: 'Should guide real decisions on the floor.' },
        { id: 'q4', t: 'Roles and authorities clear', q: 'Are health and safety roles, responsibilities, and authorities clearly assigned?', h: 'Who owns hazard reporting, investigations, and approvals.' },
        { id: 'q5', t: 'OHS scope defined', q: 'Is the scope of the OHS management system clearly defined?', h: 'Sites, activities, and workers covered.' },
        { id: 'q6', t: 'Consultation mechanisms exist', q: 'Are there formal mechanisms for worker consultation such as committees or representatives?', h: 'HSRs, safety committees, toolbox talks.' },
      ],
    },
    {
      key: 'plan', label: 'Planning', desc: 'Hazards, risks, legal requirements, and objectives.',
      questions: [
        { id: 'q7', t: 'Hazards identified', q: 'Are workplace hazards systematically identified across activities and sites?', h: 'Ongoing process, not a one-off exercise.' },
        { id: 'q8', t: 'Risk assessment conducted', q: 'Are identified hazards assessed for risk and prioritised for control?', h: 'Likelihood and consequence considered.' },
        { id: 'q9', t: 'Hierarchy of controls applied', q: 'Are risk controls selected using the hierarchy of controls where practical?', h: 'Elimination and substitution before PPE.' },
        { id: 'q10', t: 'Legal requirements known', q: 'Are legal and other OHS obligations identified and tracked?', h: 'WHS Act, regulations, codes of practice, licences.' },
        { id: 'q11', t: 'OHS objectives set', q: 'Are measurable health and safety objectives established at relevant levels?', h: 'Incident reduction, training completion, audit scores.' },
        { id: 'q12', t: 'Objectives resourced and tracked', q: 'Are OHS objectives adequately resourced and progress tracked?', h: 'Objectives without resourcing rarely succeed.' },
      ],
    },
    {
      key: 'sup', label: 'Support', desc: 'Resources, competence, and documented information.',
      questions: [
        { id: 'q13', t: 'Competence managed', q: 'Is competence for roles with OHS responsibilities determined and maintained?', h: 'Inductions, licences, certifications, refreshers.' },
        { id: 'q14', t: 'Awareness of hazards and risks', q: 'Are workers aware of relevant hazards, risks, and their role in controlling them?', h: 'Toolbox talks, inductions, signage.' },
        { id: 'q15', t: 'Resources adequate', q: 'Are resources (PPE, equipment, systems) adequate to manage OHS risks?', h: 'Fit for purpose and properly maintained.' },
        { id: 'q16', t: 'Communication effective', q: 'Is health and safety information communicated effectively across the business?', h: 'Incidents, changes, and lessons learned shared.' },
        { id: 'q17', t: 'Documented information controlled', q: 'Is documented information relevant to OHS controlled and current?', h: 'Procedures, SWMS, risk registers.' },
        { id: 'q18', t: 'Emergency preparedness documented', q: 'Are emergency scenarios identified with documented response plans?', h: 'Fire, medical, chemical spill, evacuation.' },
      ],
    },
    {
      key: 'ops', label: 'Operation', desc: 'Operational controls, change, and contractors.',
      questions: [
        { id: 'q19', t: 'Operational controls established', q: 'Are operational controls in place for activities with significant OHS risk?', h: 'Permits to work, SWMS, isolation procedures.' },
        { id: 'q20', t: 'Management of change applied', q: 'Is OHS risk considered when processes, equipment, or work arrangements change?', h: 'New equipment, new sites, restructures.' },
        { id: 'q21', t: 'Contractors managed', q: 'Are contractors managed to meet the same OHS standards as employees?', h: 'Inductions, permits, and monitoring.' },
        { id: 'q22', t: 'Procurement considers OHS', q: 'Is OHS risk considered when procuring equipment, materials, or services?', h: 'Avoiding introducing new hazards.' },
        { id: 'q23', t: 'Emergency drills conducted', q: 'Are emergency response plans tested through drills or exercises?', h: 'Evacuation drills, simulations.' },
        { id: 'q24', t: 'Fit-for-work considerations addressed', q: 'Are fatigue, wellbeing, or fitness-for-work risks considered where relevant?', h: 'Especially for safety-critical roles.' },
      ],
    },
    {
      key: 'perf', label: 'Performance Evaluation & Improvement', desc: 'Monitoring, investigation, audit, and improvement.',
      questions: [
        { id: 'q25', t: 'OHS performance monitored', q: 'Is health and safety performance monitored and measured against objectives?', h: 'Incident rates, near misses, audit results.' },
        { id: 'q26', t: 'Incidents investigated', q: 'Are incidents and near misses investigated to find root cause?', h: 'Not just addressing the immediate injury or damage.' },
        { id: 'q27', t: 'Internal audits conducted', q: 'Are internal audits of the OHS management system conducted at planned intervals?', h: 'Covering relevant sites and activities.' },
        { id: 'q28', t: 'Management review held', q: 'Does leadership conduct a formal management review of OHS performance?', h: 'Inputs and outputs aligned to ISO 45001 requirements.' },
        { id: 'q29', t: 'Corrective action managed', q: 'When issues are identified, is root cause addressed with tracked corrective action?', h: 'Not just closing the immediate finding.' },
        { id: 'q30', t: 'Continual improvement demonstrated', q: 'Can the business show measurable improvement in safety performance over time?', h: 'Trend data, reduced incidents, or better practices.' },
      ],
    },
  ],
  actions: {
    q1: 'Increase visible leadership commitment to health and safety.', q2: 'Strengthen mechanisms for worker consultation and participation.', q3: 'Develop or refresh a genuine, actionable OHS policy.', q4: 'Clarify OHS roles, responsibilities, and authorities.', q5: 'Define and document the scope of the OHS management system.', q6: 'Establish or strengthen formal worker consultation mechanisms.', q7: 'Implement systematic hazard identification across activities.', q8: 'Introduce structured risk assessment and prioritisation.', q9: 'Apply the hierarchy of controls more consistently.', q10: 'Establish a legal and other OHS obligations register.', q11: 'Set measurable OHS objectives at relevant levels.', q12: 'Resource OHS objectives and track progress.', q13: 'Formalise competence requirements for OHS-critical roles.', q14: 'Improve worker awareness of hazards and risk controls.', q15: 'Review adequacy of PPE, equipment, and OHS resources.', q16: 'Strengthen internal communication of OHS information.', q17: 'Improve control of OHS documented information.', q18: 'Document and communicate emergency preparedness plans.', q19: 'Establish or strengthen operational controls for high-risk activities.', q20: 'Build OHS risk assessment into management of change.', q21: 'Improve contractor OHS management and oversight.', q22: 'Build OHS considerations into procurement decisions.', q23: 'Test emergency response plans through drills.', q24: 'Address fatigue and fitness-for-work risks where relevant.', q25: 'Establish structured OHS performance monitoring.', q26: 'Improve incident and near-miss investigation practices.', q27: 'Establish or improve the internal audit programme for OHS.', q28: 'Formalise management review of OHS performance.', q29: 'Improve root cause analysis and corrective action tracking.', q30: 'Build a visible track record of safety improvement.',
  },
};
