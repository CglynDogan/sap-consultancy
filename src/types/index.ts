// Common TypeScript types and interfaces

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeaderProps {
  companyName?: string;
  variant?: 'tech-solutions' | 'innovate-solutions';
  buttonText?: string;
}

export interface ServiceItem {
  name: string;
  href: string;
}