"use client";

import { SetStateAction, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Redefined offerings data with orange/blue alternating scheme and detailed descriptions
const offeringsData = [
  {
    id: "core",
    title: "Core Offerings",
    color: "#f97316", // Orange for alternating cards
    imagePath: "/core.png",
    description:
      "Our foundational services that deliver excellence across all industries",
    items: [
      {
        name: "Design Support",
        description:
          "Providing end-to-end assistance in product design, including CAD modeling, detailing, drafting, and design validation to ensure efficient product development.",
      },
      {
        name: "IT Services",
        description:
          "Offering tailored IT solutions including software development, system integration, cloud services, and technical support to drive business efficiency.",
      },
      {
        name: "Product Engineering",
        description:
          "Complete product development services from concept to production, covering mechanical & Electronics integration with a focus on innovation and manufacturability.",
      },
      {
        name: "Product Validation",
        description:
          "We Conduct rigorous analysis, simulations, and testing to validate product performance, safety, and compliance with industry standards before market launch.",
      },
      {
        name: "Managing Offshore Teams",
        description:
          "Efficiently leading global engagements, ensuring seamless communication, quality delivery, and alignment with project goals while optimizing cost and resources.",
      },
    ],
  },
  {
    id: "industry",
    title: "Industry Specific",
    color: "#3b82f6", // Blue for alternating cards
    imagePath: "/industry.jpeg",
    description:
      "Tailored solutions for your specific industry needs and challenges",
    items: [
      {
        name: "Standards & Regulations",
        description:
          "Ensuring product designs comply with international standards, industry regulations, and certifications for quality, safety, and market acceptance.",
      },
      {
        name: "Subject Matter Experts",
        description:
          "Providing specialized technical expertise and guidance in niche domains to solve complex engineering challenges and support strategic decision-making.",
      },
      {
        name: "Engineering Analytics",
        description:
          "Leveraging data-driven insights, simulations, and predictive analytics to optimize design, improve product performance, and drive engineering efficiency.",
      },
    ],
  },
  {
    id: "services",
    title: "Advanced Services",
    color: "#f97316", // Orange for alternating cards
    imagePath: "/advanced.png",
    description: "Specialized services to optimize your business operations",
    items: [
      {
        name: "Data Management",
        description:
          "We provide comprehensive data management services, ensuring accurate, organized, and secure handling of critical business information to support smarter decision-making and operational efficiency.",
      },
      {
        name: "Business Process Delivery",
        description:
          "Our business process delivery solutions help organizations streamline operations, improve productivity, and reduce costs by managing key workflows with precision and expertise.",
      },
      {
        name: "Strategic Sourcing",
        description:
          "We offer strategic sourcing services to optimize procurement processes, enhance supplier relationships, and drive cost-effective, value-based sourcing aligned with business goals.",
      },
      {
        name: "Manufacturing Solutions",
        description:
          "Our manufacturing solutions cover process optimization, automation support, and supply chain integration to help clients achieve higher efficiency, quality, and scalability in production.",
      },
    ],
  },
];

// Industry data with alternating colors
const industryData = [
  {
    id: "semiconductor",
    title: "SEMICONDUCTOR",
    imagePath: "/semiconductor.png",
    description: "Driving innovation in the semiconductor industry",
    color: "#6366f1", // Indigo – for high-tech/electronics
  },
  {
    id: "aerospace",
    title: "AEROSPACE & DEFENSE",
    imagePath: "/aerospace.png",
    description: "Advanced engineering for aerospace and defense systems",
    color: "#0ea5e9", // Sky blue – for sky, flight, technology
  },
  {
    id: "medicine",
    title: "MEDICINE & HEALTHCARE",
    imagePath: "/medicine.png",
    description: "Transforming healthcare with modern medical innovations",
    color: "#10b981", // Emerald – clean, healing, health
  },
  {
    id: "automotive",
    title: "AUTOMOTIVE & MOBILITY",
    imagePath: "/automotive.png",
    description: "Cutting-edge solutions for the future of mobility",
    color: "#f59e0b", // Amber – energy, speed, innovation
  },
];

export default function ExperienceOfferings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  // Handle navigation
  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === offeringsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? offeringsData.length - 1 : prev - 1
    );
  };

  // Handle card click
  const handleCardClick = (id: string) => {
    setSelectedCard(id);
    setShowDetails(true);
    setExpandedItems({});
  };

  // Close details view
  const closeDetails = () => {
    setShowDetails(false);
    setSelectedCard(null);
    setExpandedItems({});
  };

  // Toggle item expansion
  const toggleItemExpansion = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header with subtle texture */}
      <div className="w-full py-10 text-center bg-white relative border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            Our Offerings
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto px-4">
            Delivering exceptional value at every stage of the process
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative container mx-auto max-w-7xl px-4 py-12">
        {!showDetails ? (
          <>
            {/* Card Carousel - Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offeringsData.map((offering, index) => (
                <div
                  key={offering.id}
                  className="relative h-[500px] overflow-hidden cursor-pointer rounded-xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                  onClick={() => handleCardClick(offering.id)}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={offering.imagePath || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      style={{ objectFit: "cover", filter: "brightness(0.4)" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${offering.color}E6, transparent 70%)`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider rounded-full mb-3 border border-white/30">
                      {index === 0
                        ? "Essential"
                        : index === 1
                        ? "Specialized"
                        : "Advanced"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {offering.title.toUpperCase()}
                    </h3>
                    <p className="text-white/90 mb-6">{offering.description}</p>
                    <button className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors flex items-center font-medium">
                      Explore more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Details View with improved styling
          <div className="p-2">
            {selectedCard && (
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl border-2 border-gray-300">
                {/* Back button - Absolute positioned for better UX */}
                <button
                  onClick={closeDetails}
                  className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center shadow-lg border border-gray-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </button>

                {/* Hero image with overlay */}
                <div className="relative h-[350px]">
                  <div className="absolute inset-0">
                    <Image
                      src={
                        offeringsData.find((o) => o.id === selectedCard)
                          ?.imagePath || ""
                      }
                      alt={
                        offeringsData.find((o) => o.id === selectedCard)
                          ?.title || ""
                      }
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, #000000CC, transparent 70%), linear-gradient(to right, ${
                        offeringsData.find((o) => o.id === selectedCard)?.color
                      }99, transparent 70%)`,
                    }}
                  />
                  <div className="absolute bottom-10 left-10 text-white">
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">
                      {offeringsData
                        .find((o) => o.id === selectedCard)
                        ?.title.toUpperCase()}
                    </h3>
                    <p className="text-xl text-white/90 max-w-xl">
                      {
                        offeringsData.find((o) => o.id === selectedCard)
                          ?.description
                      }
                    </p>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 md:p-12 text-black">
                  <div className="max-w-6xl mx-auto">
                    <h4 className="text-2xl font-bold mb-6 flex items-center">
                      <div className="w-8 h-8 mr-3 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-sm text-white">→</span>
                      </div>
                      Key Services
                    </h4>

                    <div className="space-y-4 mb-12">
                      {offeringsData
                        .find((o) => o.id === selectedCard)
                        ?.items.map((item, i) => (
                          <div
                            key={i}
                            className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-md"
                          >
                            <div
                              className="p-4 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                              onClick={() => toggleItemExpansion(i)}
                              onMouseEnter={() => setHoveredItem(i)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              <div className="flex items-center flex-1">
                                <span
                                  className="w-3 h-3 rounded-full mr-4 transition-all duration-300"
                                  style={{
                                    backgroundColor:
                                      hoveredItem === i || expandedItems[i]
                                        ? offeringsData.find(
                                            (o) => o.id === selectedCard
                                          )?.color || "#f97316"
                                        : "#9ca3af",
                                  }}
                                ></span>
                                <span
                                  className={`text-lg font-medium transition-colors ${
                                    hoveredItem === i || expandedItems[i]
                                      ? "text-black"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {item.name}
                                </span>
                              </div>
                              <ChevronRight
                                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                                  expandedItems[i] ? "rotate-90" : ""
                                }`}
                              />
                            </div>

                            {expandedItems[i] && (
                              <div className="px-4 pb-4 pl-11 border-t border-gray-100 bg-gray-50">
                                <p className="text-gray-700 leading-relaxed pt-3">
                                  {item.description}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>

                    {/* Industry section for Industry Specific card */}
                    {selectedCard === "industry" && (
                      <div className="mt-12 pt-8 border-t border-gray-300">
                        <h4 className="text-2xl font-bold mb-8 flex items-center">
                          <div className="w-8 h-8 mr-3 rounded-full bg-orange-500 flex items-center justify-center">
                            <span className="text-sm text-white">→</span>
                          </div>
                          Industries We Serve
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {industryData.map((industry, idx) => (
                            <div
                              key={industry.id}
                              className="relative h-[220px] overflow-hidden rounded-xl group border-2 border-gray-300 hover:border-gray-400"
                            >
                              <div className="absolute inset-0">
                                <Image
                                  src={industry.imagePath || "/placeholder.svg"}
                                  alt={industry.title}
                                  fill
                                  style={{
                                    objectFit: "cover",
                                    filter: "brightness(0.4)",
                                  }}
                                />
                              </div>
                              <div
                                className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 group-hover:opacity-100 transition-opacity"
                                style={{
                                  background: `linear-gradient(to top, ${industry.color}E6, transparent 70%)`,
                                }}
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform group-hover:translate-y-0 translate-y-2">
                                <h5 className="text-xl font-bold mb-2 text-white">
                                  {industry.title}
                                </h5>
                                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                  {industry.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA button at the bottom */}
                    <div className="mt-12 flex justify-center">
                      <Link href={"/about/contactUs"}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center gap-2 border border-orange-500 hover:border-orange-600">
                          Request a consultation
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
