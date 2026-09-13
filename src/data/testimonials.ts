export interface Testimonial {
  name: string;
  role: string;
  text: string;
  featured?: boolean;
  logoSlug?: string; // matches a key in src/data/clients.ts
  linkedIn?: string;
  source?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rube Sayed',
    role: 'General Manager, Enterprise — Efex / Datcom',
    text: "I had the pleasure of working with Prashant on our ISO 27001 certification journey, and I can't recommend him highly enough. He guided us through what could have been an overwhelming process with remarkable clarity and structure — from gap analysis and risk assessments to policy development and audit preparation. Prashant has a rare ability to translate complex compliance requirements into practical, actionable steps that our whole team could understand and execute. He was responsive, thorough, and always a step ahead. Thanks in large part to his expertise, we achieved certification smoothly and on schedule.",
    featured: true,
    logoSlug: 'efex',
    linkedIn: 'https://www.linkedin.com/in/rubesayed/',
  },
  {
    name: 'Elizabeth Hucker',
    role: 'Director — All Care Nursing',
    text: 'Prashant made what felt like an impossible task completely manageable. Our nursing organisation had very little existing documentation and Prashant built our entire quality management system from the ground up. He understood our sector, spoke to our staff at the right level, and we passed our ISO 9001 audit on the first attempt. I wouldn’t hesitate to recommend him.',
    logoSlug: 'allcare-nursing',
    source: 'Client Testimonial',
  },
  {
    name: 'Charlie',
    role: 'Managing Director — Weplatt',
    text: 'We engaged Prashant to get our ISO 27001 certification as a requirement for a major government tender. He was incredibly professional, kept the project on track, and the way he simplified the technical requirements meant our whole team could actually engage with the process. We got certified within the timeframe we needed and won the contract.',
    logoSlug: 'we-platt',
    source: 'Client Testimonial',
  },
  {
    name: 'Ben',
    role: 'CEO — Alcro',
    text: 'Prashant is one of those rare consultants who actually understands the business as well as the standard. He didn’t just give us a compliance document — he helped us build a real information security programme that our team now runs confidently. The audit was smooth, the auditors were impressed, and we have a system we can actually maintain.',
    logoSlug: 'alcro',
    source: 'Client Testimonial',
  },
  {
    name: 'D Bal',
    role: 'Operations Director — CKI',
    text: 'We needed ISO 45001 across a complex infrastructure operation with multiple sites and contractors. Prashant handled the full scope — from our hazard registers and safe work procedures through to the certification audit. His practical understanding of how real workplaces operate made all the difference. No generic templates, no wasted effort.',
    logoSlug: 'cki',
    source: 'Client Testimonial',
  },
  {
    name: 'Charles Mann',
    role: 'IT Director — Efex',
    text: 'Prashant ran our internal auditor training programme and it transformed how our team thinks about compliance. Not theoretical — genuinely practical, with real examples from our industry. Our internal audits are now far more rigorous and our last external surveillance audit had zero major non-conformances.',
    logoSlug: 'efex',
    source: 'Client Testimonial',
  },
  {
    name: 'Richa Sondhi',
    role: 'Business Program Manager, Security Risk & Compliance — Kyndryl',
    text: 'Prashant is self-motivated with a great team player attitude and positive outlook. He has fantastic understanding of his role and his profession. He handles work-related pressure with ease — I worked with him on the same project and he takes great effort to deep-dive into situations and comes out with in-depth solutions. Sincere, hardworking, and will do well in whatever organisation he chooses.',
    linkedIn: 'https://www.linkedin.com/in/richasondhi/',
  },
  {
    name: 'Naveen Tyagi',
    role: 'Strategic Planner & BCP/DR Specialist — Honda (Former Client)',
    text: 'I worked with Prashant while I was at Honda and he was on the IBM delivery team. He is someone who is always immersed in his work — always keen to take on new responsibilities. He has a knack of extracting performance from his colleagues, even when they believed it was impossible. With a smile on his face and purity in his heart, he is a true go-getter.',
    linkedIn: 'https://www.linkedin.com/in/naveentyagi2003/',
  },
  {
    name: 'Rohit Bisani',
    role: 'GRC Practice Lead (Direct Manager, IBM)',
    text: 'I have known Prashant since 2008 when he joined the GTS Security team. He has solid knowledge of security concepts and is a good team player and quick learner. He brings genuine commitment to every engagement and approaches security challenges with both depth and pragmatism.',
    linkedIn: 'https://www.linkedin.com/in/rohit-bisani-b2912311/',
  },
];
