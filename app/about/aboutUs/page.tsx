"use client";

import React from "react";
import { Award, MapPin, Globe, Briefcase, Target, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const countries = [
    { name: "United States", color: "bg-blue-500", region: "Americas" },
    { name: "United Kingdom", color: "bg-green-500", region: "Europe" },
    { name: "France", color: "bg-green-500", region: "Europe" },
    { name: "Germany", color: "bg-green-500", region: "Europe" },
    { name: "Italy", color: "bg-green-500", region: "Europe" },
    { name: "Dubai", color: "bg-orange-500", region: "Middle East" },
    { name: "Qatar", color: "bg-orange-500", region: "Middle East" },
    { name: "India", color: "bg-purple-500", region: "Asia" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* About Us Banner */}
      <div className="w-full py-12 relative bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light tracking-wider font-bold text-black">
            About Us
          </h1>
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
            <div className="h-full w-full relative">
              <div className="absolute right-0 w-4 h-full bg-gray-300 mx-1"></div>
              <div className="absolute right-8 w-4 h-full bg-gray-300 mx-1"></div>
              <div className="absolute right-16 w-4 h-full bg-gray-300 mx-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-20 flex-shrink-0">
            <div className="h-full flex flex-col">
              <div className="bg-orange-500 h-24 w-full"></div>
              <div className="bg-blue-500 h-24 w-full"></div>
            </div>
          </div>
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-black mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              SPC is a fast growing Engineering and Information technology
              services company leveraging on over two decades of experience in
              varied industries. We are committed to providing innovative
              solutions that drive business growth and technological
              advancement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong foundation in both engineering and information
              technology, we offer comprehensive services tailored to meet the
              unique needs of our diverse clientele. Our team of experts
              combines technical expertise with industry knowledge to deliver
              solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-orange-500 text-white p-8 flex flex-col items-center justify-center text-center h-64 border border-gray-300 rounded-lg">
              <Briefcase className="h-12 w-12 mb-4 text-white" />
              <p className="text-xl font-medium">
                Over two decades experience in Engineering and IT
              </p>
            </div>
            <div className="bg-blue-500 text-white p-8 flex flex-col items-center justify-center text-center h-64 border border-gray-300 rounded-lg">
              <Award className="h-12 w-12 mb-4 text-white" />
              <p className="text-xl font-medium">
                Diverse business experience backed by technology expertise
              </p>
            </div>
            <div className="bg-orange-500 text-white p-8 flex flex-col items-center justify-center text-center h-64 border border-gray-300 rounded-lg">
              <Target className="h-12 w-12 mb-4 text-white" />
              <p className="text-xl font-medium">
                Specialize in Product design, IT and industry specific solutions
              </p>
            </div>
            <div className="bg-blue-500 text-white p-8 flex flex-col items-center justify-center text-center h-64 border border-gray-300 rounded-lg">
              <Globe className="h-12 w-12 mb-4 text-white" />
              <p className="text-xl font-medium">
                Clients in over 15 countries and 4 continents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <div className="relative">
              <div className="bg-orange-500 rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center border border-gray-300">
                  <svg
                    className="w-16 h-16 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-orange-500 w-full h-12 mt-4 flex items-center justify-center rounded-lg">
                <h3 className="text-xl font-bold text-white">Mission</h3>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">
                Help our customers gain and sustain a strategic business
                advantage by providing intelligent business solutions leveraging
                technology, professional services, and a flexible global
                delivery model.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <div className="bg-blue-500 rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center border border-gray-300">
                  <svg
                    className="w-16 h-16 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-blue-500 w-full h-12 mt-4 flex items-center justify-center rounded-lg">
                <h3 className="text-xl font-bold text-white">Vision</h3>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">
                Become a leading, global enterprise and intelligent business
                solutions provider that drives performance and business value.
                We are committed to help our clients achieve success by
                providing comprehensive solutions and services to maximize
                return on their investments.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative">
              <div className="bg-orange-500 rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center border border-gray-300">
                  <Heart className="w-16 h-16 text-orange-500" />
                </div>
              </div>
              <div className="bg-orange-500 w-full h-12 mt-4 flex items-center justify-center rounded-lg">
                <h3 className="text-xl font-bold text-white">Core Values</h3>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                We enable our customers to apply technology across their value
                chain with below core values
              </p>
              <p className="font-bold text-black">
                Integrity, Innovation, Passion and Teamwork
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black md:mb-20 mb-36 text-center">
            Global Presence
          </h2>
          <div className="flex flex-col items-center">
            <div className="relative h-96 w-full mb-6">
              <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full border border-gray-700">
                  <div className="relative h-96 w-full mb-6">
                    <div className="absolute inset-0 bg-blue-200">
                      <Image
                        src="/map.jpg"
                        alt="Global Presence Map"
                        layout="fill"
                        // objectFit="contain"
                        className="opacity-100"
                      />
                    </div>
                  </div>

                  {/* Country list */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-black">United States</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                      <span className="text-black">United Kingdom</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-700 rounded-full mr-2"></div>
                      <span className="text-black">France</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                      <span className="text-black">Germany</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-black">Italy</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-900 rounded-full mr-2"></div>
                      <span className="text-black">Dubai</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                      <span className="text-black">Qatar</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-700 rounded-full mr-2"></div>
                      <span className="text-black">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-orange-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Engineering Services
              </h3>
              <p className="text-gray-600">
                Comprehensive engineering solutions across various domains, from
                concept to implementation. Our expertise spans mechanical,
                electrical, and automation engineering.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-blue-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                IT Solutions
              </h3>
              <p className="text-gray-600">
                End-to-end IT services including enterprise applications, cloud
                solutions, and digital transformation to drive your business
                forward.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-orange-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Product Design
              </h3>
              <p className="text-gray-600">
                Innovative product design services that blend aesthetics with
                functionality, ensuring market-ready solutions that meet
                consumer needs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-blue-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Consulting Services
              </h3>
              <p className="text-gray-600">
                Strategic consulting to optimize your business processes,
                enhance operational efficiency, and drive growth through
                technology adoption.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-orange-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Industry Solutions
              </h3>
              <p className="text-gray-600">
                Tailored solutions for specific industries including
                manufacturing, healthcare, finance, and retail to address unique
                challenges.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 hover:border-blue-500 transition-colors duration-300">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Global Delivery
              </h3>
              <p className="text-gray-600">
                Flexible global delivery model that ensures timely project
                execution, cost-effectiveness, and access to specialized talent
                pools worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner with Us */}
      <div className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Partner With Us
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-600">
            Join the growing number of businesses that trust SPC for their
            engineering and IT needs. Experience the difference of working with
            a partner committed to your success.
          </p>
          <Link href="/about/contactUs" className="inline-block">
            <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 border border-orange-500 hover:border-orange-600">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
