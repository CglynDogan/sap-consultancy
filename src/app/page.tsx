import { Layout } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Get a Quote">
      {/* Hero Section */}
      <div className="w-full">
        <div className="p-1 xs:p-2 sm:p-4">
          <div
            className="flex min-h-[280px] xs:min-h-[320px] sm:min-h-[480px] flex-col gap-3 xs:gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-3 xs:px-4 sm:px-6 pb-6 xs:pb-8 sm:pb-10 md:px-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqDGXCRMTz6JTWO5ZECz6yqX0elg-Fih1hxUM6f4jGLNSu3u5FIAmngC2Fs7Od1GcwN1N1494A1xEaQajkMopbrRMiMuTNZjEQBSZQ_VU2O-IS7Mv_pc4tEChwSliejyj6Af3MxE6MBw64ZKvsKgbm0712h9jlFogR-yah7zc-wlJbdwasx0eaJ6AZByC2Xa-hoI7fEGtA6cUfzMbVLAhh3VAM9DOOvMKPf-fiaTiQRdgh4G0zKbZ27AzyBqLTKnqT5Ys-9rNkp98")',
            }}
          >
            <div className="flex flex-col gap-2 text-left max-w-full">
              <h1 className="text-white text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                Empowering Businesses with SAP Solutions
              </h1>
              <h2 className="text-white text-xs xs:text-sm sm:text-base lg:text-lg font-normal leading-normal">
                We are a leading SAP consultancy in Canada, dedicated to helping businesses optimize their operations and achieve their strategic goals through innovative SAP
                implementations and support.
              </h2>
            </div>
            <button className="flex min-w-[80px] max-w-[200px] xs:max-w-[280px] sm:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 xs:h-10 sm:h-12 px-3 xs:px-4 sm:px-5 bg-[#009DE0] text-white text-xs xs:text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 xs:px-4 pb-2 xs:pb-3 pt-4 xs:pt-5">Our SAP Services</h2>
      <p className="text-[#111418] text-sm xs:text-base font-normal leading-normal pb-2 xs:pb-3 pt-1 px-3 xs:px-4">
        We offer a comprehensive suite of SAP services tailored to meet the unique needs of your business. Our expertise spans across various SAP modules and solutions,
        ensuring seamless integration and optimal performance.
      </p>

      {/* Expertise Section */}
      <div className="flex flex-col gap-6 xs:gap-8 sm:gap-10 px-0 py-6 xs:py-8 sm:py-10">
        <div className="flex flex-col gap-3 xs:gap-4 px-3 xs:px-4">
          <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full">
            Our Expertise
          </h1>
          <p className="text-[#111418] text-sm xs:text-base font-normal leading-normal w-full">
            We offer a comprehensive suite of SAP services tailored to meet the unique needs of your business. Our expertise spans across various SAP modules and solutions,
            ensuring seamless integration and optimal performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-3 xs:px-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Gear" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">SAP Implementation</h2>
              <p className="text-[#617589] text-sm font-normal leading-normal">Seamless implementation of SAP solutions, customized to your business processes.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="PresentationChart" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">SAP Consulting</h2>
              <p className="text-[#617589] text-sm font-normal leading-normal">Expert guidance and strategic planning to maximize your SAP investment.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="UsersThree" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">SAP Support</h2>
              <p className="text-[#617589] text-sm font-normal leading-normal">Ongoing support and maintenance to ensure smooth and efficient operations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 xs:px-4 pb-2 xs:pb-3 pt-4 xs:pt-5">Recent Blog Posts</h2>
      <div className="p-3 xs:p-4">
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 xs:gap-4 rounded-lg">
          <div className="flex flex-col gap-3 xs:gap-4 md:flex-[2_2_0px]">
            <div className="flex flex-col gap-1">
              <p className="text-[#111418] text-sm xs:text-base font-bold leading-tight">Maximizing Efficiency with SAP S/4HANA</p>
              <p className="text-[#617589] text-xs xs:text-sm font-normal leading-normal">
                Explore how SAP S/4HANA can revolutionize your business processes, streamline operations, and drive growth. Learn about the key features and benefits of this
                next-generation ERP system.
              </p>
            </div>
            <Link href="/blog/maximizing-efficiency-with-sap-s4hana" className="flex min-w-[80px] max-w-[150px] xs:max-w-[200px] md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-7 xs:h-8 px-3 xs:px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-xs xs:text-sm font-medium leading-normal w-fit">
              <span className="truncate">Read More</span>
            </Link>
          </div>
          <div
            className="w-full h-40 xs:h-48 md:h-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlwWPrTwTG902el4UJIkvUhowCrkuO2emLZykvWs0xuFcLIjqcriQ-t9OarwsY63zcL53PEKXAoDgS91SYAYfS2Tn03lfGNd5iX9fBKWz4gF-E_eCgPnRfZTYpwcOfmqI-Y8B8_4ihPeiggK7yxj96f7aLfPMa3AcCDBhNUk7e0D2a_ydKBUbibxk93Q-4pj6cDoYuVKjT8AzqDQFsAMyX4jf9KNXIjNbcSdio1S3AXxSQASuMtYUYeOQ3fTXI3kM07NBLjGN2M7Q")',
            }}
          ></div>
        </div>
      </div>
      <div className="p-3 xs:p-4">
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 xs:gap-4 rounded-lg">
          <div className="flex flex-col gap-3 xs:gap-4 md:flex-[2_2_0px]">
            <div className="flex flex-col gap-1">
              <p className="text-[#111418] text-sm xs:text-base font-bold leading-tight">The Future of SAP in the Cloud</p>
              <p className="text-[#617589] text-xs xs:text-sm font-normal leading-normal">
Discover the advantages of migrating your SAP landscape to the cloud. Understand the benefits of scalability, cost savings, and enhanced security for your
                business.
              </p>
            </div>
            <Link href="/blog/the-future-of-sap-in-the-cloud" className="flex min-w-[80px] max-w-[150px] xs:max-w-[200px] md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-7 xs:h-8 px-3 xs:px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-xs xs:text-sm font-medium leading-normal w-fit">
              <span className="truncate">Read More</span>
            </Link>
          </div>
          <div
            className="w-full h-40 xs:h-48 md:h-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEfIJQwYtK6oMdFVytwHjpkwpHlzu8jXRZ_d1zr_KREwwfEGU6wgGaq8gkoxaGI2IyBbshdzkbQ4Ksv7P4elINresy_W_rrYu_fSy2Jl1lg-fIaPhxF0OIzRgkIHRURax0WHpk1sfXy9lveL87zfHApZ9fZtsBiWhP9XErJ6D8Y-TcNHH2vnTwmO_xNL-jIsFzX967QVH8BsitF-bPIvdGcxXuCsZnEbDwmcdIkQKkPFYMCxvZ6jZd0EJRRZntn_CBuQn9pJnhoHE")',
            }}
          ></div>
        </div>
      </div>
      <div className="p-3 xs:p-4">
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 xs:gap-4 rounded-lg">
          <div className="flex flex-col gap-3 xs:gap-4 md:flex-[2_2_0px]">
            <div className="flex flex-col gap-1">
              <p className="text-[#111418] text-sm xs:text-base font-bold leading-tight">Optimizing Your SAP Supply Chain</p>
              <p className="text-[#617589] text-xs xs:text-sm font-normal leading-normal">
Learn how to optimize your supply chain with SAP solutions. Improve inventory management, reduce costs, and enhance customer satisfaction with our expert
                insights.
              </p>
            </div>
            <Link href="/blog/optimizing-your-sap-supply-chain" className="flex min-w-[80px] max-w-[150px] xs:max-w-[200px] md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-7 xs:h-8 px-3 xs:px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-xs xs:text-sm font-medium leading-normal w-fit">
              <span className="truncate">Read More</span>
            </Link>
          </div>
          <div
            className="w-full h-40 xs:h-48 md:h-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:flex-1"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2wQXEzYZzBbXKUhtQF5wnxnwPKedu2rpWgVZ5WHvttE9FweO6HiU9vkWddxlBzQctt0coLUT20-l_ZJOWHMGLsojw-auxDSHxGnFyI5MALdsy_ojLbtJxoRPHnRWvMzG5kSV1Ntpt1LJehw7QBa1SjyiyPqDzZfUst_Aq85fx6PyNX_k_l_EZAMTTDUFiTq8sxisZGsTVtWlxsh4cVgSZCF8ZbgTGBtj2xVC00DEZLyx62lsw4b1anFAY4Tv4H6o3ZEbrceT99Q")',
            }}
          ></div>
        </div>
      </div>

      {/* Client Testimonials */}
      <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 xs:px-4 pb-2 xs:pb-3 pt-4 xs:pt-5">Client Testimonials</h2>
      <div className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-3 xs:p-4 gap-3 md:gap-6">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-72 max-w-80">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZdyHFqap7Myw7qlinMghsxwtk9D4uyyt2rX4921xHYeQrSo1VjQ6-wXsMRWCroMUMFXbzM4M441678TaJinMuVc7EokLBGhrACWWarinYb7QhgwS1fu0SUFfJEd1tvqQhjUaG7tgS19I57VGklxB9AAqtK870yquPLwhfxgNw-ub0mECxpIooOZINMFGQS5-myWYnt6CQeQc7ENpqX6qGRa7jCtYH_wEhYssOmexfi8lCnjvYU9BN0Kmcdzsycvl4WYp4IdN2FB4")',
              }}
            ></div>
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">
                &ldquo;Tech Solutions transformed our business processes with their SAP expertise. Their team was professional, responsive, and delivered exceptional results.&rdquo;
              </p>
              <p className="text-[#617589] text-sm font-normal leading-normal">- Sophia Carter, CEO, Global Manufacturing Inc.</p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-72 max-w-80">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7xwCEEd3w7caezH57VcFmcbXKnwRuJKSnJm5lwfXNO1NS7eDI9iXedAmrZDua0w6Uqwq0KEZF77UELPmIV6bFFJ1n-Lh6xFidtOQE5-p0OzIIrs79t0BakXwCotZeI22owBT2GaoQzL-fEgFF5Il1RKdkB2hz0SXWgKseob23Ay6njqo3Q9mvrx-QnLeS6ijq91KeDOsULMuBlnz2aVDNzYkfncweTwISVNOUySKkKQuM9SomqJK30S5QLDmd1yHk8nCuqhhawmA")',
              }}
            ></div>
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">
                &ldquo;We were impressed by Tech Solutions&rsquo;s deep understanding of our industry and their ability to tailor SAP solutions to our specific needs. Their support has
                been invaluable.&rdquo;
              </p>
              <p className="text-[#617589] text-sm font-normal leading-normal">- Ethan Walker, CFO, National Retail Group</p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-72 max-w-80">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA1yJFv4g-M3StQQgKCRW6-ugIGwjYskZwZBFto6mVumQkPOjy0drN-YoZBdzIcH-yFLnLYpwEYHsVnK711_dB_yvNwspARbr2SCA_IjV4iqsVYgNvO7kmz-05AdwNKuMF1qxGPHFMwLlGaT-ZHB8JC7GeZ2JEp8pNB3cyGDg9sRQg8Dz8lFg9-_k3Be3X8JG7lOnQDUGrRA3h8cf0XrZehuNthfE6I9EmIchee_Qo2T9444tsrE1HwZWXf0vpg3q0vJwh6u3vAZ4")',
              }}
            ></div>
            <div>
              <p className="text-[#111418] text-base font-medium leading-normal">
                &ldquo;Tech Solutions is a trusted partner for our SAP needs. Their commitment to excellence and customer satisfaction is truly commendable.&rdquo;
              </p>
              <p className="text-[#617589] text-sm font-normal leading-normal">- Olivia Zhang, COO, Regional Healthcare Systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-4 xs:gap-6 px-3 xs:px-4 py-8 xs:py-10 sm:py-20">
          <div className="flex flex-col gap-2 text-center w-full">
            <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full mx-auto">
              Ready to Transform Your Business?
            </h1>
            <p className="text-[#111418] text-sm xs:text-base font-normal leading-normal w-full mx-auto">
              Get in touch with our team of SAP experts to discuss your specific requirements and explore how we can help you achieve your business objectives.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex justify-center">
              <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#009DE0] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
