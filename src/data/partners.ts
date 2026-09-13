export interface Partner {
  code: string;
  type: string;
  name: string;
  desc: string;
  tags: string[];
}

export const PARTNERS: Partner[] = [
  { code: 'BSI', type: 'Certification Body', name: 'BSI Group', desc: "The world's oldest national standards body, founded 1901. BSI offers globally recognised certification with particular strength in UK, European, and government-facing requirements.", tags: ['ISO 27001', 'ISO 9001', 'ISO 14001', 'ISO 45001'] },
  { code: 'DNV', type: 'Certification Body', name: 'DNV', desc: 'A global quality assurance and risk management company with deep roots in maritime, energy, and healthcare sectors. DNV certification is widely respected in regulated industries.', tags: ['ISO 27001', 'ISO 9001', 'ISO 45001', 'ISO 14001'] },
  { code: 'Citation Group', type: 'Compliance Partner', name: 'Citation Group', desc: "Australia's leading workplace compliance and HR consultancy, complementing our ISO 45001 and integrated management system implementations across Australian organisations.", tags: ['ISO 45001', 'WHS', 'HR Compliance'] },
  { code: 'GRS', type: 'Certification Body', name: 'Global Regulatory Services', desc: 'An accredited certification body with strong presence across Australia and Asia-Pacific. A commercially pragmatic option for SMEs seeking recognised ISO certification.', tags: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'] },
  { code: 'SGS', type: 'Certification Body', name: 'SGS', desc: "The world's leading testing, inspection and certification company — operating in 140+ countries. SGS is particularly valued in trade, manufacturing, and supply chain industries.", tags: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'] },
  { code: 'SAI Global', type: 'Certification Body', name: 'SAI Global', desc: 'A prominent Australian-origin certification body operating globally. SAI Global is well-recognised across Australian government, healthcare, and construction sectors.', tags: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'] },
];

export const COUNTRIES = [
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
];
