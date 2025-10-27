import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const EngineeringRD: React.FC = () => {
  // Product Support Services
  const productServices = [
    {
      title: "New Product Development",
      description:
        "We turn ideas into market-ready products through a streamlined process of design, prototyping, testing, and production. Our NPD services help businesses innovate faster, reduce risks, and deliver products that meet real customer needs.",
      id: "new-product-dev",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Value Analysis & Value Engineering (VAVE)",
      description:
        "VAVE focuses on improving product value by optimizing design, materials, and manufacturing processes. We help reduce costs, enhance functionality, and maintain quality ensuring smarter, more efficient products without compromising performance.",
      id: "vave",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Mechanism Design",
      description:
        "We specialize in designing innovative mechanical systems and motion mechanisms tailored to meet functional and performance requirements. From concept to detailed design, we ensure reliable, efficient, and manufacturable solutions for complex mechanical movements.",
      id: "mechanism-design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Engineering Analysis",
      description:
        "We provide detailed engineering analysis to validate and optimize product designs. Using advanced tools for structural, thermal, and motion analysis, we ensure performance, reliability, and safety before production reducing risks and improving product quality.",
      id: "analysis",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Prototyping",
      description:
        "We turn concepts into reality with high-quality prototypes for design validation and functional testing. Our prototyping services help refine products, accelerate development, and ensure seamless transition to mass production.",
      id: "proto-type",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  // Auxiliary Support Services
  const supportServices = [
    {
      title: "3D modeling / Drafting",
      description: "Assist in all Cad softwares",
      id: "3d-modeling",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "DATA Migration",
      description: "Have tools to support in large scale data migration",
      id: "data-migration",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "Tech Publication",
      description: "Manual / Animation / CBT",
      id: "tech-publication",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "ECN / ECR Management",
      description: "Update 3D model / Drawing as per Change request",
      id: "ecn-ecr",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Sourcing",
      description:
        "Support in sourcing Technically and commercially viable components",
      id: "sourcing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  // Prototype Categories
  const prototypeCategories = [
    {
      id: "plastic",
      title: "Prototype Plastic parts",
      items: [
        "CNC Machined plastic parts",
        "Injection molds",
        ["Soft tooling", "Hand tools"],
        "Rapid Prototyping",
        ["SLA / SLS", "Vacuum casting"],
        "FRP",
        "Thermoforming",
      ],
      color: "from-gray-800 to-gray-700",
    },
    {
      id: "sheetmetal",
      title: "Prototype Sheetmetal",
      items: [
        "Laser cutting",
        "Forming & Bending",
        "Welding",
        "Cut & Weld",
        "Stamped parts",
      ],
      color: "from-gray-700 to-gray-600",
    },
    {
      id: "assembly",
      title: "Assembly & Finishing Operations",
      items: [
        "Staking",
        "Riveting",
        "Welding",
        "Surface & Heat treatment",
        "Assembly & Checking fixtures",
        "Inspection",
      ],
      color: "from-gray-600 to-gray-500",
    },
    {
      id: "machined",
      title: "Machined Components",
      items: [
        "Milling / Lathe / Drilling",
        "Wire cut",
        "Laser cutting",
        "Sparking",
        ["Springs, Washer, Pins, Bushes etc."],
      ],
      color: "from-gray-500 to-gray-400",
    },
  ];

  // Industries
  const industries = [
    { name: "Automotive", icon: "🚗" },
    { name: "Medical", icon: "💊" },
    { name: "Aerospace", icon: "✈️" },
    { name: "Industrial", icon: "🏭" },
    { name: "Electronics", icon: "💻" },
  ];

  return (
    <div className={`min-h-screen bg-white text-black ${inter.className}`}>
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-12 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight mb-4">
            Engineering <span className="text-orange-400">&</span> R&D
          </h1>
          <p className="text-center text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive engineering solutions from concept to production
          </p>
        </div>
      </header>

      {/* Product Support Section */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-gray-300 pb-4">
          Product Development Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 border-b border-gray-300">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-black">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 text-align justify-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-black">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-full border border-gray-300 flex items-center gap-2 hover:bg-gray-50 hover:border-blue-400 transition-colors shadow-sm"
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-semibold text-black">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Analysis Section */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black text-center border-b border-gray-300 pb-4">
            Advanced Engineering Analysis
          </h2>

          {/* Engineering Analysis Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Industrial & Mechanical Engineering */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-80 group cursor-pointer">
                <img
                  src="/industrial-mechanical-engineering.png"
                  alt="Industrial & Mechanical Engineering"
                  className="w-full h-full object-cover transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform transition-all duration-300 opacity-100 group-hover:opacity-60">
                    Industrial & Mechanical Engineering
                  </h3>
                  <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                    Comprehensive mechanical design and industrial process
                    optimization
                  </p>
                </div>
              </div>
            </div>

            {/* NPI Support */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-80 group cursor-pointer">
                <img
                  src="/npi-support.png"
                  alt="New Product Introduction Support"
                  className="w-full h-full object-cover transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform transition-all duration-300 opacity-100 group-hover:opacity-60">
                    New Product Introduction (NPI) Support
                  </h3>
                  <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                    End-to-end product development and market introduction
                    strategies
                  </p>
                </div>
              </div>
            </div>

            {/* Hyperelastic Analysis */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="relative h-80 group cursor-pointer">
                <img
                  src="/hyperelastic-drop-analysis.png"
                  alt="Hyperelastic and Drop Analysis"
                  className="w-full h-full object-cover transition-opacity duration-300 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform transition-all duration-300 opacity-100 group-hover:opacity-60">
                    FEA and CFD Analysis
                  </h3>
                  <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                    Advanced finite element and computational fluid dynamics
                    modeling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Development Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="md:text-3xl text-2xl font-bold mb-8 text-black border-b border-gray-300 pb-4">
          Prototype Development
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-700">
            We offer quick turn, customized prototyping of plastic & metal parts
            with quality & cost effective solutions
          </p>
        </div>

        {/* Prototype Development Process Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-80 group cursor-pointer">
              <img
                src="/cnc-machining.jpeg"
                alt="CNC Machining"
                className="w-full h-full object-cover transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold mb-1 transform transition-all duration-300 opacity-100 group-hover:opacity-80">
                  CNC Machining
                </h3>
                <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                  Precision machined components
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-80 group cursor-pointer">
              <img
                src="/injection-molding.jpg"
                alt="Injection Molding"
                className="w-full h-full object-cover transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold mb-1 transform transition-all duration-300 opacity-100 group-hover:opacity-80">
                  Injection Molding
                </h3>
                <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                  High-volume plastic production
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-80 group cursor-pointer">
              <img
                src="/3d-printing.jpg"
                alt="3D Printing"
                className="w-full h-full object-cover transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold mb-1 transform transition-all duration-300 opacity-100 group-hover:opacity-80">
                  3D Printing
                </h3>
                <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                  Rapid prototyping solutions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-80 group cursor-pointer">
              <img
                src="/sheet-metal-fabrication.jpeg"
                alt="Sheet Metal Fabrication"
                className="w-full h-full object-cover transition-opacity duration-300 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-600/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold mb-1 transform transition-all duration-300 opacity-100 group-hover:opacity-80">
                  Sheet Metal
                </h3>
                <p className="text-white/90 text-sm opacity-100 group-hover:opacity-80 transition-opacity duration-300">
                  Fabrication & forming
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
          {/* Circular Diagram */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  d="M100,100 L190,100 A90,90 0 0,0 100,10 Z"
                  className="fill-blue-100 stroke-blue-600 stroke-2"
                />
                <path
                  d="M100,100 L100,10 A90,90 0 0,0 10,100 Z"
                  className="fill-orange-100 stroke-orange-600 stroke-2"
                />
                <path
                  d="M100,100 L10,100 A90,90 0 0,0 100,190 Z"
                  className="fill-blue-50 stroke-blue-400 stroke-2"
                />
                <path
                  d="M100,100 L100,190 A90,90 0 0,0 190,100 Z"
                  className="fill-orange-50 stroke-orange-400 stroke-2"
                />

                <circle cx="100" cy="100" r="15" className="fill-gray-800" />

                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  className="stroke-gray-800 stroke-2"
                />
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  className="stroke-gray-800 stroke-2"
                />

                <text
                  x="120"
                  y="70"
                  className="text-[10px] fill-blue-800 font-semibold"
                >
                  Prototype
                </text>
                <text
                  x="120"
                  y="82"
                  className="text-[10px] fill-blue-800 font-semibold"
                >
                  Plastic Parts
                </text>

                <text
                  x="30"
                  y="70"
                  className="text-[10px] fill-orange-800 font-semibold"
                >
                  Prototype
                </text>
                <text
                  x="30"
                  y="82"
                  className="text-[10px] fill-orange-800 font-semibold"
                >
                  Sheetmetal
                </text>

                <text
                  x="28"
                  y="130"
                  className="text-[10px] fill-blue-700 font-semibold"
                >
                  Machine
                </text>
                <text
                  x="28"
                  y="142"
                  className="text-[10px] fill-blue-700 font-semibold"
                >
                  Components
                </text>

                <text
                  x="105"
                  y="130"
                  className="text-[10px] fill-orange-700 font-semibold"
                >
                  Assembly &
                </text>
                <text
                  x="105"
                  y="142"
                  className="text-[10px] fill-orange-700 font-semibold"
                >
                  Finishing
                </text>
                <text
                  x="105"
                  y="154"
                  className="text-[10px] fill-orange-700 font-semibold"
                >
                  Operations
                </text>
              </svg>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prototypeCategories.map((category, index) => (
              <div
                key={category.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm"
              >
                <div
                  className={`${
                    index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                  } p-4`}
                >
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex flex-col text-black">
                        <div className="flex items-start">
                          <span className="text-gray-600 mr-2 mt-1">▪</span>
                          {Array.isArray(item) ? (
                            <div className="flex flex-col">
                              <span>{item[0]}</span>
                              {item.slice(1).map((subItem, subIndex) => (
                                <div
                                  key={subIndex}
                                  className="ml-6 flex items-start"
                                >
                                  <span className="text-gray-600 mr-2 mt-[2px]">
                                    •
                                  </span>
                                  <span className="text-gray-600">
                                    {subItem}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span>{item}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auxiliary Support Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black border-b border-gray-300 pb-4">
            Auxiliary Support Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm hover:shadow-blue-200 transition-all hover:-translate-y-1"
              >
                <div
                  className={`${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : "bg-gradient-to-r from-orange-500 to-orange-600"
                  } p-4`}
                >
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold ml-3 text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-black border-b border-gray-300 pb-4">
          Our Experience & Capabilities
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column - Animated Elements */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute top-0 left-12 animate-pulse">
                <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-2 border-blue-300">
                  <span className="text-sm font-medium">Flexible</span>
                </div>
              </div>
              <div
                className="absolute top-24 left-0 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="bg-orange-500 text-white rounded-full w-28 h-28 flex items-center justify-center shadow-lg border-2 border-orange-300">
                  <span className="text-sm font-medium">Adaptable</span>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-12 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                <div className="bg-blue-600 text-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg border-2 border-blue-400">
                  <span className="text-sm font-medium">Innovative</span>
                </div>
              </div>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 250 250"
              >
                <path
                  d="M120 50 L100 120 L120 200"
                  stroke="rgba(0, 0, 0, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M120 50 L160 120"
                  stroke="rgba(0, 0, 0, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M120 200 L160 120"
                  stroke="rgba(0, 0, 0, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full md:w-3/5">
            <p className="text-xl text-gray-700 mb-6">
              With over 20 years of experience in CAD and engineering solutions,
              we deliver comprehensive R&D services
            </p>

            <div className="space-y-4">
              <div className="flex items-start bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  Complete product development from concept to production
                </span>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg border-l-4 border-orange-500 shadow-sm">
                <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  Advanced simulation and analysis capabilities
                </span>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  Rapid prototyping and manufacturing support
                </span>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg border-l-4 border-orange-500 shadow-sm">
                <span className="text-orange-600 font-bold mr-3 mt-1">•</span>
                <span className="text-gray-700">
                  Cross-platform CAD migration and data management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black text-center">
            Why Choose Our Engineering & R&D Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Comprehensive Solutions
              </h3>
              <p className="text-gray-700">
                End-to-end engineering services from concept to market launch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-t-4 border-orange-500 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Advanced Technology
              </h3>
              <p className="text-gray-700">
                State-of-the-art CAD tools and simulation software for optimal
                results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-t-4 border-blue-500 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-black">
                Expert Team
              </h3>
              <p className="text-gray-700">
                Experienced engineers and designers committed to delivering
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-12 border border-gray-300 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our expert engineering team help you bring your innovative ideas
            to life with our comprehensive R&D services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringRD;
