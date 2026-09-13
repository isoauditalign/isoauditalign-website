import type { Assessment } from './types';
import { iso27001Assessment } from './iso-27001';
import { iso9001Assessment } from './iso-9001';
import { iso14001Assessment } from './iso-14001';
import { iso45001Assessment } from './iso-45001';
import { iso42001Assessment } from './iso-42001';
import { essentialEightAssessment } from './essential-eight';

export const ASSESSMENTS: Assessment[] = [
  iso27001Assessment,
  iso9001Assessment,
  iso14001Assessment,
  iso45001Assessment,
  iso42001Assessment,
  essentialEightAssessment,
];

export const getAssessment = (slug: string) => ASSESSMENTS.find((a) => a.slug === slug);

export * from './types';
