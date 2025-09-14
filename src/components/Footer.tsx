'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#363E43] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-8">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#009DE0]">
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tech Solutions</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading SAP consultancy in Canada, dedicated to helping businesses optimize their operations and achieve strategic goals through innovative SAP solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#009DE0] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#009DE0] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#009DE0] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/sap-implementation" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">SAP Implementation</Link></li>
              <li><Link href="/services/sap-consulting" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">SAP Consulting</Link></li>
              <li><Link href="/services/sap-support" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">SAP Support</Link></li>
              <li><Link href="/services/cloud-migration" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">Cloud Migration</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">All Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">Insights</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#009DE0] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">123 Business Avenue</p>
                  <p className="text-gray-300 text-sm">Toronto, ON M5V 3A8</p>
                  <p className="text-gray-300 text-sm">Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#009DE0] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <Link href="tel:+1-416-555-0123" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">+1 (416) 555-0123</Link>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#009DE0] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <Link href="mailto:info@techsolutions.ca" className="text-gray-300 hover:text-[#009DE0] transition-colors text-sm">info@techsolutions.ca</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Site Map</Link>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Tech Solutions. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Professional SAP consulting services in Toronto, Vancouver, Montreal and across Canada. Specializing in SAP S/4HANA, SAP ECC, SAP SuccessFactors, SAP Ariba, and SAP Concur implementations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}