import Layout from '@/components/Layout';

export default function SAPImplementation() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Get Started">
      {/* Hero Section */}
      <div className="w-full">
        <div className="px-3 xs:px-4 sm:px-6">
          <div className="flex min-h-[250px] sm:min-h-[300px] flex-col gap-4 sm:gap-6 bg-gradient-to-r from-[#009DE0] to-[#007CC0] rounded-lg items-start justify-center px-4 sm:px-6 py-6 sm:py-8 md:px-10">
            <div className="flex flex-col gap-3 sm:gap-4 text-left max-w-4xl">
              <h1 className="text-white text-2xl sm:text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl">
                SAP Implementation Services
              </h1>
              <p className="text-white/90 text-base sm:text-lg font-normal leading-normal lg:text-xl">
                Seamless SAP implementation customized to your business processes. We ensure smooth deployment and optimal system performance from day one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Overview</h2>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-4xl">
          Our SAP implementation services provide end-to-end deployment solutions designed to minimize disruption and maximize efficiency.
          With over a decade of experience, our certified consultants ensure your SAP system is configured to meet your unique business requirements
          while following industry best practices.
        </p>
      </div>

      {/* Key Features */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Custom Configuration</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Tailored system configuration to match your specific business processes and industry requirements.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Quality Assurance</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Comprehensive testing and validation to ensure system reliability and data integrity.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">User Training</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Comprehensive training programs to ensure your team can effectively use the new system.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Go-Live Support</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              24/7 support during go-live phase to ensure smooth transition and immediate issue resolution.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Data Migration</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Secure and accurate migration of your existing data to the new SAP system.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Performance Optimization</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              System tuning and optimization to ensure maximum performance and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Implementation Process</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
            <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h3 className="text-[#111418] text-lg font-bold mb-2">Discovery & Analysis</h3>
              <p className="text-[#617589] text-sm">Comprehensive assessment of your current systems, business processes, and requirements.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
            <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h3 className="text-[#111418] text-lg font-bold mb-2">System Design</h3>
              <p className="text-[#617589] text-sm">Create detailed system architecture and configuration blueprints tailored to your needs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
            <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h3 className="text-[#111418] text-lg font-bold mb-2">Configuration & Development</h3>
              <p className="text-[#617589] text-sm">Configure SAP modules and develop custom solutions to meet specific business requirements.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
            <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h3 className="text-[#111418] text-lg font-bold mb-2">Testing & Validation</h3>
              <p className="text-[#617589] text-sm">Rigorous testing including unit testing, integration testing, and user acceptance testing.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 border-l-4 border-[#009DE0] bg-[#f8fafc]">
            <div className="w-8 h-8 bg-[#009DE0] text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
            <div>
              <h3 className="text-[#111418] text-lg font-bold mb-2">Go-Live & Support</h3>
              <p className="text-[#617589] text-sm">Smooth system deployment with 24/7 support during the critical go-live period.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
              Ready to Implement SAP?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
              Let's discuss your SAP implementation project and create a customized solution for your business.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
              <span className="truncate">Get Started Today</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}