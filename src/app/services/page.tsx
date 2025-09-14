import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Request a Consultation">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Our SAP Consultancy Services</p>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            We offer comprehensive SAP services to help your business achieve operational excellence and drive growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div id="implementation" className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="text-[#111418]" data-icon="Gear" data-size="32px">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
            </svg>
          </div>
          <h3 className="text-[#111418] text-xl font-bold leading-tight">SAP Implementation</h3>
          <p className="text-[#617589] text-base font-normal leading-normal">
            End-to-end SAP implementation services including system design, configuration, testing, and deployment. We ensure seamless integration with your existing business processes.
          </p>
          <Link href="/services/sap-implementation" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Learn More</span>
          </Link>
        </div>

        <div id="consulting" className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="text-[#111418]" data-icon="PresentationChart" data-size="32px">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
            </svg>
          </div>
          <h3 className="text-[#111418] text-xl font-bold leading-tight">SAP Consulting</h3>
          <p className="text-[#617589] text-base font-normal leading-normal">
            Strategic SAP consulting services to help you make informed decisions about your SAP landscape. We provide expert guidance on best practices and optimization strategies.
          </p>
          <Link href="/services/sap-consulting" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Learn More</span>
          </Link>
        </div>

        <div id="support" className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="text-[#111418]" data-icon="UsersThree" data-size="32px">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
            </svg>
          </div>
          <h3 className="text-[#111418] text-xl font-bold leading-tight">SAP Support</h3>
          <p className="text-[#617589] text-base font-normal leading-normal">
            Comprehensive SAP support services including system maintenance, troubleshooting, user training, and continuous optimization to ensure peak performance.
          </p>
          <Link href="/services/sap-support" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Learn More</span>
          </Link>
        </div>

        <div id="migration" className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="text-[#111418]" data-icon="CloudArrowUp" data-size="32px">
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M196,72A60,60,0,0,0,84,100.36,44,44,0,0,0,92,188h16V176a8,8,0,0,1,16,0v12h24V164a8,8,0,0,1,16,0v24h32a36,36,0,0,0,0-72Zm0,56H164V116a8,8,0,0,0-16,0v12H124V116a8,8,0,0,0-16,0v12H92a28,28,0,0,1,0-56,8,8,0,0,0,8-8,44,44,0,0,1,88,0,8,8,0,0,0,8,8A20,20,0,0,1,196,128Zm-51.51-4.49a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.31L164,92.68V48a8,8,0,0,0-16,0V92.68L135.51,80.19a8,8,0,0,0-11.32,11.31Z"></path>
            </svg>
          </div>
          <h3 className="text-[#111418] text-xl font-bold leading-tight">Cloud Migration</h3>
          <p className="text-[#617589] text-base font-normal leading-normal">
            Seamless SAP cloud migration services to help you leverage the power of cloud computing while maintaining security and performance standards.
          </p>
          <Link href="/services/cloud-migration" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] w-fit">
            <span className="truncate">Learn More</span>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-6 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:gap-8 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
              Ready to Get Started?
            </h1>
            <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
              Contact us today to discuss how we can help transform your business with our SAP expertise.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] grow">
              <span className="truncate">Request Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}