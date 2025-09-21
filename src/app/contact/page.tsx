import { Layout } from '@/components';

export default function Contact() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between gap-3 p-3 xs:p-4">
        <div className="flex min-w-0 flex-col gap-3 w-full">
          <p className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">Contact Us</p>
          <p className="text-[#617589] text-sm font-normal leading-normal">
            Get in touch with our team of SAP experts. We're here to help you transform your business.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 lg:gap-8 p-3 xs:p-4">
        {/* Contact Form */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em]">Send us a message</h2>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[#111418] text-sm font-medium leading-normal">First Name</label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#111418] text-sm font-medium leading-normal">Last Name</label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] text-sm font-medium leading-normal">Email</label>
              <input
                type="email"
                className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                placeholder="john.doe@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] text-sm font-medium leading-normal">Company</label>
              <input
                type="text"
                className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                placeholder="Your Company"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] text-sm font-medium leading-normal">Phone</label>
              <input
                type="tel"
                className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] text-sm font-medium leading-normal">Service Interest</label>
              <select className="flex h-10 w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent">
                <option value="">Select a service</option>
                <option value="implementation">SAP Implementation</option>
                <option value="consulting">SAP Consulting</option>
                <option value="support">SAP Support</option>
                <option value="migration">Cloud Migration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] text-sm font-medium leading-normal">Message</label>
              <textarea
                rows={4}
                className="flex w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm placeholder:text-[#617589] focus:outline-none focus:ring-2 focus:ring-[#009DE0] focus:border-transparent"
                placeholder="Tell us about your project and requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#009DE0] text-white text-base font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em]">Get in touch</h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111418] text-base font-bold leading-tight">Office Address</h3>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  123 Business District<br />
                  Vancouver, BC V6C 2X8<br />
                  Canada
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111418] text-base font-bold leading-tight">Phone</h3>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  +1 (604) 123-4567<br />
                  Toll Free: +1 (800) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.19V181.81Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111418] text-base font-bold leading-tight">Email</h3>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  info@innovatesolutions.ca<br />
                  support@innovatesolutions.ca
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 border border-[#dbe0e6] rounded-lg">
              <div className="text-[#009DE0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111418] text-base font-bold leading-tight">Business Hours</h3>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 4:00 PM PST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full p-3 xs:p-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Find Our Office</h2>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-[#dbe0e6]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7756990419!2d-123.12073092336728!3d49.28273717138398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671815b3b8b55%3A0x4a6e1e4b8a8a8a8a!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1682012345678!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tech Solutions Office Location in Vancouver, BC"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="text-center">
            <p className="text-[#617589] text-sm font-normal leading-normal">
              Our office is conveniently located in Vancouver's business district, easily accessible by public transportation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full">
        <div className="flex flex-col justify-end gap-4 xs:gap-6 sm:gap-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 xs:py-10 sm:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#111418] tracking-light text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight w-full">
              Let's Start Your SAP Journey
            </h1>
            <p className="text-[#111418] text-sm xs:text-base font-normal leading-normal w-full">
              Schedule a consultation with our experts to discuss your SAP requirements and how we can help.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-5 bg-[#009DE0] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}