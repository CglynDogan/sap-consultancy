'use client';

import { Layout } from '@/components';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Manufacturing with SAP S/4HANA: Enhancing Efficiency and Innovation",
      description: "Explore how SAP S/4HANA is revolutionizing manufacturing processes, enhancing efficiency, and driving innovation in the industry. Learn about key features and benefits.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1lhEdh2CFdH0N6f_Tex5clpEZ6J_6kY3ow85tKjfhnVXwgiJlw0x_lqq1iHnyTfKX9KnfdvlbkX51LsMoJnBq2BnWZ3IKutP4rkjG9CcPstc_qhI1wlQm-SyHnhVb5YPwUuBYLwXnG5BlIE95_kUCMVeCZ88OmcW8ruUYtmKLvD2f1g_k2xOAgSklS2GofcQ8cZ1lJwg9HQesUEHgjPq7r3m-6vzs0YfT_sXO-QEMiQSUansaJFgaSyi0ySgWVbX45EFkc6j5gro",
      url: "/blog/maximizing-efficiency-with-sap-s4hana",
      category: "SAP S/4HANA"
    },
    {
      id: 2,
      title: "Optimizing Supply Chain Management in the Digital Age with SAP Solutions",
      description: "Discover strategies for optimizing your supply chain using SAP solutions, ensuring resilience, and meeting customer demands effectively. Understand the role of technology.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYcev7qWQRNN4wFIRiC4JDhZafWJg6zk81_4iLCzHfP2jIyiM99gK_2ql6oDLtyejuxFYXg9p2Qf5ybTVCMoPNH9vhA3RDe1LcomZJO0mXATXbALpYNGrT9J7N3-dvQGUrrBsYXWMk2PoPpA41Ag9zEG0SJLOjio-VQW7y4oUq0KweTBlfGl8yRUribGQhySH_T4g7Lcngc8fx1fxb25AsjtFij6YJgRYvg45u9tJhrlEBwDIlVjYRGqTqGhbYKglzSVVUSXZ1KvE",
      url: "/blog/optimizing-your-sap-supply-chain",
      category: "Industry 4.0"
    },
    {
      id: 3,
      title: "Success Story: Transforming Retail Operations and Customer Experience with SAP",
      description: "Learn how a leading retail company transformed its operations and improved customer experience with SAP solutions. Case study and results.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqGE0X2A0999u5epjvt3w3zsBwEuGfHD22kzAXr6bGBk5aprnBG1v0RiFuQa-B7D3IIE9ZQQvO8zfiE-urBnTK5EjjfSb_Gm2LdID1mRKjVbjf_SuF7Sj7c5n1flJE6GQNjQwgjJc-6Yj0J_tEAxIVp43aIFpJLkSaWn0KrAp8YMCGLmb66tL3ax7hCXEAH9bNT6AHbWVTpJHqDcLalFxeLHwV0K3ye_fXR_DUQrppZaNIPi-V6y06vFJRYfHlM9i-tib5sscGL38",
      url: "/blog/transforming-retail-operations-with-sap",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Industry News: Latest Trends in Enterprise Resource Planning (ERP) and Cloud Computing",
      description: "Stay updated on the latest trends and developments in the ERP landscape, including advancements in cloud computing and AI. Insights and analysis.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWSWtB0s1p4SlFEzXgXqw1rwemQkty1SDc3T94vANv7cz3C0zxIz3q8kBR9wLaNQE4iD_9UTMaH4O5Y-YSh3bW1uQl7i4QD2sLF20QfWTSp4ZwQYe_sSzyGHXmBTCZCLD-8EJ-vEbjIGOnS9JlnXD7149bO5QTlEzygDyg6cP4XkFgMS5EF3BCHAuDJjKae63KN5IvyoTQZ0FNQ9vt5zfppCEBca5n3HEM7G6aTDwTq_xZ8Ya_Bnvkjntgo2eI8UmCmQ7Ic35NgFo",
      url: "/blog/the-future-of-sap-in-the-cloud",
      category: "Industry News"
    }
  ];

  const categories = [
    "All",
    "SAP S/4HANA",
    "Industry 4.0",
    "Success Stories",
    "Industry News"
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      <div className="gap-1 px-3 xs:px-4 lg:px-6 flex flex-1 justify-center py-3 xs:py-5">
        <div className="layout-content-container flex flex-col lg:flex-row max-w-6xl flex-1 gap-4 xs:gap-6">
          <div className="flex flex-col flex-1">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between gap-3 p-3 xs:p-4">
              <p className="text-[#111418] tracking-light text-xl xs:text-2xl lg:text-[32px] font-bold leading-tight">Insights</p>
            </div>

            {/* Category Filter Status */}
            <div className="px-3 xs:px-4 pb-2">
              <div className="flex items-center gap-2 text-xs xs:text-sm">
              <span className="text-[#617589]">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                {selectedCategory !== 'All' && (
                  <>
                    {' '}in{' '}
                    <span className="font-medium text-[#009DE0]">{selectedCategory}</span>
                  </>
                )}
              </span>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-[#009DE0] hover:underline text-sm font-medium"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

            {/* Blog Posts */}
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-3 xs:p-4">
                <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 xs:gap-4 rounded-lg">
                  <div className="flex flex-col gap-3 xs:gap-4 md:flex-[2_2_0px]">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111418] text-sm xs:text-base font-bold leading-tight">{post.title}</p>
                      <p className="text-[#637088] text-xs xs:text-sm font-normal leading-normal">
                        {post.description}
                      </p>
                    </div>
                    <Link href={post.url} className="flex min-w-[80px] max-w-[150px] xs:max-w-[200px] md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-7 xs:h-8 px-3 xs:px-4 flex-row-reverse bg-[#f0f2f4] text-[#111418] text-xs xs:text-sm font-medium leading-normal w-fit">
                      <span className="truncate">Read More</span>
                    </Link>
                  </div>
                  <div
                    className="w-full h-40 xs:h-48 md:h-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg md:flex-1"
                    style={{ backgroundImage: `url("${post.image}")` }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center p-4">
            <Link href="#" className="flex size-10 items-center justify-center">
              <div className="text-[#111418]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </div>
            </Link>
            <Link className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]" href="#">1</Link>
            <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">2</Link>
            <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">3</Link>
            <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full">...</span>
            <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">10</Link>
            <Link href="#" className="flex size-10 items-center justify-center">
              <div className="text-[#111418]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="layout-content-container flex flex-col w-full lg:w-[360px] lg:sticky lg:top-4 lg:self-start">
            <h2 className="text-[#111418] text-lg xs:text-xl sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-3 xs:px-4 pb-2 xs:pb-3 pt-4 xs:pt-5">Categories</h2>
            <div className="lg:hidden mb-3 xs:mb-4 px-3 xs:px-4">
              <div className="flex flex-wrap gap-1 xs:gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 xs:px-3 py-1 xs:py-2 rounded-lg text-xs xs:text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#009DE0] text-white'
                        : 'bg-[#f0f2f4] text-[#111418] hover:bg-[#e6e9ec]'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className={`ml-1 text-xs ${
                        selectedCategory === category ? 'text-white/80' : 'text-[#617589]'
                      }`}>
                        ({blogPosts.filter(post => post.category === category).length})
                      </span>
                    )}
                    {category === 'All' && (
                      <span className={`ml-1 text-xs ${
                        selectedCategory === category ? 'text-white/80' : 'text-[#617589]'
                      }`}>
                        ({blogPosts.length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-4 px-4 min-h-14 justify-between cursor-pointer transition-colors ${
                selectedCategory === category
                  ? 'bg-[#009DE0] text-white'
                  : 'bg-white hover:bg-[#f8fafc] text-[#111418]'
              }`}
            >
              <p className={`text-base font-normal leading-normal flex-1 truncate ${
                selectedCategory === category ? 'text-white font-medium' : 'text-[#111418]'
              }`}>
                {category}
                {category !== 'All' && (
                  <span className={`ml-2 text-xs ${
                    selectedCategory === category ? 'text-white/80' : 'text-[#617589]'
                  }`}>
                    ({blogPosts.filter(post => post.category === category).length})
                  </span>
                )}
                {category === 'All' && (
                  <span className={`ml-2 text-xs ${
                    selectedCategory === category ? 'text-white/80' : 'text-[#617589]'
                  }`}>
                    ({blogPosts.length})
                  </span>
                )}
              </p>
              <div className="shrink-0">
                <div className={`flex size-7 items-center justify-center ${
                  selectedCategory === category ? 'text-white' : 'text-[#111418]'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                </div>
              </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}