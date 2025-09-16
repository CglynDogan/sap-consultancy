import Layout from '@/components/Layout';
import Link from 'next/link';

export default function SAPConsulting() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Get Started">
      {/* Hero Section */}
      <div className="w-full">
        <div className="px-3 xs:px-4 sm:px-6">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#007CC0] to-[#009DE0] rounded-lg items-start justify-center px-4 py-8 sm:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                SAP Consulting Services
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal sm:text-xl">
                Expert guidance and strategic planning to maximize your SAP investment. Transform your business with proven methodologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Overview</h2>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-4xl">
          Our SAP consulting services provide strategic guidance to help organizations make informed decisions about their SAP landscape.
          Whether you're planning a new implementation, optimizing existing systems, or preparing for digital transformation,
          our experienced consultants deliver actionable insights and proven strategies.
        </p>
      </div>

      {/* Consulting Areas */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Consulting Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold leading-tight">Strategic Planning</h3>
            <p className="text-[#617589] text-base font-normal leading-normal">
              Develop comprehensive SAP strategies aligned with your business objectives and long-term goals.
            </p>
            <ul className="text-[#617589] text-sm space-y-1 list-disc list-inside">
              <li>Digital transformation roadmaps</li>
              <li>Technology assessment and recommendations</li>
              <li>Business case development</li>
              <li>Risk assessment and mitigation strategies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold leading-tight">Process Optimization</h3>
            <p className="text-[#617589] text-base font-normal leading-normal">
              Analyze and optimize your business processes to maximize efficiency and reduce operational costs.
            </p>
            <ul className="text-[#617589] text-sm space-y-1 list-disc list-inside">
              <li>Business process reengineering</li>
              <li>Workflow optimization</li>
              <li>Performance benchmarking</li>
              <li>Best practice implementation</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold leading-tight">System Architecture</h3>
            <p className="text-[#617589] text-base font-normal leading-normal">
              Design robust and scalable SAP system architectures that support your business growth.
            </p>
            <ul className="text-[#617589] text-sm space-y-1 list-disc list-inside">
              <li>Technical architecture design</li>
              <li>Integration planning</li>
              <li>Security framework design</li>
              <li>Scalability assessment</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold leading-tight">Performance Analysis</h3>
            <p className="text-[#617589] text-base font-normal leading-normal">
              Comprehensive analysis of your SAP system performance with actionable improvement recommendations.
            </p>
            <ul className="text-[#617589] text-sm space-y-1 list-disc list-inside">
              <li>System performance audits</li>
              <li>Bottleneck identification</li>
              <li>Optimization recommendations</li>
              <li>ROI analysis and reporting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-8 bg-[#f8fafc]">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Why Choose Our Consulting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#009DE0] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">10+</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Years Experience</h3>
            <p className="text-[#617589] text-sm">Decade of expertise in SAP consulting across various industries</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#009DE0] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">50+</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Certified Consultants</h3>
            <p className="text-[#617589] text-sm">Team of highly qualified and certified SAP professionals</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#009DE0] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">200+</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Successful Projects</h3>
            <p className="text-[#617589] text-sm">Proven track record of successful consulting engagements</p>
          </div>
        </div>
      </div>

      {/* Consulting Process */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Our Consulting Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">1</div>
            <h3 className="text-[#111418] text-base font-bold mb-2">Assessment</h3>
            <p className="text-[#617589] text-sm">Current state analysis and opportunity identification</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">2</div>
            <h3 className="text-[#111418] text-base font-bold mb-2">Strategy</h3>
            <p className="text-[#617589] text-sm">Develop customized strategies and roadmaps</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">3</div>
            <h3 className="text-[#111418] text-base font-bold mb-2">Planning</h3>
            <p className="text-[#617589] text-sm">Detailed implementation and change management planning</p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">4</div>
            <h3 className="text-[#111418] text-base font-bold mb-2">Execution</h3>
            <p className="text-[#617589] text-sm">Guide implementation with ongoing support and optimization</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full mx-auto">
              Ready for Strategic SAP Consulting?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px] mx-auto">
              Let's discuss your challenges and develop a customized SAP strategy for your organization.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
              <span className="truncate">Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}