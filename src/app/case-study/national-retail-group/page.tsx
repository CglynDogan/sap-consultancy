import { Layout } from '@/components';
import Link from 'next/link';

export default function NationalRetailGroupCaseStudy() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#007CC0] to-[#009DE0] @[480px]:rounded-lg items-start justify-center px-4 py-8 @[480px]:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <Link href="/case-studies" className="text-white/80 hover:text-white text-sm">Case Studies</Link>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm">National Retail Group</span>
              </div>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                National Retail Group
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl">
                Retail • 2500+ employees • 150+ locations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Overview</h2>
          <p className="text-[#111418] text-base font-normal leading-normal mb-6">
            National Retail Group operates over 150 retail locations across Canada with more than 2,500 employees.
            They needed to modernize their legacy systems to improve customer experience and streamline operations across all locations.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">SAP Cloud</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Retail</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Migration</span>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-[#111418] text-base font-normal leading-normal">
              National Retail Group faced significant operational challenges that were impacting their growth:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#111418] text-base font-normal leading-normal ml-4">
              <li>Outdated point-of-sale systems causing transaction delays</li>
              <li>Inconsistent inventory data across multiple locations</li>
              <li>Manual processes for inventory management and reordering</li>
              <li>Limited visibility into customer purchasing patterns</li>
              <li>Difficulty in implementing unified promotions and pricing strategies</li>
              <li>Lack of real-time reporting capabilities for management</li>
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Our Solution</h2>
          <div className="space-y-6">
            <p className="text-[#111418] text-base font-normal leading-normal">
              Tech Solutions designed and implemented a comprehensive SAP Cloud solution for retail operations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP Commerce Cloud</h3>
                <p className="text-[#617589] text-sm">Unified commerce platform connecting online and in-store experiences with real-time inventory synchronization.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP Customer Activity Repository</h3>
                <p className="text-[#617589] text-sm">Centralized customer data platform providing 360-degree customer insights and personalized experiences.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP Integrated Business Planning</h3>
                <p className="text-[#617589] text-sm">Advanced demand forecasting and inventory optimization across all retail locations.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP Analytics Cloud</h3>
                <p className="text-[#617589] text-sm">Real-time business intelligence and analytics for data-driven decision making.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">35%</div>
              <div className="text-[#111418] text-sm font-medium">Increase in Customer Satisfaction</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">50%</div>
              <div className="text-[#111418] text-sm font-medium">Reduction in Inventory Discrepancies</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">60%</div>
              <div className="text-[#111418] text-sm font-medium">Faster Transaction Processing</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[#111418] text-base font-normal leading-normal">
              The SAP Cloud migration enabled National Retail Group to achieve unprecedented levels of operational efficiency and customer satisfaction.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#111418] text-base font-normal leading-normal ml-4">
              <li>Real-time inventory visibility across all 150+ locations</li>
              <li>Improved customer experience with faster checkout processes</li>
              <li>Enhanced ability to respond to market trends and customer demands</li>
              <li>Unified view of customer behavior and preferences</li>
              <li>Streamlined supply chain and vendor management</li>
            </ul>
          </div>
        </div>

        {/* Key Features Implemented */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Key Features Implemented</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-[#111418] text-lg font-bold">Inventory Management</h3>
              <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                <li>Real-time stock tracking</li>
                <li>Automated reordering</li>
                <li>Multi-location inventory optimization</li>
                <li>Demand forecasting</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#111418] text-lg font-bold">Customer Experience</h3>
              <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                <li>Unified customer profiles</li>
                <li>Personalized promotions</li>
                <li>Omnichannel shopping experience</li>
                <li>Loyalty program integration</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#111418] text-lg font-bold">Operations</h3>
              <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                <li>Centralized pricing management</li>
                <li>Automated financial reconciliation</li>
                <li>Streamlined vendor management</li>
                <li>Performance analytics</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-[#111418] text-lg font-bold">Reporting & Analytics</h3>
              <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                <li>Real-time dashboards</li>
                <li>Sales performance tracking</li>
                <li>Customer behavior insights</li>
                <li>Predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Transform Your Retail Operations
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
                Discover how SAP Cloud solutions can revolutionize your retail business operations and customer experience.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                <span className="truncate">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}