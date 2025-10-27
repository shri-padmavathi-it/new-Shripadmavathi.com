"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const ElectricWeedCutter: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Product images - replace with your actual image paths
  const productImages = [
    "/product/weed-cutter-1.jpg",
    "/product/weed-cutter-2.jpg",
    "/product/weed-cutter-3.jpg",
    "/product/weed-cutter-4.jpg",
    "/product/weed-cutter-5.jpg",
  ];

  // Key features
  const keyFeatures = [
    {
      title: "Eco-Friendly Operation",
      description:
        "Zero emissions, no fuel required - powered by lithium battery technology",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Brushless Motor",
      description: "Low maintenance, longer lifespan, and superior performance",
      icon: (
        <svg
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
      title: "Lightweight Design",
      description: "Ergonomic and comfortable for extended use",
      icon: (
        <svg
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
      title: "Quiet Operation",
      description: "Minimal noise pollution for residential and commercial use",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ),
    },
  ];

  // Applications
  const applications = [
    {
      title: "Agricultural Farms",
      description: "Precise weed control around crops without chemical residue",
      icon: "🌾",
    },
    {
      title: "Coffee Estates",
      description:
        "Maintain plantation cleanliness with eco-friendly operations",
      icon: "☕",
    },
    {
      title: "Tea Plantations",
      description: "Gentle weed management preserving soil health",
      icon: "🍃",
    },
    {
      title: "Public Spaces",
      description: "Quiet operation suitable for parks and urban areas",
      icon: "🏞️",
    },
  ];

  // Technical specifications
  const specifications = [
    { label: "Power Source", value: "Lithium Battery" },
    { label: "Motor Type", value: "Brushless DC Motor" },
    { label: "Cutting Width", value: "Variable (Contact for details)" },
    { label: "Weight", value: "Lightweight Design" },
    { label: "Noise Level", value: "Low Noise Operation" },
    { label: "Maintenance", value: "Minimal Required" },
  ];

  return (
    <div className={`min-h-screen bg-white text-black ${inter.className}`}>
      {/* Header - Full width with hero background */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
        <div className="relative z-10 px-6 md:px-8 lg:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Electric <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Weed-Cutter</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Revolutionary eco-friendly weed control solution for modern agriculture
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Product Section */}
      <section className="px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-start">
            {/* Image Gallery - Takes more space */}
            <div className="xl:col-span-3 space-y-6">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src={productImages[selectedImage]}
                  alt={`Electric Weed-Cutter ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='%236b7280' font-size='16'%3EProduct Image %23" +
                      (selectedImage + 1) +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? "ring-4 ring-orange-400 shadow-lg scale-105"
                        : "ring-2 ring-gray-200 hover:ring-gray-400 hover:scale-102"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='%236b7280' font-size='12'%3E" +
                          (index + 1) +
                          "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="xl:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">
                  Product Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our electric weed cutter is designed for reliable, eco-friendly
                  weed control in farms, coffee estates, tea plantations, and
                  public spaces. It runs on a powerful lithium battery, delivering
                  strong cutting performance without fuel, fumes, or noise.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <h4 className="text-2xl font-bold text-orange-800 mb-3">
                  🌱 Eco-Innovation
                </h4>
                <p className="text-orange-700 text-lg">
                  Zero emissions, no fuel costs, and whisper-quiet operation make
                  this the future of sustainable weed management.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Key Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Brushless motor requires less maintenance and lasts longer",
                    "Lightweight design for comfort during long hours",
                    "Perfect for clearing weeds around crops and buildings",
                    "Clean, efficient solution for comprehensive land care"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Improved grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Advanced Features & Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge engineering meets sustainable innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-2xl w-fit mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <div className="text-orange-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section - Better spacing */}
      <section className="px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Perfect for Multiple Applications
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions for every environment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300 shadow-lg">
                  <span className="text-5xl">{app.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications - Modern layout */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
              {/* Specifications Table */}
              <div>
                <h2 className="text-4xl font-bold mb-10 text-black">
                  Technical Specifications
                </h2>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-800 to-black p-6">
                    <h3 className="text-2xl font-bold text-white">
                      Product Details
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-lg">
                          {spec.label}
                        </span>
                        <span className="text-gray-700 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Highlights */}
              <div>
                <h2 className="text-4xl font-bold mb-10 text-black">
                  Performance Highlights
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Battery Life", desc: "Extended operation time with fast-charging lithium technology", color: "green" },
                    { title: "Cutting Efficiency", desc: "Powerful brushless motor delivers consistent cutting performance", color: "blue" },
                    { title: "Durability", desc: "Built for heavy-duty use with minimal maintenance requirements", color: "orange" },
                    { title: "Ergonomics", desc: "Lightweight design reduces operator fatigue during extended use", color: "purple" }
                  ].map((item, index) => (
                    <div key={index} className={`bg-white p-8 rounded-2xl border-l-4 border-${item.color}-500 shadow-lg hover:shadow-xl transition-shadow`}>
                      <h4 className={`text-2xl font-bold text-${item.color}-800 mb-3`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Full width impact */}
      <section className="px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Revolutionize Your Weed Control?
              </h2>
              <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the future of eco-friendly, efficient weed management
                with our electric weed cutter. Contact us for pricing,
                demonstrations, and technical specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/about/contactUs">
                  <button className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                    Request Quote
                  </button>
                </Link>
                <Link href="/about/contactUs">
                  <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 text-lg">
                    Schedule Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricWeedCutter;