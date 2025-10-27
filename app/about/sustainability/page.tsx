"use client";

import React from "react";
import {
  ChevronRight,
  Leaf,
  Car,
  Plane,
  Cog,
  Factory,
  ArrowRight,
  Target,
} from "lucide-react";
import Link from "next/link";

const SustainabilityPage = () => {
  const industries = [
    {
      title: "Automotive",
      description:
        "Our deep domain expertise in automotive enables us to deliver innovative sustainable solutions across the product lifecycle – and engineer the vehicles of the future.",
      icon: <Car className="w-8 h-8" />,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      stats: "50% weight reduction possible with natural fiber materials",
      link: "Explore Automotive",
    },
    {
      title: "Industrial Heavy Machinery",
      description:
        "We implement sustainable strategies and solutions across operating models, processes and technologies to realize greener industrial heavy machinery products.",
      icon: <Factory className="w-8 h-8" />,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      stats: "Smart manufacturing systems reduce energy usage in real-time",
      link: "Explore Industrial Heavy Machinery",
    },
    {
      title: "Aerospace",
      description:
        "We create innovative, high-precision products and experiences that reduce carbon emissions for leading aerospace companies.",
      icon: <Plane className="w-8 h-8" />,
      color: "bg-orange-500",
      textColor: "text-orange-500",
      stats:
        "3D printing reduces material waste by creating components only where needed",
      link: "Explore Aerospace",
    },
  ];

  const sustainabilityPrinciples = [
    {
      title: "Green Engineering Principles",
      description:
        "Decrease pollution generation, minimize human exposure to hazards, and improve matter and energy use throughout product lifecycles while maintaining economic viability.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "Life-Cycle Thinking",
      description:
        "Use life-cycle thinking in all engineering activities to ensure materials and energy inputs are inherently safe and benign.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Natural Ecosystem Conservation",
      description:
        "Conserve and improve natural ecosystems while protecting human health and well-being through sustainable design decisions.",
      icon: <Cog className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              SUSTAINABILITY
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
              We are building a sustainable future
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We engineer because we're committed to creating a greener planet.
              Through innovative product design and the adoption of leading
              digital transformation technologies, we are working to solve
              humanity's biggest challenge and meet the expectations of all our
              stakeholders, including our customers and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainable Engineering Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Sustainable engineering
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We create change by delivering sustainable solutions that are
                better for our customers, wider communities and the planet.
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Key Principles
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-medium text-blue-600">
                    Green engineering
                  </span>{" "}
                  approaches design with technologically feasible principles to
                  decrease pollution generation, minimize human exposure to
                  hazards, and improve matter and energy use throughout product
                  lifecycles.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              {sustainabilityPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                      <div className="text-blue-600">{principle.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Industries We Transform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering sustainable innovation across key industries with
              cutting-edge solutions that reduce environmental impact while
              driving technological advancement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${industry.color} rounded-lg mb-6`}
                  >
                    <div className="text-white">{industry.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 font-medium">
                      💡 Innovation Highlight:
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {industry.stats}
                    </p>
                  </div>

                  <button
                    className={`inline-flex items-center ${industry.textColor} font-semibold hover:underline group`}
                  >
                    {industry.link}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Environmental Technology Leadership
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Environmental technology involves applying science and
                technology to address environmental challenges through
                conservation and mitigation of human impact on the environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    2050
                  </div>
                  <p className="text-sm text-gray-600">
                    Net-zero targets for aerospace industry leaders
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    70%
                  </div>
                  <p className="text-sm text-gray-600">
                    Renewable materials in automotive components
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Sustainable Solutions Framework
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Carbon emission reduction strategies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Advanced manufacturing technologies
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Energy-efficient operations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Circular economy integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Partner with us to implement cutting-edge sustainable engineering
            solutions that drive innovation while protecting our planet for
            future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Sustainability Journey
              </button>
            </Link>
            <Link href="/solutions/buvi">
              <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn More About Our Solutions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
