import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://techsolutions.ca';
const companyName = 'Tech Solutions';

export function generateMetadata({
  title,
  description,
  keywords,
  path = ''
}: PageMetadata): Metadata {
  const fullTitle = title.includes(companyName) ? title : `${title} | ${companyName}`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: companyName,
      type: 'website',
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const defaultMetadata = generateMetadata({
  title: 'Leading SAP Consultancy in Canada',
  description: 'Transform your business with our expert SAP consulting services. We provide SAP implementation, support, and optimization solutions for businesses across Canada.',
  keywords: 'SAP consulting, SAP implementation, SAP support, ERP solutions, business transformation, Canada',
});