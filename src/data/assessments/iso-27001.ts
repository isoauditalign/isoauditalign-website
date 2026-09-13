import type { PercentageAssessment } from './types';

export const iso27001Assessment: PercentageAssessment = {
  slug: 'iso-27001-assessment',
  title: 'ISO 27001:2022 Self-Assessment',
  standardTag: 'ISO 27001:2022',
  timeEstimate: '15–20 min',
  scoringMode: 'percentage',
  domains: [
    {
      key: 'gov', label: 'Governance & Direction', desc: 'Policies, ownership, obligations, and direction.',
      questions: [
        { id: 'q1', t: 'Written security policies', q: 'Does your business have simple written security rules or policies that staff can actually find and follow?', h: 'Passwords, remote work, acceptable use, handling sensitive information.' },
        { id: 'q2', t: 'Clear ownership', q: 'Do people understand who is responsible for key security decisions and recurring tasks?', h: 'Approving access, handling incidents, reviewing vendors, accepting exceptions.' },
        { id: 'q3', t: 'Important systems known', q: 'Do you know which systems, services, records, and data matter most to the business?', h: 'Helps protect the things that would hurt most if they failed or were exposed.' },
        { id: 'q4', t: 'Security in change', q: 'When systems, suppliers, or services change, is security usually considered as part of the decision?', h: 'Security should not be bolted on after the fact.' },
        { id: 'q5', t: 'External obligations understood', q: 'Does the business understand the main legal, privacy, or contractual security obligations it needs to meet?', h: 'These obligations often shape what controls and records are needed.' },
        { id: 'q6', t: 'Security direction reviewed', q: 'Do leaders regularly review security priorities, issues, and progress?', h: 'Management meetings, operational reviews, or board reporting.' },
      ],
    },
    {
      key: 'ppl', label: 'People & Awareness', desc: 'Staff, contractors, leavers, and awareness.',
      questions: [
        { id: 'q7', t: 'Onboarding controlled', q: 'When someone joins, do they receive the right accounts and security expectations in a controlled way?', h: 'Should not be left to informal handover alone.' },
        { id: 'q8', t: 'Access removed on exit', q: 'When someone leaves or changes roles, is access removed or adjusted promptly?', h: 'One of the most common weak spots in smaller organisations.' },
        { id: 'q9', t: 'Ongoing awareness', q: 'Do staff receive regular reminders or training about common security risks?', h: 'Phishing, passwords, confidential information, reporting suspicious activity.' },
        { id: 'q10', t: 'Sensitive roles get extra care', q: 'Do staff with higher-risk access or responsibilities receive extra oversight or stronger controls?', h: 'Administrators, finance users, staff handling sensitive data.' },
        { id: 'q11', t: 'Contractors managed', q: 'Are contractors brought in and removed with similar care to employees?', h: 'Temporary workers should not bypass normal security expectations.' },
        { id: 'q12', t: 'Easy to raise concerns', q: 'Do staff know how to report a suspected incident, mistake, or suspicious event?', h: 'People need an easy path to speak up quickly.' },
      ],
    },
    {
      key: 'phy', label: 'Physical Security', desc: 'Sites, equipment, disposal, and workplace.',
      questions: [
        { id: 'q13', t: 'Sites controlled', q: 'Are offices and areas with important systems physically controlled against unauthorised access?', h: 'Keys, swipe cards, locked rooms, reception processes.' },
        { id: 'q14', t: 'Visitors managed', q: 'Are visitors and contractors managed in a sensible way when they enter business areas?', h: 'People should not be able to wander through sensitive areas unchecked.' },
        { id: 'q15', t: 'Equipment protected', q: 'Are laptops, portable devices, and paper records protected from loss, theft, or misuse?', h: 'Devices in the office, at home, or while travelling.' },
        { id: 'q16', t: 'Clear desk habits', q: 'Do people avoid leaving sensitive information exposed on desks, printers, or unlocked screens?', h: 'Simple habits often prevent avoidable disclosure.' },
        { id: 'q17', t: 'Environmental risks', q: 'Are power, fire, water, or temperature risks considered for important systems or records?', h: 'These issues matter whether systems are on-site or in a comms room.' },
        { id: 'q18', t: 'Secure disposal', q: 'Are old devices, paper records, and storage media disposed of in a secure way?', h: 'Information should not remain accessible after equipment is retired.' },
      ],
    },
    {
      key: 'tec', label: 'Technical Controls', desc: 'Identity, cloud, logging, backups, and data.',
      questions: [
        { id: 'q19', t: 'User access controlled', q: 'Are user accounts created, changed, reviewed, and removed consistently?', h: 'Joiners, movers, leavers, shared access, and regular review.' },
        { id: 'q20', t: 'MFA in place', q: 'Is multi-factor authentication used for important systems, remote access, and privileged accounts?', h: 'Email, remote access, cloud admin, finance, and other critical systems.' },
        { id: 'q21', t: 'Admin access restricted', q: 'Are administrator accounts restricted, monitored, and used more carefully than normal accounts?', h: 'Admin access should not be treated the same as everyday access.' },
        { id: 'q22', t: 'Cloud services governed', q: 'If you use cloud services, are they chosen and configured with security in mind?', h: 'Microsoft 365, Azure, AWS, Google Workspace, SaaS platforms.' },
        { id: 'q23', t: 'Storage locations known', q: 'Does the business know where important information is stored and whether it is suitably protected?', h: 'File shares, SharePoint, cloud drives, SaaS tools, local devices, backup storage.' },
        { id: 'q24', t: 'Information classified', q: 'Do people know which information is more sensitive and should be handled with extra care?', h: 'Even simple classification habits are useful.' },
        { id: 'q25', t: 'DLP considered', q: 'Are there controls to reduce the risk of sensitive information being emailed or shared inappropriately?', h: 'DLP tools, email controls, sharing restrictions, or manual review steps.' },
        { id: 'q26', t: 'Logging and monitoring', q: 'Are important systems logged and reviewed enough to spot unusual or suspicious activity?', h: 'Logs are most useful when someone can actually use them to investigate.' },
        { id: 'q27', t: 'Backups tested', q: 'Are important systems and data backed up, protected, and tested so recovery is likely to work?', h: 'A backup is only useful if it can be restored.' },
        { id: 'q28', t: 'Vendors checked', q: 'Before trusting a supplier, do you usually check whether they are secure enough for the work they will do?', h: 'Questionnaires, contracts, certifications, security discussions.' },
      ],
    },
    {
      key: 'res', label: 'Response & Resilience', desc: 'Incidents, evidence, and continuity.',
      questions: [
        { id: 'q29', t: 'Incidents handled', q: 'If something goes wrong, does the business know how to report it, respond, and learn from it?', h: 'Phishing, suspicious access, outages, data exposure, supplier incidents.' },
        { id: 'q30', t: 'Evidence available', q: 'Can the business show records that important security activities really happened?', h: 'Access reviews, approvals, backup tests, supplier reviews, training records.' },
        { id: 'q31', t: 'Business continuity', q: 'Has the business thought through how it would keep operating if key systems or staff were disrupted?', h: 'The practical side of business continuity planning.' },
        { id: 'q32', t: 'Recovery priorities known', q: 'Do you know which systems or services need to come back first after a disruption?', h: 'Knowing what matters most for recovery.' },
        { id: 'q33', t: 'Tests or walkthroughs', q: 'Are important response or recovery processes ever tested or talked through with the right people?', h: 'Tabletop discussions and restore tests both count.' },
        { id: 'q34', t: 'Issues followed through', q: 'Are recurring weaknesses or incidents used to drive actual improvement?', h: 'Problems should lead to action, not just discussion.' },
      ],
    },
  ],
  actions: {
    q1: 'Create clear, usable security policies.', q2: 'Clarify ownership for recurring security decisions.', q3: 'Document the systems, services, and data that matter most.', q4: 'Add a security check into business and technology change decisions.', q5: 'Document legal, customer, privacy, and contractual security obligations.', q6: 'Introduce a regular management review of security issues and progress.', q7: 'Formalise onboarding so access and responsibilities are managed consistently.', q8: 'Tighten offboarding so access is removed or adjusted promptly.', q9: 'Run regular awareness activities that reflect real business risks.', q10: 'Apply stronger oversight to privileged or higher-risk roles.', q11: 'Manage contractors with the same discipline used for employees.', q12: 'Give staff a clear way to report incidents or suspicious events.', q13: 'Strengthen physical access control around offices and sensitive equipment.', q14: 'Improve visitor management so non-staff are controlled within premises.', q15: 'Protect portable devices and paper records from theft or loss.', q16: 'Reinforce clear desk and clear screen habits.', q17: 'Review environmental risks for important assets.', q18: 'Use secure disposal and sanitisation for records and media.', q19: 'Standardise user access provisioning, review, and removal.', q20: 'Expand MFA coverage for important systems and privileged accounts.', q21: 'Tighten privileged access governance and monitoring.', q22: 'Strengthen cloud governance including configuration review.', q23: 'Map where important information is stored and review protection.', q24: 'Introduce clearer information classification so staff know what needs care.', q25: 'Review DLP controls to reduce inappropriate sharing of sensitive data.', q26: 'Improve logging and monitoring so unusual activity can be detected.', q27: 'Strengthen backup protection and restore testing.', q28: 'Increase supplier security due diligence before trust is granted.', q29: 'Use a clearer incident response approach with ownership and lessons learned.', q30: 'Retain better evidence of security activities.', q31: 'Develop practical business continuity planning for key services.', q32: 'Define recovery priorities for critical systems.', q33: 'Run walkthroughs or restore tests to validate response processes.', q34: 'Make recurring issues visible until action is completed.',
  },
};
