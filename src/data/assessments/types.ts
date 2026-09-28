export interface AssessmentQuestion {
  id: string;
  t: string; // short title
  q: string; // full question text
  h: string; // help/context text
}

export interface AssessmentDomain {
  key: string;
  label: string;
  desc: string;
  questions: AssessmentQuestion[];
}

export interface PercentageAssessment {
  slug: string;
  title: string;
  standardTag: string;
  timeEstimate: string;
  scoringMode: 'percentage';
  domains: AssessmentDomain[];
  actions: Record<string, string>;
}

export interface MaturitySection {
  key: string;
  title: string;
  questions: string[];
}

export interface MaturityAssessment {
  slug: string;
  title: string;
  standardTag: string;
  timeEstimate: string;
  scoringMode: 'maturity';
  sections: MaturitySection[];
}

export interface RecommendationQuestion {
  id: string;
  q: string; // full question text
  h?: string; // optional help/context text
  target: 'iso27001' | 'iso42001'; // which standard this question's answer counts toward
}

export interface RecommendationOutcome {
  title: string;
  body: string;
}

export interface RecommendationAssessment {
  slug: string;
  title: string;
  standardTag: string;
  timeEstimate: string;
  scoringMode: 'recommendation';
  intro: string;
  questions: RecommendationQuestion[];
  outcomes: {
    iso27001: RecommendationOutcome;
    iso42001: RecommendationOutcome;
    both: RecommendationOutcome;
  };
}

export type Assessment = PercentageAssessment | MaturityAssessment | RecommendationAssessment;

// Shared 3-point scale used by the recommendation-mode assessment.
export const RECOMMENDATION_SCALE = [
  { v: 0, l: 'No' },
  { v: 1, l: 'Somewhat' },
  { v: 2, l: 'Yes' },
];

// Shared 4-point answer scale used by every percentage-mode assessment.
export const CHOICES = [
  { v: 0, l: 'Not established', d: 'Largely absent, unmanaged, or difficult to evidence.' },
  { v: 1, l: 'Partially working', d: 'Some good intent, but patchy, informal, or person-dependent.' },
  { v: 2, l: 'Generally working', d: 'Reasonably in place, though consistency or evidence may need strengthening.' },
  { v: 3, l: 'Well embedded', d: 'Organised, repeatable, and easier to defend during audit or review.' },
];

// Shared 4-point maturity scale used by the Essential Eight assessment.
export const MATURITY_SCALE = [
  { l: 'No', v: 0 },
  { l: 'Partly', v: 1 },
  { l: 'Mostly', v: 2 },
  { l: 'Yes', v: 3 },
];
