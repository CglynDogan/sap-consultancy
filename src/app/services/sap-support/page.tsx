import Layout from '@/components/Layout';

export default function SAPSupport() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Get Support">
      {/* Hero Section */}
      <div className="w-full">
        <div className="px-3 xs:px-4 sm:px-6">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#F0AB00] to-[#009DE0] rounded-lg items-start justify-center px-4 py-8 sm:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                SAP Support Services
              </h1>
              <p className="text-white/90 text-lg font-normal leading-normal sm:text-xl">
                Comprehensive SAP support and maintenance to ensure smooth operations, system reliability, and optimal performance around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-4">Overview</h2>
        <p className="text-[#111418] text-base font-normal leading-normal max-w-4xl">
          Our SAP support services provide ongoing maintenance, troubleshooting, and optimization to keep your SAP systems running at peak performance.
          From 24/7 monitoring to proactive maintenance, we ensure your business operations never miss a beat.
        </p>
      </div>

      {/* Support Tiers */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Support Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Essential Support */}
          <div className="flex flex-col p-6 border-2 border-[#dbe0e6] rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Essential Support</h3>
              <div className="text-[#009DE0] text-2xl font-bold mb-2">Business Hours</div>
              <p className="text-[#617589] text-sm">Perfect for small to medium businesses</p>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">8x5 support coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Email and phone support</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">System monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Monthly health checks</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Basic troubleshooting</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 border border-[#009DE0] text-[#009DE0] rounded-lg hover:bg-[#009DE0] hover:text-white transition-colors">
              Learn More
            </button>
          </div>

          {/* Premium Support */}
          <div className="flex flex-col p-6 border-2 border-[#009DE0] rounded-lg relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#009DE0] text-white px-4 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Premium Support</h3>
              <div className="text-[#009DE0] text-2xl font-bold mb-2">24/7 Support</div>
              <p className="text-[#617589] text-sm">Ideal for mission-critical operations</p>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">24x7 support coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Priority response times</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Proactive monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Performance optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Dedicated support manager</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 bg-[#009DE0] text-white rounded-lg hover:bg-[#0f5aa8] transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Support */}
          <div className="flex flex-col p-6 border-2 border-[#dbe0e6] rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-[#111418] text-xl font-bold mb-2">Enterprise Support</h3>
              <div className="text-[#009DE0] text-2xl font-bold mb-2">Custom SLA</div>
              <p className="text-[#617589] text-sm">Tailored for large enterprises</p>
            </div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Custom service level agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Dedicated support team</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">On-site support option</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Strategic consulting included</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#617589] text-sm">Advanced reporting & analytics</span>
              </li>
            </ul>
            <button className="w-full py-2 px-4 border border-[#009DE0] text-[#009DE0] rounded-lg hover:bg-[#009DE0] hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="px-4 py-8 bg-[#f8fafc]">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Support Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">System Monitoring</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              24/7 proactive monitoring of your SAP systems to identify and resolve issues before they impact your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Incident Management</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Rapid response and resolution of system incidents with priority-based escalation procedures.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Performance Tuning</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Ongoing optimization of system performance to ensure optimal response times and resource utilization.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">System Updates</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Regular system updates, patches, and upgrades to keep your SAP environment secure and up-to-date.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">User Training</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Comprehensive training programs for end users and system administrators to maximize system adoption.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-white border border-[#dbe0e6] rounded-lg">
            <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight">Health Assessments</h3>
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Regular system health assessments with detailed reports and recommendations for improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Response Times */}
      <div className="px-4 py-8">
        <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6">Response Times</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#dbe0e6] rounded-lg">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="border border-[#dbe0e6] p-4 text-left text-[#111418] font-bold">Priority Level</th>
                <th className="border border-[#dbe0e6] p-4 text-left text-[#111418] font-bold">Description</th>
                <th className="border border-[#dbe0e6] p-4 text-left text-[#111418] font-bold">Response Time</th>
                <th className="border border-[#dbe0e6] p-4 text-left text-[#111418] font-bold">Resolution Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#dbe0e6] p-4 text-[#dc2626] font-bold">Critical</td>
                <td className="border border-[#dbe0e6] p-4 text-[#617589]">System down, business operations halted</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">15 minutes</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">4 hours</td>
              </tr>
              <tr className="bg-[#f8fafc]">
                <td className="border border-[#dbe0e6] p-4 text-[#ea580c] font-bold">High</td>
                <td className="border border-[#dbe0e6] p-4 text-[#617589]">Major functionality impaired</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">1 hour</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">8 hours</td>
              </tr>
              <tr>
                <td className="border border-[#dbe0e6] p-4 text-[#eab308] font-bold">Medium</td>
                <td className="border border-[#dbe0e6] p-4 text-[#617589]">Partial functionality affected</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">4 hours</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">24 hours</td>
              </tr>
              <tr className="bg-[#f8fafc]">
                <td className="border border-[#dbe0e6] p-4 text-[#16a34a] font-bold">Low</td>
                <td className="border border-[#dbe0e6] p-4 text-[#617589]">Minor issues, general questions</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">8 hours</td>
                <td className="border border-[#dbe0e6] p-4 text-[#111418]">5 business days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
              Need SAP Support?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
              Get reliable, professional SAP support tailored to your business needs. Our expert team is ready to help.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#16a34a] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
              <span className="truncate">Get Support Now</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}