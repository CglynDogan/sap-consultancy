// Common TypeScript types and interfaces

export interface NavItem {
  readonly name: string;
  readonly href: string;
  readonly hasDropdown?: boolean;
}

export interface ServiceItem {
  readonly name: string;
  readonly href: string;
}

export interface HeaderProps {
  readonly companyName?: string;
  readonly variant?: 'tech-solutions' | 'innovate-solutions';
  readonly buttonText?: string;
}

// Blog and content types
export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly date: string;
  readonly readTime: string;
  readonly url: string;
  readonly author?: string;
  readonly tags?: readonly string[];
}

export interface CaseStudy {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly company: string;
  readonly industry: string;
  readonly challenge: string;
  readonly solution: string;
  readonly results: readonly string[];
  readonly url: string;
  readonly image?: string;
}

// SEO and metadata types
export interface PageMetadata {
  readonly title: string;
  readonly description: string;
  readonly keywords?: string;
  readonly path?: string;
  readonly image?: string;
  readonly type?: 'website' | 'article';
}

// Form types
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly company?: string;
  readonly phone?: string;
  readonly message: string;
  readonly service?: string;
}

// Component variant types
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'outlined' | 'elevated';

// Theme and styling types
export interface ThemeColors {
  readonly primary: string;
  readonly secondary: string;
  readonly success: string;
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly muted: string;
  };
  readonly surface: {
    readonly default: string;
    readonly muted: string;
    readonly border: string;
  };
}