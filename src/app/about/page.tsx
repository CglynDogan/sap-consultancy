import { Layout } from '@/components';

export default function About() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Get a Quote">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">About Tech Solutions</p>
      </div>

      {/* Introduction */}
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Tech Solutions is a leading SAP consultancy in Canada, dedicated to helping businesses optimize their operations and achieve their strategic goals through
        innovative SAP solutions. With a team of experienced consultants and a commitment to excellence, we deliver tailored solutions that drive tangible results.
      </p>

      {/* Our History Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our History</h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        <div className="flex flex-col items-center gap-1 pt-3">
          <div className="text-[#111418]" data-icon="TextHThree" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">Founded in 2010</p>
          <p className="text-[#617589] text-base font-normal leading-normal">Innovate Solutions was established in Vancouver, focusing on SAP implementation and support.</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#dbe0e6] h-2"></div>
          <div className="text-[#111418]" data-icon="TextHThree" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
            </svg>
          </div>
          <div className="w-[1.5px] bg-[#dbe0e6] h-2 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">Expanded Services</p>
          <p className="text-[#617589] text-base font-normal leading-normal">We broadened our service offerings to include SAP S/4HANA, cloud solutions, and analytics.</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#dbe0e6] h-2"></div>
          <div className="text-[#111418]" data-icon="TextHThree" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">Today</p>
          <p className="text-[#617589] text-base font-normal leading-normal">We continue to lead the industry with cutting-edge SAP solutions and exceptional client service.</p>
        </div>
      </div>

      {/* Our Team Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Team</h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Our team consists of certified SAP consultants with extensive experience across various industries. We are committed to delivering excellence and building
        long-term partnerships with our clients.
      </p>

      {/* Values Section */}
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Excellence</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We strive for excellence in every project, delivering solutions that exceed expectations.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Innovation</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We embrace new technologies and methodologies to provide cutting-edge solutions.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Partnership</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We build long-term partnerships with our clients based on trust and mutual success.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-[#dbe0e6] rounded-lg">
          <h3 className="text-[#111418] text-lg font-bold leading-tight">Integrity</h3>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We conduct business with the highest ethical standards and transparency.
          </p>
        </div>
      </div>
    </Layout>
  );
}