import Layout from '@/components/Layout';

export default function Careers() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Join Our Team</p>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Be part of a dynamic team that's shaping the future of SAP consulting. We offer exciting career opportunities for talented professionals.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Work With Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Professional Growth</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We provide continuous learning opportunities, certifications, and career advancement paths to help you reach your full potential.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Work-Life Balance</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Flexible working arrangements, remote work options, and comprehensive benefits package to support your well-being.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Innovative Projects</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Work on cutting-edge SAP implementations and transformations for leading organizations across various industries.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Collaborative Culture</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Join a supportive team environment where collaboration, knowledge sharing, and mutual respect are core values.
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Current Openings</h2>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">Senior SAP Consultant</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Vancouver, BC • Full-time • Senior Level</p>
            </div>
            <span className="px-3 py-1 bg-[#e8f5e8] text-[#2d5016] text-xs font-medium rounded-full">Open</span>
          </div>
          <p className="text-[#111418] text-base font-normal leading-normal">
            We're looking for an experienced SAP consultant to lead implementation projects and mentor junior team members.
            5+ years of SAP experience required.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">SAP S/4HANA</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Project Management</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Leadership</span>
          </div>
          <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Apply Now</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">SAP Functional Analyst</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Toronto, ON • Full-time • Mid Level</p>
            </div>
            <span className="px-3 py-1 bg-[#e8f5e8] text-[#2d5016] text-xs font-medium rounded-full">Open</span>
          </div>
          <p className="text-[#111418] text-base font-normal leading-normal">
            Join our team as a functional analyst specializing in SAP modules. Great opportunity for career growth and skill development.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">SAP FI/CO</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Business Analysis</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Documentation</span>
          </div>
          <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Apply Now</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">Junior SAP Developer</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Remote • Full-time • Entry Level</p>
            </div>
            <span className="px-3 py-1 bg-[#e8f5e8] text-[#2d5016] text-xs font-medium rounded-full">Open</span>
          </div>
          <p className="text-[#111418] text-base font-normal leading-normal">
            Perfect opportunity for recent graduates or professionals looking to start their SAP career. Full training provided.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">ABAP</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Development</span>
            <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Training</span>
          </div>
          <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Apply Now</span>
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Benefits & Perks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Competitive salary and bonuses</p>
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Health and dental coverage</p>
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Professional certifications</p>
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Flexible working hours</p>
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Remote work options</p>
        </div>
        <div className="flex items-center gap-3 p-4">
          <div className="w-8 h-8 bg-[#009DE0] rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <p className="text-[#111418] text-sm font-medium">Team building activities</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Ready to Join Our Team?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
              Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
              <span className="truncate">Send Resume</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}