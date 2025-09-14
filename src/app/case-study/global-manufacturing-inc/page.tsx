import Layout from '@/components/Layout';
import Link from 'next/link';

export default function GlobalManufacturingIncCaseStudy() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#009DE0] to-[#007CC0] @[480px]:rounded-lg items-start justify-center px-4 py-8 @[480px]:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <Link href="/case-studies" className="text-white/80 hover:text-white text-sm">Case Studies</Link>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm">Global Manufacturing Inc.</span>
              </div>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Global Manufacturing Inc.
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal @[480px]:text-xl">
                Manufacturing • 5000+ employees
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
            Global Manufacturing Inc. is a leading manufacturing company with over 5,000 employees across multiple facilities worldwide.
            They faced challenges with outdated systems, inefficient processes, and lack of real-time visibility into their operations.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">SAP S/4HANA</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Manufacturing</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-sm font-medium rounded-full">Implementation</span>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">The Challenge</h2>
          <div className="space-y-4">
            <p className="text-[#111418] text-base font-normal leading-normal">
              Global Manufacturing Inc. was struggling with several critical issues:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#111418] text-base font-normal leading-normal ml-4">
              <li>Legacy ERP systems causing data silos and inefficiencies</li>
              <li>Manual processes leading to errors and delays in production planning</li>
              <li>Lack of real-time visibility into inventory and supply chain</li>
              <li>Difficulty in meeting customer demands due to poor forecasting</li>
              <li>Compliance challenges across different regulatory environments</li>
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Our Solution</h2>
          <div className="space-y-6">
            <p className="text-[#111418] text-base font-normal leading-normal">
              Tech Solutions implemented a comprehensive SAP S/4HANA solution tailored to their manufacturing needs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">SAP S/4HANA Implementation</h3>
                <p className="text-[#617589] text-sm">Complete migration from legacy systems to SAP S/4HANA with real-time analytics and reporting capabilities.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Production Planning & Scheduling</h3>
                <p className="text-[#617589] text-sm">Advanced planning and scheduling modules to optimize production workflows and resource allocation.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Supply Chain Integration</h3>
                <p className="text-[#617589] text-sm">End-to-end supply chain visibility with automated procurement and inventory management.</p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3">Quality Management</h3>
                <p className="text-[#617589] text-sm">Integrated quality control processes ensuring compliance with industry standards and regulations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">30%</div>
              <div className="text-[#111418] text-sm font-medium">Improvement in Operational Efficiency</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">25%</div>
              <div className="text-[#111418] text-sm font-medium">Reduction in Processing Time</div>
            </div>

            <div className="text-center p-6 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0] text-4xl font-bold mb-2">40%</div>
              <div className="text-[#111418] text-sm font-medium">Faster Decision Making</div>
            </div>
          </div>

          <p className="text-[#111418] text-base font-normal leading-normal">
            The implementation resulted in significant improvements across all key performance indicators. Global Manufacturing Inc.
            now has real-time visibility into their operations, streamlined processes, and the ability to respond quickly to market changes.
          </p>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-12">
          <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Implementation Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
              <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">Planning & Analysis (Months 1-2)</h3>
                <p className="text-[#617589] text-sm">Comprehensive business process analysis, system architecture design, and project planning.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
              <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">System Configuration (Months 3-6)</h3>
                <p className="text-[#617589] text-sm">SAP S/4HANA configuration, custom development, and system integration with existing infrastructure.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
              <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">Testing & Training (Months 7-8)</h3>
                <p className="text-[#617589] text-sm">Comprehensive system testing, user training programs, and change management activities.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
              <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">Go-Live & Support (Month 9)</h3>
                <p className="text-[#617589] text-sm">Successful system go-live with 24/7 support and post-implementation optimization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Ready for Your SAP Transformation?
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
                Let's discuss how we can help your organization achieve similar results with our SAP expertise.
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