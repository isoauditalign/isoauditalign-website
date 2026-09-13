import alcro from '../assets/clients/alcro.png';
import cki from '../assets/clients/cki.png';
import allcareNursing from '../assets/clients/allcare-nursing.png';
import wePlatt from '../assets/clients/we-platt.png';
import agCoombs from '../assets/clients/ag-coombs.png';
import intowork from '../assets/clients/intowork.png';
import efex from '../assets/clients/efex.png';
import itStrategic from '../assets/clients/it-strategic.png';
import dms from '../assets/clients/dms.png';
import datcom from '../assets/clients/datcom.png';
import divinationGsha from '../assets/clients/divination-gsha.jpg';
import type { ImageMetadata } from 'astro';

export interface Client {
  slug: string;
  name: string;
  href?: string;
  sector: string;
  logo?: ImageMetadata;
  alt?: string;
}

export const CLIENTS: Client[] = [
  { slug: 'alcro', name: 'Alcro', href: 'https://www.alcro.com.au', sector: 'Technology', logo: alcro, alt: 'Alcro logo' },
  { slug: 'cki', name: 'CKI Group', href: 'https://cki.com.au', sector: 'Infrastructure', logo: cki, alt: 'CKI Group logo' },
  { slug: 'allcare-nursing', name: 'Allcare Nursing & Community Services', href: 'https://www.allcarenursing.com.au', sector: 'Healthcare', logo: allcareNursing, alt: 'Allcare Nursing & Community Services logo' },
  { slug: 'we-platt', name: 'W&E Platt Mounts & Ordnance', href: 'https://www.plattmounts.com', sector: 'Services', logo: wePlatt, alt: 'W&E Platt Mounts & Ordnance logo' },
  { slug: 'ag-coombs', name: 'A.G. Coombs', href: 'https://www.agcoombs.com.au', sector: 'Engineering', logo: agCoombs, alt: 'A.G. Coombs logo' },
  { slug: 'intowork', name: 'IntoWork Australia', href: 'https://intowork.com.au', sector: 'Employment Services', logo: intowork, alt: 'IntoWork Australia logo' },
  { slug: 'efex', name: 'Efex', href: 'https://www.efex.com.au', sector: 'Managed Services', logo: efex, alt: 'Efex logo' },
  { slug: 'protechly', name: 'Protechly', sector: 'Cybersecurity' },
  { slug: 'it-strategic', name: 'IT.Strategic', href: 'https://www.itstrategic.com.au', sector: 'IT Consulting', logo: itStrategic, alt: 'IT.Strategic logo' },
  { slug: 'dms', name: 'DMS', href: 'https://www.dms-it.com.au', sector: 'IT Services', logo: dms, alt: 'DMS logo' },
  { slug: 'datcom', name: 'Datcom', href: 'https://datcom.com.au', sector: 'Technology Solutions', logo: datcom, alt: 'Datcom logo' },
  { slug: 'divination-gsha', name: 'Divination by G.Sha', sector: 'Consulting', logo: divinationGsha, alt: 'Divination by G.Sha logo' },
];

export const getClient = (slug: string) => CLIENTS.find((c) => c.slug === slug);
