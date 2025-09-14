import Layout from '@/components/Layout';
import Link from 'next/link';

export default function OptimizingYourSAPSupplyChain() {
  return (
    <Layout companyName="Tech Solutions" variant="tech-solutions" buttonText="Contact Us">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div className="flex min-h-[300px] flex-col gap-6 bg-gradient-to-r from-[#F0AB00] to-[#009DE0] @[480px]:rounded-lg items-start justify-center px-4 py-8 @[480px]:px-10">
            <div className="flex flex-col gap-4 text-left max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <Link href="/blog" className="text-white/80 hover:text-white text-sm">Insights</Link>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm">Blog Post</span>
              </div>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Optimizing Your SAP Supply Chain
              </h1>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span>Published on March 5, 2024</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-[#111418] text-lg font-normal leading-relaxed mb-6">
              In today's interconnected global economy, supply chain optimization has become a critical differentiator
              for successful businesses. SAP's comprehensive suite of supply chain solutions provides organizations
              with the tools and insights needed to transform their supply chains from cost centers into competitive advantages.
            </p>
            <p className="text-[#111418] text-base font-normal leading-normal">
              This guide explores proven strategies for optimizing your SAP supply chain, improving inventory management,
              reducing operational costs, and enhancing customer satisfaction through intelligent supply chain management.
            </p>
          </div>

          {/* Current Supply Chain Challenges */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">Current Supply Chain Challenges</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-6">
              Modern supply chains face unprecedented complexity and volatility. Understanding these challenges is the
              first step toward building a more resilient and efficient supply chain operation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3 text-red-600">⚠️ Common Pain Points</h3>
                <ul className="list-disc list-inside space-y-2 text-[#617589] text-sm">
                  <li>Poor demand forecasting accuracy</li>
                  <li>Excess inventory carrying costs</li>
                  <li>Supply chain visibility gaps</li>
                  <li>Manual processes and data silos</li>
                  <li>Slow response to market changes</li>
                  <li>Supplier relationship management challenges</li>
                </ul>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-lg font-bold mb-3 text-green-600">✅ Optimization Opportunities</h3>
                <ul className="list-disc list-inside space-y-2 text-[#617589] text-sm">
                  <li>AI-powered demand planning</li>
                  <li>Real-time inventory optimization</li>
                  <li>End-to-end supply chain visibility</li>
                  <li>Automated procurement processes</li>
                  <li>Dynamic supplier collaboration</li>
                  <li>Predictive analytics and insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SAP Supply Chain Solutions */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-6">SAP Supply Chain Solutions</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-6">
              SAP offers a comprehensive portfolio of supply chain solutions designed to address every aspect of
              supply chain management, from planning and procurement to manufacturing and delivery.
            </p>

            <div className="space-y-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-xl font-bold mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#009DE0] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  SAP Integrated Business Planning (IBP)
                </h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-3">
                  Cloud-based solution for demand planning, supply planning, and inventory optimization with advanced
                  analytics and machine learning capabilities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  <div className="text-center p-3 bg-[#f0f8ff] rounded-lg">
                    <div className="text-[#009DE0] text-sm font-bold">Demand</div>
                    <div className="text-[#617589] text-xs">Planning</div>
                  </div>
                  <div className="text-center p-3 bg-[#f0f8ff] rounded-lg">
                    <div className="text-[#009DE0] text-sm font-bold">Supply</div>
                    <div className="text-[#617589] text-xs">Planning</div>
                  </div>
                  <div className="text-center p-3 bg-[#f0f8ff] rounded-lg">
                    <div className="text-[#009DE0] text-sm font-bold">Inventory</div>
                    <div className="text-[#617589] text-xs">Optimization</div>
                  </div>
                  <div className="text-center p-3 bg-[#f0f8ff] rounded-lg">
                    <div className="text-[#009DE0] text-sm font-bold">S&OP</div>
                    <div className="text-[#617589] text-xs">Planning</div>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-xl font-bold mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0AB00] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  SAP Ariba
                </h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-3">
                  Comprehensive procurement solution that connects you with suppliers worldwide and streamlines
                  the entire procurement process.
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                  <li>Strategic sourcing and supplier management</li>
                  <li>Contract lifecycle management</li>
                  <li>Procurement automation and workflows</li>
                  <li>Supplier risk management</li>
                </ul>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg">
                <h3 className="text-[#111418] text-xl font-bold mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#007CC0] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  SAP Extended Warehouse Management (EWM)
                </h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-3">
                  Advanced warehouse management solution that optimizes warehouse operations, improves inventory
                  accuracy, and enhances fulfillment speed.
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm ml-4">
                  <li>Automated warehouse processes</li>
                  <li>Real-time inventory tracking</li>
                  <li>Optimized picking and putaway strategies</li>
                  <li>Integration with automation systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Optimization Strategies */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-6">Key Optimization Strategies</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[#111418] text-xl font-bold mb-4">1. Implement Advanced Demand Planning</h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-4">
                  Accurate demand forecasting is the foundation of supply chain optimization. SAP IBP leverages machine
                  learning and advanced analytics to improve forecast accuracy and reduce forecast error.
                </p>

                <div className="bg-[#f8fafc] p-6 rounded-lg border-l-4 border-[#009DE0] mb-4">
                  <h4 className="text-[#111418] text-lg font-bold mb-2">Best Practices for Demand Planning</h4>
                  <ul className="list-disc list-inside space-y-1 text-[#617589] text-sm">
                    <li>Integrate multiple data sources (sales history, market trends, external factors)</li>
                    <li>Use statistical and machine learning models for improved accuracy</li>
                    <li>Implement collaborative planning with sales and marketing teams</li>
                    <li>Regularly review and adjust forecasting models</li>
                    <li>Establish clear forecast accuracy KPIs and targets</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
                    <div className="text-[#009DE0] text-2xl font-bold mb-2">15-25%</div>
                    <div className="text-[#111418] text-sm font-medium">Improvement in Forecast Accuracy</div>
                  </div>
                  <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
                    <div className="text-[#009DE0] text-2xl font-bold mb-2">20-30%</div>
                    <div className="text-[#111418] text-sm font-medium">Reduction in Safety Stock</div>
                  </div>
                  <div className="text-center p-4 border border-[#dbe0e6] rounded-lg">
                    <div className="text-[#009DE0] text-2xl font-bold mb-2">10-15%</div>
                    <div className="text-[#111418] text-sm font-medium">Decrease in Stockouts</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#111418] text-xl font-bold mb-4">2. Optimize Inventory Management</h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-4">
                  Intelligent inventory optimization balances service levels with inventory costs, ensuring optimal
                  stock levels across the entire supply network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border border-[#dbe0e6] rounded-lg">
                    <h4 className="text-[#111418] text-base font-bold mb-2">Multi-Echelon Optimization</h4>
                    <p className="text-[#617589] text-sm mb-2">
                      Optimize inventory across multiple locations and levels of the supply chain.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#617589] text-xs">
                      <li>Centralized vs. distributed inventory strategies</li>
                      <li>Risk pooling and safety stock optimization</li>
                      <li>Dynamic inventory policies</li>
                    </ul>
                  </div>

                  <div className="p-4 border border-[#dbe0e6] rounded-lg">
                    <h4 className="text-[#111418] text-base font-bold mb-2">ABC/XYZ Analysis</h4>
                    <p className="text-[#617589] text-sm mb-2">
                      Classify products based on value and variability for targeted management strategies.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#617589] text-xs">
                      <li>Value-based classification (ABC)</li>
                      <li>Variability-based classification (XYZ)</li>
                      <li>Tailored inventory policies per category</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#111418] text-xl font-bold mb-4">3. Enhance Supplier Collaboration</h3>
                <p className="text-[#111418] text-base font-normal leading-normal mb-4">
                  Strong supplier relationships and collaboration are essential for supply chain resilience and performance.
                  SAP Ariba Network facilitates seamless collaboration with suppliers worldwide.
                </p>

                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-[#F0AB00] bg-[#fffbf0]">
                    <h4 className="text-[#111418] text-base font-bold mb-2">🤝 Collaborative Planning</h4>
                    <p className="text-[#617589] text-sm">
                      Share forecasts and collaborate on capacity planning to improve supply chain visibility and responsiveness.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-[#F0AB00] bg-[#fffbf0]">
                    <h4 className="text-[#111418] text-base font-bold mb-2">📊 Performance Management</h4>
                    <p className="text-[#617589] text-sm">
                      Implement supplier scorecards and KPIs to monitor and improve supplier performance continuously.
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-[#F0AB00] bg-[#fffbf0]">
                    <h4 className="text-[#111418] text-base font-bold mb-2">⚡ Risk Management</h4>
                    <p className="text-[#617589] text-sm">
                      Proactively identify and mitigate supplier risks through comprehensive risk assessment and monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Integration */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">Leveraging Emerging Technologies</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-6">
              Modern supply chain optimization increasingly relies on emerging technologies like IoT, AI, and blockchain
              to drive visibility, automation, and intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-[#dbe0e6] rounded-lg text-center">
                <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">IoT & Sensors</h3>
                <p className="text-[#617589] text-sm">
                  Real-time tracking and monitoring of assets, inventory, and shipments.
                </p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg text-center">
                <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">AI & Machine Learning</h3>
                <p className="text-[#617589] text-sm">
                  Predictive analytics, demand sensing, and intelligent automation.
                </p>
              </div>

              <div className="p-6 border border-[#dbe0e6] rounded-lg text-center">
                <div className="w-12 h-12 bg-[#009DE0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-[#111418] text-lg font-bold mb-2">Blockchain</h3>
                <p className="text-[#617589] text-sm">
                  Transparent, secure, and traceable supply chain transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Measuring Success */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">Measuring Supply Chain Success</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-6">
              Effective supply chain optimization requires continuous monitoring and measurement of key performance
              indicators to ensure objectives are met and identify areas for further improvement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-[#111418] text-lg font-bold">Operational KPIs</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Inventory Turnover</div>
                    <div className="text-[#617589] text-xs">Cost of goods sold / Average inventory value</div>
                  </div>
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Order Fulfillment Rate</div>
                    <div className="text-[#617589] text-xs">Orders delivered on time and in full</div>
                  </div>
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Cash-to-Cash Cycle</div>
                    <div className="text-[#617589] text-xs">Days from cash outflow to cash inflow</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#111418] text-lg font-bold">Strategic KPIs</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Supply Chain ROI</div>
                    <div className="text-[#617589] text-xs">Return on supply chain investments</div>
                  </div>
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Customer Satisfaction</div>
                    <div className="text-[#617589] text-xs">Net Promoter Score and service quality metrics</div>
                  </div>
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#dbe0e6]">
                    <div className="text-[#111418] text-sm font-bold">Sustainability Metrics</div>
                    <div className="text-[#617589] text-xs">Carbon footprint and environmental impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-8">
            <h2 className="text-[#111418] text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">Conclusion: Building a Future-Ready Supply Chain</h2>
            <p className="text-[#111418] text-base font-normal leading-normal mb-4">
              Supply chain optimization is an ongoing journey that requires the right combination of technology, processes,
              and people. SAP's comprehensive supply chain solutions provide the foundation for building resilient,
              efficient, and customer-centric supply chains.
            </p>
            <p className="text-[#111418] text-base font-normal leading-normal">
              By implementing the strategies outlined in this guide and leveraging SAP's advanced capabilities,
              organizations can transform their supply chains into strategic assets that drive competitive advantage
              and sustainable growth in an increasingly complex business environment.
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-[#dbe0e6]">
          <h3 className="text-[#111418] text-xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/maximizing-efficiency-with-sap-s4hana" className="block p-4 border border-[#dbe0e6] rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-[#111418] text-base font-bold mb-2">Maximizing Efficiency with SAP S/4HANA</h4>
              <p className="text-[#617589] text-sm">Explore how SAP S/4HANA can revolutionize your business processes...</p>
            </Link>
            <Link href="/blog/the-future-of-sap-in-the-cloud" className="block p-4 border border-[#dbe0e6] rounded-lg hover:shadow-md transition-shadow">
              <h4 className="text-[#111418] text-base font-bold mb-2">The Future of SAP in the Cloud</h4>
              <p className="text-[#617589] text-sm">Discover the advantages of migrating your SAP landscape to the cloud...</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="@container mt-12">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Optimize Your Supply Chain Today
              </h1>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px">
                Let our supply chain experts help you implement SAP solutions that drive efficiency and reduce costs.
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <Link href="/contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#009DE0] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                <span className="truncate">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}