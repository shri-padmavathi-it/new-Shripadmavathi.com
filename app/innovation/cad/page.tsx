"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

interface WikipediaResponse {
  query: {
    pages: {
      [key: string]: {
        pageid: number;
        title: string;
        extract: string;
      };
    };
  };
}

interface DrawingAutomationData {
  title: string;
  summary: string;
  loading: boolean;
  error: string | null;
}

export default function DrawingAutomationPage() {
  const data: DrawingAutomationData[] = [
    {
      title: "CAD Automation",
      summary:
        "CAD Automation leverages advanced software tools and scripting to streamline repetitive design tasks, enhance productivity, and reduce human errors in engineering workflows. By automating processes such as part modeling, assembly generation, drawing creation, and data management, organizations can save time, cut costs, and improve design accuracy. Whether it's automating BOM generation, rule-based design, or integrating CAD with other enterprise systems, CAD Automation ensures faster project delivery and consistent quality across product development cycles.",
      loading: false,
      error: null,
    },
  ];

  return (
    <>
      <Head>
        <title>CAD Automation | Technology Overview</title>
        <meta
          name="description"
          content="Learn about drawing automation technology and its applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                CAD Automation Technology
              </h1>
              <p className="text-lg text-gray-600">
                Exploring the Future of Automated Visual Creation
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content Section with Title */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
            <div className="border-l-4 border-orange-500 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {data[0].loading ? (
                  <div className="animate-pulse bg-gray-200 h-8 w-64 rounded"></div>
                ) : (
                  data[0].title
                )}
              </h2>

              {data[0].loading ? (
                <div className="space-y-3">
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-4 w-5/6 rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-4 w-4/5 rounded"></div>
                  <div className="animate-pulse bg-gray-200 h-4 w-full rounded"></div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg text-justify">
                    {data[0].summary}
                  </p>
                  {data[0].error && (
                    <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-orange-700 text-sm">
                        Note: Using fallback content due to API limitations
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Large Video Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-300">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/Media.mp4" type="video/mp4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 mb-4 inline-block">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold">CAD Automation Demo</p>
                    <p className="text-sm text-gray-300 mt-2">
                      Experience the power of automated design workflows
                    </p>
                  </div>
                </div>
              </video>
            </div>
          </div>

          {/* Information Cards Grid */}
          <div className="relative w-full">
            {/* Key Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 w-full">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-blue-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Key Benefits
                </h3>
              </div>
              <ul className="space-y-6 text-gray-700">
                <li>
                  <div className="flex items-start">
                    <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Faster design changes</p>
                      <p className="text-sm">
                        Automation makes it easier to make changes to designs,
                        allowing for greater flexibility in response to changing
                        requirements.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Customized products</p>
                      <p className="text-sm">
                        CAD automation can enable the creation of customized
                        products tailored to specific customer needs.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Reduced risk</p>
                      <p className="text-sm">
                        Automated design processes can reduce the risk of
                        errors, delays, and product recalls.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Consistent designs</p>
                      <p className="text-sm">
                        CAD automation ensures that design standards and
                        templates are consistently applied, improving quality
                        across projects.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start">
                    <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full mr-4 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Reduces design time</p>
                      <p className="text-sm">
                        Automation handles repetitive tasks, allowing designers
                        to focus on more complex and creative aspects.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
