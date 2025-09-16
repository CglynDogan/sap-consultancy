import { Layout } from '@/components';
import Link from 'next/link';

export default function RegionalHealthcareSystemsCaseStudy() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#004990] to-[#007CC0] @[480px]:rounded-lg items-start justify-center px-4 py-8 @[480px]:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <Link href="/case-studies" className="text-white/80 hover:text-white text-sm">Case Studies</Link>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm">Regional Healthcare Systems</span>
              </div>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Regional Healthcare Systems
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl">
                Healthcare • 3000+ employees • Multi-facility network
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
            Regional Healthcare Systems is a leading healthcare provider operating multiple hospitals, clinics, and specialized care facilities
            with over 3,000 employees. They needed to modernize their patient management systems and optimize resource allocation
            to improve patient care quality and operational efficiency.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">SAP ERP</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Healthcare</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Optimization</span>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-[#111418] text-base font-normal leading-normal">
              Regional Healthcare Systems faced critical challenges in delivering optimal patient care:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#111418] text-base font-normal leading-normal ml-4">
              <li>Fragmented patient records across different systems and facilities</li>
              <li>Inefficient resource allocation leading to staff burnout and equipment underutilization</li>
              <li>Manual scheduling processes causing appointment conflicts and delays</li>
              <li>Limited visibility into supply chain and inventory management</li>
              <li>Compliance challenges with healthcare regulations and reporting requirements</li>
              <li>Difficulty in tracking patient outcomes and care quality metrics</li>
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Our Solution</h2>
          <div className="space-y-6">
            <p className="text-[#111418] text-base font-normal leading-normal">
              Tech Solutions implemented a comprehensive SAP healthcare solution tailored to their specific needs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP S/4HANA for Healthcare</h3>
                <p className="text-[#617589] text-sm">Integrated ERP solution with healthcare-specific modules for patient management and clinical operations.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Patient Resource Management</h3>
                <p className="text-[#617589] text-sm">Centralized patient records system with real-time access across all facilities and departments.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Resource Optimization</h3>
                <p className="text-[#617589] text-sm">Advanced scheduling and resource allocation system for staff, equipment, and facility management.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Supply Chain Management</h3>
                <p className="text-[#617589] text-sm">Automated inventory management and procurement system for medical supplies and equipment.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Compliance & Reporting</h3>
                <p className="text-[#617589] text-sm">Automated compliance monitoring and regulatory reporting capabilities.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Analytics & Insights</h3>
                <p className="text-[#617589] text-sm">Real-time analytics for patient outcomes, operational efficiency, and quality metrics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">40%</div>
              <div className="text-[#111418] text-sm font-medium">Improvement in Patient Care Quality</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">30%</div>
              <div className="text-[#111418] text-sm font-medium">Reduction in Administrative Time</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">25%</div>
              <div className="text-[#111418] text-sm font-medium">Increase in Resource Utilization</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[#111418] text-base font-normal leading-normal">
              The implementation delivered transformational results that significantly improved both patient care and operational efficiency:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#111418] text-base font-normal leading-normal ml-4">
              <li>Unified patient records accessible across all facilities and departments</li>
              <li>Streamlined appointment scheduling reducing patient wait times</li>
              <li>Optimized resource allocation improving staff satisfaction and productivity</li>
              <li>Enhanced inventory management reducing waste and stockouts</li>
              <li>Improved compliance with healthcare regulations and quality standards</li>
              <li>Better patient outcomes through data-driven clinical decisions</li>
            </ul>
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Implementation Highlights</h2>
          <div className="space-y-6">
            <div className="p-6 border border-[#dbe0e6] rounded-lg">
              <h3 className="text-[#111418] text-lg font-bold mb-3">Patient-Centric Approach</h3>
              <p className="text-[#617589] text-base">
                Designed the entire system architecture around patient needs, ensuring seamless care delivery across all touchpoints
                while maintaining privacy and security standards.
              </p>
            </div>

            <div className="p-6 border border-[#dbe0e6] rounded-lg">
              <h3 className="text-[#111418] text-lg font-bold mb-3">Phased Implementation</h3>
              <p className="text-[#617589] text-base">
                Executed a carefully planned phased rollout across facilities to minimize disruption to patient care while ensuring
                smooth transition and user adoption.
              </p>
            </div>

            <div className="p-6 border border-[#dbe0e6] rounded-lg">
              <h3 className="text-[#111418] text-lg font-bold mb-3">Staff Training & Change Management</h3>
              <p className="text-[#617589] text-base">
                Comprehensive training programs and change management initiatives ensured high user adoption and minimized
                resistance to new processes and technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-lg font-bold mb-2">SAP S/4HANA</div>
              <div className="text-[#617589] text-xs">Core ERP Platform</div>
            </div>
            <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-lg font-bold mb-2">SAP Fiori</div>
              <div className="text-[#617589] text-xs">User Experience</div>
            </div>
            <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-lg font-bold mb-2">SAP HANA</div>
              <div className="text-[#617589] text-xs">In-Memory Database</div>
            </div>
            <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-lg font-bold mb-2">SAP Analytics</div>
              <div className="text-[#617589] text-xs">Business Intelligence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Modernize Your Healthcare Operations
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
                Learn how SAP solutions can transform your healthcare organization's efficiency and patient care quality.
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