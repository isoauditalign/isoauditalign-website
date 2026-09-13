import type { PercentageAssessment } from './types';

export const iso9001Assessment: PercentageAssessment = {
  slug: 'iso-9001-assessment',
  title: 'ISO 9001:2015 Self-Assessment',
  standardTag: 'ISO 9001:2015',
  timeEstimate: '12–15 min',
  scoringMode: 'percentage',
  domains: [
    {
      key: 'lead', label: 'Leadership & Context', desc: 'Context, interested parties, policy, and roles.',
      questions: [
        { id: 'q1', t: 'Organisational context understood', q: 'Has the business identified the internal and external issues that affect its ability to deliver consistent quality?', h: 'Market conditions, resourcing, technology, culture.' },
        { id: 'q2', t: 'Interested parties identified', q: 'Do you know which customers, regulators, and other parties have requirements relevant to quality?', h: 'Their needs shape what the QMS needs to cover.' },
        { id: 'q3', t: 'Quality policy in place', q: 'Is there a quality policy that is understood and applied by staff, not just filed away?', h: 'Should guide real decisions, not sit unused.' },
        { id: 'q4', t: 'Roles and authorities clear', q: 'Are quality-related roles, responsibilities, and authorities clearly assigned?', h: 'Who owns nonconformances, approvals, and reviews.' },
        { id: 'q5', t: 'Leadership visibly engaged', q: 'Does leadership actively support and review the quality management system?', h: 'Visible commitment, not just a signed policy.' },
        { id: 'q6', t: 'QMS scope defined', q: 'Is the scope of the quality management system clearly defined and documented?', h: 'What products, services, and sites are covered.' },
      ],
    },
    {
      key: 'plan', label: 'Planning & Risk', desc: 'Risks, opportunities, and quality objectives.',
      questions: [
        { id: 'q7', t: 'Risks and opportunities addressed', q: 'Are risks and opportunities that could affect quality outcomes identified and actioned?', h: 'Should influence planning, not just be listed.' },
        { id: 'q8', t: 'Quality objectives set', q: 'Are measurable quality objectives set at relevant functions and levels?', h: 'Specific, measurable, and reviewed regularly.' },
        { id: 'q9', t: 'Objectives linked to policy', q: 'Do quality objectives clearly link back to the quality policy and business direction?', h: 'Objectives should not be disconnected from intent.' },
        { id: 'q10', t: 'Change planned', q: 'When significant changes occur, is the impact on quality considered and planned for?', h: 'New products, processes, systems, or suppliers.' },
        { id: 'q11', t: 'Resources planned for objectives', q: 'Is resourcing considered when setting quality objectives and plans?', h: 'Objectives without resources rarely succeed.' },
        { id: 'q12', t: 'Progress against objectives tracked', q: 'Is progress against quality objectives reviewed at planned intervals?', h: 'Not just set-and-forget targets.' },
      ],
    },
    {
      key: 'sup', label: 'Support & Resources', desc: 'People, competence, and documented information.',
      questions: [
        { id: 'q13', t: 'Competence managed', q: 'Is the competence of people doing work affecting quality determined and maintained?', h: 'Training, qualifications, and experience.' },
        { id: 'q14', t: 'Awareness of quality policy', q: 'Are staff aware of the quality policy and how their work contributes to it?', h: 'Awareness training or induction content.' },
        { id: 'q15', t: 'Infrastructure adequate', q: 'Is infrastructure (equipment, facilities, IT) adequate to consistently meet requirements?', h: 'Maintained and fit for purpose.' },
        { id: 'q16', t: 'Communication effective', q: 'Is there effective internal and external communication relevant to the QMS?', h: 'Who needs to know what, when, and how.' },
        { id: 'q17', t: 'Documented information controlled', q: 'Is documented information (procedures, records) controlled, current, and accessible?', h: 'Version control, approval, and accessibility.' },
        { id: 'q18', t: 'Monitoring equipment calibrated', q: 'Where relevant, is monitoring and measuring equipment calibrated or verified?', h: 'Applicable to manufacturing and technical services.' },
      ],
    },
    {
      key: 'ops', label: 'Operations', desc: 'Customer requirements, design, and process control.',
      questions: [
        { id: 'q19', t: 'Customer requirements determined', q: 'Are customer requirements clearly determined and reviewed before commitment?', h: 'Contract or order review before acceptance.' },
        { id: 'q20', t: 'Design and development controlled', q: 'Where applicable, is design and development planned and controlled through defined stages?', h: 'Design inputs, outputs, review, verification, validation.' },
        { id: 'q21', t: 'External providers controlled', q: 'Are suppliers and external providers evaluated and monitored for quality performance?', h: 'Approved supplier lists, audits, or scorecards.' },
        { id: 'q22', t: 'Production and service provision controlled', q: 'Is production or service delivery carried out under controlled conditions?', h: 'Work instructions, in-process checks, defined criteria.' },
        { id: 'q23', t: 'Identification and traceability maintained', q: 'Where required, can products or services be identified and traced through the process?', h: 'Batch numbers, job cards, or service logs.' },
        { id: 'q24', t: 'Nonconforming outputs controlled', q: 'Are nonconforming products or services identified and controlled to prevent unintended use?', h: 'Quarantine, rework, or rejection processes.' },
      ],
    },
    {
      key: 'perf', label: 'Performance & Improvement', desc: 'Monitoring, audit, and continual improvement.',
      questions: [
        { id: 'q25', t: 'Customer satisfaction monitored', q: 'Is customer satisfaction monitored and used to inform improvement?', h: 'Surveys, feedback, complaints, or repeat business trends.' },
        { id: 'q26', t: 'Internal audits conducted', q: 'Are internal audits of the QMS conducted at planned intervals?', h: 'Covering all relevant processes over an audit cycle.' },
        { id: 'q27', t: 'Management review held', q: 'Does leadership conduct a formal management review of the QMS at planned intervals?', h: 'Inputs and outputs aligned to ISO 9001 requirements.' },
        { id: 'q28', t: 'Nonconformity and corrective action managed', q: 'When nonconformities occur, is root cause identified and corrective action taken?', h: 'Not just fixing the symptom.' },
        { id: 'q29', t: 'Data analysed for improvement', q: 'Is quality-related data analysed to identify trends and improvement opportunities?', h: 'Turning records into insight.' },
        { id: 'q30', t: 'Continual improvement demonstrated', q: 'Can the business show ongoing improvement of the QMS over time?', h: 'Evidence of change driven by the system, not luck.' },
      ],
    },
  ],
  actions: {
    q1: 'Document the internal and external issues relevant to quality.', q2: 'Identify interested parties and their quality-related requirements.', q3: 'Develop or refresh a quality policy staff actually use.', q4: 'Clarify quality-related roles, responsibilities, and authorities.', q5: 'Increase visible leadership engagement with the QMS.', q6: 'Define and document the scope of the QMS.', q7: 'Identify and act on risks and opportunities affecting quality.', q8: 'Set measurable quality objectives at relevant levels.', q9: 'Align quality objectives with the quality policy and business direction.', q10: 'Build quality impact assessment into change planning.', q11: 'Resource quality objectives adequately.', q12: 'Introduce regular review of progress against quality objectives.', q13: 'Formalise competence requirements and records for relevant roles.', q14: 'Improve staff awareness of the quality policy and their role in it.', q15: 'Review infrastructure adequacy against quality requirements.', q16: 'Strengthen internal and external communication relevant to quality.', q17: 'Improve control of documented information and records.', q18: 'Implement or tighten calibration/verification of monitoring equipment.', q19: 'Formalise the customer requirements and contract review process.', q20: 'Strengthen design and development controls and stage gates.', q21: 'Improve evaluation and monitoring of external providers.', q22: 'Strengthen control over production and service provision.', q23: 'Improve identification and traceability where required.', q24: 'Tighten control of nonconforming outputs.', q25: 'Introduce structured customer satisfaction monitoring.', q26: 'Establish or improve the internal audit programme.', q27: 'Formalise management review inputs and outputs.', q28: 'Improve root cause analysis and corrective action process.', q29: 'Use quality data analysis to drive decisions.', q30: 'Build a visible track record of continual improvement.',
  },
};
