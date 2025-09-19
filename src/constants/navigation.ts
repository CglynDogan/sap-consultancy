import { NavItem, ServiceItem } from '@/types';

export const SERVICES_DROPDOWN_ITEMS: ServiceItem[] = [
  { name: 'SAP Implementation', href: '/services/sap-implementation' },
  { name: 'SAP Consulting', href: '/services/sap-consulting' },
  { name: 'SAP Support', href: '/services/sap-support' },
  { name: 'Cloud Migration', href: '/services/cloud-migration' }
];

export const TECH_SOLUTIONS_NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Insights', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' }
];

export const INNOVATE_SOLUTIONS_NAV_ITEMS: NavItem[] = [
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Industries', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];