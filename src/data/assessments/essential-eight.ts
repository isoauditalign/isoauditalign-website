import type { MaturityAssessment } from './types';

export const essentialEightAssessment: MaturityAssessment = {
  slug: 'essential-eight-assessment',
  title: 'ASD Essential Eight Assessment',
  standardTag: 'Essential Eight Maturity Model',
  timeEstimate: '15–20 min',
  scoringMode: 'maturity',
  sections: [
    { key: 'appCtrl', title: 'Application Control', questions: [
      'Do you restrict which applications can run on user endpoints and servers?',
      'Is the allow-list or approved software list reviewed and maintained?',
      'Are unauthorised portable apps, scripts, or executables blocked by default?',
      'Are privileged users also subject to application control requirements?',
      'Is there a defined process for approving or rejecting new software requests?',
    ] },
    { key: 'patchApp', title: 'Patch Applications', questions: [
      'Are internet-facing applications patched within a defined and enforced timeframe?',
      'Do you maintain an inventory of installed applications and versions?',
      'Are unsupported or end-of-life applications identified and removed or isolated?',
      'Is patching monitored and reported so overdue items are visible?',
      'Is there an exception process for applications that cannot be patched quickly?',
    ] },
    { key: 'macros', title: 'Office Macros', questions: [
      'Are macros blocked from the internet or restricted by policy?',
      'Can only trusted or approved macros run in your environment?',
      'Are users prevented from enabling risky macros without approval?',
      'Are macro settings applied consistently across relevant devices?',
      'Is macro use reviewed as part of security governance or change control?',
    ] },
    { key: 'harden', title: 'User App Hardening', questions: [
      'Are risky browser features such as unnecessary plugins disabled or restricted?',
      'Do browsers and PDF viewers use hardened security settings?',
      'Are users prevented from running active content where it is not required?',
      'Are web browsing controls aligned with secure baseline configurations?',
      'Is hardening reviewed after major application or browser changes?',
    ] },
    { key: 'adminPriv', title: 'Admin Privileges', questions: [
      'Do administrators use separate admin accounts from day-to-day user accounts?',
      'Is privileged access limited to approved staff and reviewed regularly?',
      'Are privileged activities logged and monitored?',
      'Are shared or generic admin accounts avoided or tightly controlled?',
      'Is there a defined process for granting, changing, and removing admin access?',
    ] },
    { key: 'patchOS', title: 'Patch Operating Systems', questions: [
      'Are operating systems patched within a defined timeframe based on risk?',
      'Is there visibility of missing OS patches across servers and endpoints?',
      'Are unsupported operating systems identified and remediated?',
      'Are emergency or critical OS patches expedited when needed?',
      'Is patch compliance reviewed and reported to management?',
    ] },
    { key: 'mfa', title: 'Multi-Factor Authentication', questions: [
      'Is MFA enabled for remote access, privileged access, and key business services?',
      'Is MFA enforced consistently rather than left optional for users?',
      'Are phishing-resistant MFA methods used for higher-risk access where possible?',
      'Is there a secure process for MFA reset, recovery, and enrolment?',
      'Are service exceptions to MFA documented and reviewed?',
    ] },
    { key: 'backups', title: 'Regular Backups', questions: [
      'Are critical business systems and data backed up on a defined schedule?',
      'Are backups protected from modification, deletion, or ransomware impact?',
      'Are restore tests performed to confirm backups are usable?',
      'Are backup roles, retention, and responsibilities clearly defined?',
      'Are offline, immutable, or resilient backup arrangements in place for critical data?',
    ] },
  ],
};
