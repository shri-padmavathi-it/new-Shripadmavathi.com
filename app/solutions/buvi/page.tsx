"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';

// Define TypeScript interfaces
interface BusinessCapability {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const BUVIPage: React.FC = () => {
  // Business Core Capabilities
  const businessCapabilities: BusinessCapability[] = [
    {
      title: "Procure",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      features: [
        "Self Service Requisitioning",
        "Advanced Sourcing",
        "Purchase Order Collaboration",
        "Supplier Lifecycle Management"
      ]
    },
    {
      title: "Sales",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      ),
      features: [
        "Opportunity Management",
        "Configure Price Quote",
        "Sales Order Fulfillment",
        "Invoice Management"
      ]
    },
    {
      title: "Plan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      features: [
        "Project Management",
        "Engineering Document Management",
        "Product Information Management",
        "Supply Chain Forecast"
      ]
    },
    {
      title: "Make",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      features: [
        "Engineering Change Management",
        "BOM Change Management",
        "Quality Inspection Management",
        "Incident Management"
      ]
    },
    {
      title: "Deliver",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      features: [
        "Warehouse Management",
        "Asset Management"
      ]
    }
  ];

  // BUVI Features
  const embeddedFeatures: string[] = [
    "Feedback Management",
    "Content Management",
    "Import / Export",
    "Custom Fields",
    "Teams",
    "Document Specifications",
    "Communications / Chat",
    "Activity Log",
    "Calendar Events",
    "Advanced Search Filters",
    "Integrations Framework",
    "Notes and Tags"
  ];

  // BUVI Key Capabilities
  const keyCapabilities: FeatureItem[] = [
    {
      title: "Integration",
      description: "Connect your existing ERP systems to fully automate business scenarios out-of-box, by leveraging existing tools and infrastructure.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold">1</div>
      )
    },
    {
      title: "Process Enrichment",
      description: "Suite of productivity tools embedded within processes to support, streamline and increase efficiency of your business operations.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">2</div>
      )
    },
    {
      title: "Collaboration",
      description: "Discover business partners and collaborate on business processes easily on a secure peer-to-peer network.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold">3</div>
      )
    },
    {
      title: "Business Insights",
      description: "Built-in analytics and intelligence for speed, efficient management and improvement of business processes.",
      icon: (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">4</div>
      )
    }
  ];

  // Intelligence Features
  const intelligenceFeatures: FeatureItem[] = [
    {
      title: "Situations Management",
      description: "Alerts and validations based on critical situations in process"
    },
    {
      title: "Embedded Analytics",
      description: "Contextual insights in transactions"
    },
    {
      title: "Risks & Issue",
      description: "RAID log generation for controlling"
    },
    {
      title: "Blockchain Grid",
      description: "Collaboration through blockchain"
    },
    {
      title: "Flexible Workflows",
      description: "Easy workflows setup across all documents"
    },
    {
      title: "Digital Twin",
      description: "Predictive insights in the process"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container mx-auto py-16 px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            BUVI: Next Generation Supply Chain Collaboration Platform
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white opacity-90">
            An interoperable, secure, decentralized platform for digital transformation
          </p>
        </div>
      </div>

      {/* BUVI Overview */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Connect & Integrate</h2>
            <p className="text-gray-600 text-center">
              BUVI is a supply chain platform with the ability to <span className="font-semibold text-black">connect businesses</span> and <span className="font-semibold text-black">integrate systems</span>. BUVI enables enterprises to <span className="font-semibold text-black">collaborate</span> with its business partners and offers various <span className="font-semibold text-black">productivity tools</span> tightly integrated with business operations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-200">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" strokeWidth="0">
                    <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"/>
                    <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C9.78392 9.78381 14.2161 9.78381 16.9497 7.05015Z" fill="currentColor"/>
                    <path d="M7.05025 16.9497C9.78392 14.2161 9.78392 9.78391 7.05025 7.05024C4.31658 9.78391 4.31658 14.2161 7.05025 16.9497Z" fill="currentColor"/>
                    <path d="M16.9497 16.9497C14.2161 14.2161 9.78392 14.2161 7.05025 16.9497C9.78392 19.6834 14.2161 19.6834 16.9497 16.9497Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" cy="50" r="45" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="0.5" 
                    strokeDasharray="2 2"
                  />
                  {/* Create network effect */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const angle = (i * Math.PI * 2) / 20;
                    const x1 = 50 + 45 * Math.cos(angle);
                    const y1 = 50 + 45 * Math.sin(angle);
                    
                    return (
                      <React.Fragment key={i}>
                        <circle cx={x1} cy={y1} r="1.5" fill="#3b82f6" />
                        {i % 3 === 0 && (
                          <line 
                            x1="50" y1="50" 
                            x2={x1} y2={y1} 
                            stroke="#3b82f6" 
                            strokeWidth="0.5" 
                            strokeDasharray="1 2" 
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mt-6 text-black">
              BUVI Provides Building Blocks for Collaborative Business Process Management
            </h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Technology & Architecture</h2>
            <p className="text-gray-600 text-center">
              BUVI is an <span className="font-semibold text-black">interoperable, secure, decentralized</span> platform, which offers to <span className="font-semibold text-black">model</span> and implement dynamic business processes on BPMN 2.0 standards. BUVI is <span className="font-semibold text-black">modular</span> and via <span className="font-semibold text-black">plugin</span> architecture provides extensions points to enterprise specific requirements.
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Platform Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyCapabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gray-200">
              <div className="flex items-center mb-4">
                {capability.icon}
                <h3 className="text-xl font-semibold ml-3 text-black">{capability.title}</h3>
              </div>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business Capabilities */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Capabilities for Digital Transformation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {businessCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className={`${index % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'} text-white p-4 flex items-center`}>
                  <span className="mr-3">{capability.icon}</span>
                  <h3 className="text-lg font-semibold">{capability.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {capability.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-gray-400 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Tools */}
          <div className="bg-white rounded-lg shadow-lg mb-12 border border-gray-200">
            <div className="bg-blue-500 text-white p-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18" />
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4" />
                <path d="M8 12h8" />
              </svg>
              <h3 className="text-xl font-semibold">BUVI Embedded Tools and Intelligence</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {embeddedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-gray-400 mr-1 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Intelligence Features */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="bg-orange-500 text-white p-4 text-center">
              <h3 className="text-xl font-semibold">Intelligence and Automation</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {intelligenceFeatures.map((feature, index) => (
                  <div key={index} className={`${index % 2 === 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'} text-black rounded-lg p-4 flex flex-col items-center text-center border`}>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Discover how our next-generation supply chain collaboration platform can revolutionize your business operations.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link 
              href="/about/aboutUs" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center"
            >
              Explore Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BUVIPage;