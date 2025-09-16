import Layout from '@/components/Layout';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Case Studies</p>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Discover how we've helped organizations transform their business processes with innovative SAP solutions.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="flex flex-col gap-8 p-4">
        {/* Case Study 1 */}
        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex items-start gap-4">
            <div
              className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZdyHFqap7Myw7qlinMghsxwtk9D4uyyt2rX4921xHYeQrSo1VjQ6-wXsMRWCroMUMFXbzM4M441678TaJinMuVc7EokLBGhrACWWarinYb7QhgwS1fu0SUFfJEd1tvqQhjUaG7tgS19I57VGklxB9AAqtK870yquPLwhfxgNw-ub0mECxpIooOZINMFGQS5-myWYnt6CQeQc7ENpqX6qGRa7jCtYH_wEhYssOmexfi8lCnjvYU9BN0Kmcdzsycvl4WYp4IdN2FB4")',
              }}
            ></div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">Global Manufacturing Inc.</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Manufacturing • 5000+ employees</p>
              <p className="text-[#111418] text-base font-normal leading-normal">
                Successfully implemented SAP S/4HANA across multiple facilities, resulting in 30% improvement in operational efficiency
                and 25% reduction in processing time.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">SAP S/4HANA</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Manufacturing</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Implementation</span>
              </div>
            </div>
          </div>
          <Link href="/case-study/global-manufacturing-inc" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
            <span className="truncate">Read Full Case Study</span>
          </Link>
        </div>

        {/* Case Study 2 */}
        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex items-start gap-4">
            <div
              className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7xwCEEd3w7caezH57VcFmcbXKnwRuJKSnJm5lwfXNO1NS7eDI9iXedAmrZDua0w6Uqwq0KEZF77UELPmIV6bFFJ1n-Lh6xFidtOQE5-p0OzIIrs79t0BakXwCotZeI22owBT2GaoQzL-fEgFF5Il1RKdkB2hz0SXWgKseob23Ay6njqo3Q9mvrx-QnLeS6ijq91KeDOsULMuBlnz2aVDNzYkfncweTwISVNOUySKkKQuM9SomqJK30S5QLDmd1yHk8nCuqhhawmA")',
              }}
            ></div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">National Retail Group</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Retail • 2500+ employees</p>
              <p className="text-[#111418] text-base font-normal leading-normal">
                Migrated legacy systems to SAP Cloud solutions, enabling real-time inventory management and improved customer experience
                across 150+ retail locations.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">SAP Cloud</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Retail</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Migration</span>
              </div>
            </div>
          </div>
          <Link href="/case-study/national-retail-group" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
            <span className="truncate">Read Full Case Study</span>
          </Link>
        </div>

        {/* Case Study 3 */}
        <div className="flex flex-col gap-4 p-6 border border-[#dbe0e6] rounded-lg">
          <div className="flex items-start gap-4">
            <div
              className="w-32 h-32 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA1yJFv4g-M3StQQgKCRW6-ugIGwjYskZwZBFto6mVumQkPOjy0drN-YoZBdzIcH-yFLnLYpwEYHsVnK711_dB_yvNwspARbr2SCA_IjV4iqsVYgNvO7kmz-05AdwNKuMF1qxGPHFMwLlGaT-ZHB8JC7GeZ2JEp8pNB3cyGDg9sRQg8Dz8lFg9-_k3Be3X8JG7lOnQDUGrRA3h8cf0XrZehuNthfE6I9EmIchee_Qo2T9444tsrE1HwZWXf0vpg3q0vJwh6u3vAZ4")',
              }}
            ></div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-[#111418] text-xl font-bold leading-tight">Regional Healthcare Systems</h3>
              <p className="text-[#617589] text-sm font-normal leading-normal">Healthcare • 3000+ employees</p>
              <p className="text-[#111418] text-base font-normal leading-normal">
                Implemented comprehensive SAP solutions for patient management and resource optimization, improving patient care quality
                and operational efficiency by 40%.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">SAP ERP</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Healthcare</span>
                <span className="px-3 py-1 bg-[#f0f2f4] text-[#111418] text-xs font-medium rounded-full">Optimization</span>
              </div>
            </div>
          </div>
          <Link href="/case-study/regional-healthcare-systems" className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit">
            <span className="truncate">Read Full Case Study</span>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-8">
        <div className="flex flex-col items-center gap-2 p-6 border border-[#dbe0e6] rounded-lg">
          <p className="text-[#009DE0] text-3xl font-bold">150+</p>
          <p className="text-[#111418] text-sm font-medium text-center">Successful Projects</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-6 border border-[#dbe0e6] rounded-lg">
          <p className="text-[#009DE0] text-3xl font-bold">95%</p>
          <p className="text-[#111418] text-sm font-medium text-center">Client Satisfaction</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-6 border border-[#dbe0e6] rounded-lg">
          <p className="text-[#009DE0] text-3xl font-bold">24/7</p>
          <p className="text-[#111418] text-sm font-medium text-center">Support Available</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-4 xs:gap-6 sm:gap-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 xs:py-10 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full">
              Ready to Start Your Success Story?
            </h1>
            <p className="text-[#111418] text-sm xs:text-base font-normal leading-normal w-full">
              Let's discuss how we can help your organization achieve similar results with our SAP expertise.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#009DE0] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}