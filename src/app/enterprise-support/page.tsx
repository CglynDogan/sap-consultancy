import { Layout } from '@/components';
import Link from 'next/link';

export default function EnterpriseSupport() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Sales">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Enterprise Support</p>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Premium SAP support services with custom SLA agreements tailored for enterprise-scale operations.
            Get guaranteed response times and dedicated expert support for your mission-critical systems.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full mb-12">
        <div className="bg-gradient-to-r from-[#009DE0] to-[#007CC0] text-white rounded-xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl mb-6">
              Custom SLA Enterprise Support
            </h2>
            <p className="text-white/90 text-lg font-normal leading-normal sm:text-xl mb-8 max-w-3xl mx-auto">
              Get dedicated SAP support with guaranteed response times, priority access to experts, and custom service level agreements designed for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#009DE0] font-bold rounded-lg hover:bg-[#f0f2f4] transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Sales Team
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#009DE0] transition-all transform hover:scale-105"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Enterprise Features</h2>
        <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Comprehensive support features designed for enterprise-scale SAP operations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#009DE0] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111418] mb-3">24/7 Priority Support</h3>
            <p className="text-[#617589] leading-relaxed">
              Round-the-clock access to senior SAP consultants with guaranteed response times based on issue severity.
            </p>
          </div>

          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#009DE0] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111418] mb-3">Custom SLA Agreements</h3>
            <p className="text-[#617589] leading-relaxed">
              Tailored service level agreements that align with your business requirements and operational needs.
            </p>
          </div>

          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#009DE0] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111418] mb-3">Dedicated Account Manager</h3>
            <p className="text-[#617589] leading-relaxed">
              Your dedicated point of contact who understands your business and coordinates all support activities.
            </p>
          </div>

          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#009DE0] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111418] mb-3">Proactive Monitoring</h3>
            <p className="text-[#617589] leading-relaxed">
              Continuous system monitoring and proactive issue identification to prevent business disruptions.
            </p>
          </div>
        </div>
      </div>

      {/* SLA Tiers */}
      <div className="px-4 py-8 bg-[#f8fafc]">
        <div className="text-center mb-12">
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Service Level Agreement Tiers</h2>
          <p className="text-[#617589] text-base font-normal leading-normal max-w-4xl mx-auto">
            Choose the support level that best fits your business requirements and budget
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bronze Tier */}
          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#CD7F32] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Bronze Support</h3>
            <p className="text-[#617589] text-sm mb-4">Essential support for growing businesses</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Business hours support
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                4-hour response time
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Email & phone support
              </li>
            </ul>
            <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 border border-[#009DE0] text-[#009DE0] rounded-lg hover:bg-[#009DE0] hover:text-white transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Silver Tier */}
          <div className="bg-white border-2 border-[#009DE0] rounded-xl p-8 text-center hover:shadow-lg transition-all relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#009DE0] text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div className="w-16 h-16 bg-[#C0C0C0] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Silver Support</h3>
            <p className="text-[#617589] text-sm mb-4">Enhanced support for enterprise operations</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Extended hours support
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                2-hour response time
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Priority ticket handling
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Quarterly health checks
              </li>
            </ul>
            <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#009DE0] text-white rounded-lg hover:bg-[#007CC0] transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Gold Tier */}
          <div className="bg-white border border-[#dbe0e6] rounded-xl p-8 text-center hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#FFD700] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-xl font-bold mb-3">Gold Support</h3>
            <p className="text-[#617589] text-sm mb-4">Premium support for mission-critical systems</p>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                24/7 support availability
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                30-minute response time
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Dedicated account manager
              </li>
              <li className="flex items-center text-[#617589] text-sm">
                <span className="w-2 h-2 bg-[#009DE0] rounded-full mr-2"></span>
                Proactive monitoring
              </li>
            </ul>
            <Link href="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 border border-[#009DE0] text-[#009DE0] rounded-lg hover:bg-[#009DE0] hover:text-white transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Enterprise Support?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <h3 className="text-[#111418] text-xl font-bold mb-3">Minimize Downtime</h3>
            <p className="text-[#617589] text-base">
              Our enterprise support ensures your SAP systems run smoothly with minimal interruptions, protecting your business operations and revenue.
            </p>
          </div>
          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <h3 className="text-[#111418] text-xl font-bold mb-3">Expert Knowledge</h3>
            <p className="text-[#617589] text-base">
              Access to certified SAP experts who understand your industry and can provide specialized solutions for complex challenges.
            </p>
          </div>
          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <h3 className="text-[#111418] text-xl font-bold mb-3">Cost Predictability</h3>
            <p className="text-[#617589] text-base">
              Fixed monthly costs with transparent pricing help you budget effectively and avoid unexpected support expenses.
            </p>
          </div>
          <div className="p-6 border border-[#dbe0e6] rounded-lg">
            <h3 className="text-[#111418] text-xl font-bold mb-3">Strategic Partnership</h3>
            <p className="text-[#617589] text-base">
              We become your trusted SAP partner, providing strategic guidance and roadmap planning for your digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full mx-auto">
              Ready to Elevate Your SAP Support?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-4xl mx-auto">
              Contact our sales team to discuss custom SLA agreements and enterprise support packages tailored to your organization's needs.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow hover:bg-[#007CC0] transition-colors">
              <span className="truncate">Contact Sales Team</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}