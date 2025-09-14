import Layout from '@/components/Layout';

export default function CloudMigration() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Start Migration">
      {/* Hero Section */}
      <div className="w-full">
        <div className="px-3 xs:px-4 sm:px-6">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#004990] to-[#007CC0] rounded-lg items-start justify-center px-4 py-8 sm:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                SAP Cloud Migration Services
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal sm:text-xl">
                Seamlessly migrate your SAP systems to the cloud with minimal downtime. Leverage cloud benefits while maintaining security and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Overview</h2>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-4xl">
          Our SAP cloud migration services help organizations transition from on-premises SAP systems to cloud-based solutions.
          We provide end-to-end migration services that ensure data integrity, minimize business disruption, and maximize the benefits
          of cloud technology including scalability, cost efficiency, and enhanced security.
        </p>
      </div>

      {/* Cloud Benefits */}
      <div className="px-4 py-8 bg-[#f8fafc]">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Cloud Migration Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Cost Reduction</h3>
            <p className="text-[#617589] text-sm">Up to 30% reduction in IT infrastructure costs</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Scalability</h3>
            <p className="text-[#617589] text-sm">Easily scale resources up or down based on demand</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Enhanced Security</h3>
            <p className="text-[#617589] text-sm">Enterprise-grade security with regular updates</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Performance</h3>
            <p className="text-[#617589] text-sm">Improved system performance and reliability</p>
          </div>
        </div>
      </div>

      {/* Migration Approaches */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Migration Approaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#7c3aed] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Lift and Shift</h3>
            <p className="text-[#617589] text-sm mb-4">
              Move existing SAP systems to cloud infrastructure with minimal changes to the application architecture.
            </p>
            <div className="space-y-2">
              <div className="text-green-600 text-sm">✓ Fastest migration approach</div>
              <div className="text-green-600 text-sm">✓ Minimal business disruption</div>
              <div className="text-green-600 text-sm">✓ Quick time to value</div>
            </div>
          </div>

          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#7c3aed] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Replatform</h3>
            <p className="text-[#617589] text-sm mb-4">
              Optimize applications for cloud environments while maintaining core architecture and functionality.
            </p>
            <div className="space-y-2">
              <div className="text-green-600 text-sm">✓ Better cloud optimization</div>
              <div className="text-green-600 text-sm">✓ Performance improvements</div>
              <div className="text-green-600 text-sm">✓ Enhanced security</div>
            </div>
          </div>

          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#7c3aed] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Refactor</h3>
            <p className="text-[#617589] text-sm mb-4">
              Redesign applications to be cloud-native, taking full advantage of cloud services and capabilities.
            </p>
            <div className="space-y-2">
              <div className="text-green-600 text-sm">✓ Maximum cloud benefits</div>
              <div className="text-green-600 text-sm">✓ Modern architecture</div>
              <div className="text-green-600 text-sm">✓ Future-proof solution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Process */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Migration Process</h2>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">1</div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Assessment & Planning</h3>
              <p className="text-[#617589] text-base">Comprehensive analysis of current infrastructure, applications, and business requirements. Development of detailed migration roadmap and timeline.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">2</div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Cloud Architecture Design</h3>
              <p className="text-[#617589] text-base">Design optimal cloud architecture considering security, performance, scalability, and cost requirements. Selection of appropriate cloud services and configurations.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">3</div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Migration Execution</h3>
              <p className="text-[#617589] text-base">Systematic migration of applications and data with minimal downtime. Implementation of cloud-native features and optimization of performance.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">4</div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Testing & Validation</h3>
              <p className="text-[#617589] text-base">Comprehensive testing of migrated systems including functionality, performance, and security validation. User acceptance testing and issue resolution.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">5</div>
            <div className="flex-1">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Go-Live & Optimization</h3>
              <p className="text-[#617589] text-base">Smooth transition to production with continuous monitoring and optimization. Post-migration support and ongoing cloud management services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Platforms */}
      <div className="px-4 py-8 bg-[#f8fafc]">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Supported Cloud Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#ff9900] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">AWS</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Amazon Web Services</h3>
            <p className="text-[#617589] text-sm">Comprehensive SAP-certified cloud infrastructure with global reach</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#0078d4] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-sm">Azure</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Microsoft Azure</h3>
            <p className="text-[#617589] text-sm">Enterprise-ready cloud platform with strong SAP partnership</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg border border-[#dbe0e6]">
            <div className="w-16 h-16 bg-[#4285f4] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-sm">GCP</span>
            </div>
            <h3 className="text-[#111418] text-lg font-bold mb-2">Google Cloud Platform</h3>
            <p className="text-[#617589] text-sm">Advanced analytics and machine learning capabilities for SAP</p>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Migration Success Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
            <div className="text-[#7c3aed] text-3xl font-bold mb-2">99.9%</div>
            <p className="text-[#111418] text-sm font-bold mb-1">Uptime SLA</p>
            <p className="text-[#617589] text-xs">Guaranteed system availability</p>
          </div>

          <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
            <div className="text-[#7c3aed] text-3xl font-bold mb-2">30%</div>
            <p className="text-[#111418] text-sm font-bold mb-1">Cost Reduction</p>
            <p className="text-[#617589] text-xs">Average infrastructure savings</p>
          </div>

          <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
            <div className="text-[#7c3aed] text-3xl font-bold mb-2">50%</div>
            <p className="text-[#111418] text-sm font-bold mb-1">Performance Boost</p>
            <p className="text-[#617589] text-xs">Improved system performance</p>
          </div>

          <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
            <div className="text-[#7c3aed] text-3xl font-bold mb-2">24/7</div>
            <p className="text-[#111418] text-sm font-bold mb-1">Monitoring</p>
            <p className="text-[#617589] text-xs">Continuous system oversight</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
              Ready to Migrate to the Cloud?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
              Start your SAP cloud migration journey with our expert team. We'll help you achieve a seamless transition.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#7c3aed] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
              <span className="truncate">Start Migration</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}