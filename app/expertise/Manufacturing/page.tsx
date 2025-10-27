"use client";

import React from "react";
import {
  CheckCircle,
  Cog,
  Factory,
  Settings,
  Package,
  Wrench,
  Award,
  Users,
  TrendingUp,
  Target,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  variant: "orange" | "blue";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  items,
  icon,
  variant,
}) => {
  const cardClass =
    variant === "orange"
      ? "bg-orange-50 border-orange-200 hover:shadow-orange-100"
      : "bg-blue-50 border-blue-200 hover:shadow-blue-100";
  const iconClass = variant === "orange" ? "text-orange-600" : "text-blue-600";
  const titleClass = variant === "orange" ? "text-orange-800" : "text-blue-800";

  return (
    <div
      className={`${cardClass} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <div className={`${iconClass} mr-3`}>{icon}</div>
        <h3 className={`text-xl font-bold ${titleClass}`}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-sm font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeatureHighlight: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
    <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ManufacturingServices: React.FC = () => {
  const coreCapabilities = [
    "5-Axis CNC Milling",
    "EDM Sparking & Wire Cut",
    "Surface Grinding Machines",
    "Quality Inspection Equipment",
    "Modern Toolroom Facilities",
    "End-to-End Manufacturing Solutions",
  ];

  const manufacturingProducts = [
    {
      name: "Jig and Fixtures",
      image: "/manufacturing/JigFixtures.png",
      description: "Precision jigs and fixtures for manufacturing accuracy"
    },
    {
      name: "Alloy Wheels for Automobile Industry",
      image: "/manufacturing/AlloyWheels.png",
      description: "High-quality alloy wheels for automotive applications"
    },
    {
      name: "Electrical Enclosures",
      image: "/manufacturing/ElectricEnclosures.png",
      description: "Custom electrical enclosures and control panels"
    },
    {
      name: "Mould Manufacture and Casting",
      image: "/manufacturing/MouldManufactring.png",
      description: "Complete mould design and manufacturing solutions"
    },
    {
      name: "Sand Casting Components",
      image: "/manufacturing/SandCasting.png",
      description: "Durable sand casting for complex metal parts"
    },
    {
      name: "Precision Components",
      image: "/manufacturing/PrecisionComponenets.png",
      description: "High-precision machined components"
    },
    {
      name: "Spare Parts for Intermixture",
      image: "/manufacturing/SparePartsForIntermixtures.png",
      description: "Custom spare parts and replacement components"
    },
    {
      name: "SBM (Stretch Blow Moulding)",
      image: "/manufacturing/SBM.png",
      description: "Stretch blow moulding for plastic containers"
    }
  ];

  const partnerEcosystem = [
    "Raw Material Sourcing Partners",
    "Specialized Processing Vendors",
    "Quality Assurance & Testing Facilities",
    "Final Inspection & Validation",
    "Logistics & Supply Chain Partners",
  ];

  const valueProposition = [
    "Quality Assurance at Every Stage",
    "Cost-Effective Manufacturing Solutions",
    "Timely Delivery Commitment",
    "Design & Engineering Support",
    "Collaborative Manufacturing Approach",
    "Industry-Specific Domain Knowledge",
  ];

  const handleClick = () => {
    alert("Brochure download will be available soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Manufacturing & Sourcing Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Reinventing manufacturing excellence through collaborative
              partnerships and innovative processes. Over 10 years of expertise
              in delivering quality, cost-effective solutions with precision
              timing across multiple industry verticals.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose SPC Manufacturing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlight
              title="Advanced Toolroom"
              description="State-of-the-art machinery including 5-axis CNC milling, EDM, and precision grinding equipment for superior quality parts."
              icon={<Cog className="w-12 h-12" />}
            />
            <FeatureHighlight
              title="Partnership Manufacturing"
              description="Collaborative approach leveraging alternate processes and strategic partnerships for optimal cost and quality balance."
              icon={<Users className="w-12 h-12" />}
            />
            <FeatureHighlight
              title="Quality Anchoring"
              description="Strong commitment to quality, cost efficiency, and timeline adherence backed by industry-specific domain knowledge."
              icon={<Award className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Comprehensive Manufacturing Capabilities
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ServiceCard
              title="Core Manufacturing Capabilities"
              items={coreCapabilities}
              icon={<Factory className="w-8 h-8" />}
              variant="blue"
            />

            <ServiceCard
              title="Product Portfolio"
              items={manufacturingProducts.map(p => p.name)}
              icon={<Package className="w-8 h-8" />}
              variant="orange"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Partner Ecosystem"
              items={partnerEcosystem}
              icon={<TrendingUp className="w-8 h-8" />}
              variant="orange"
            />

            <ServiceCard
              title="Our Value Proposition"
              items={valueProposition}
              icon={<Target className="w-8 h-8" />}
              variant="blue"
            />
          </div>
        </div>
      </section>

      

      {/* Manufacturing Solutions Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Manufacturing Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Precision Machining
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced CNC milling and precision components manufactured with
                tight tolerances using state-of-the-art equipment and quality
                control.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  High Precision Manufacturing
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Automotive Solutions
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized manufacturing of alloy wheels, jigs & fixtures, and
                precision spare parts for the automotive industry with stringent
                quality standards.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  Automotive Grade Quality
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Factory className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Casting & Moulding
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete mould manufacturing, sand casting, and stretch blow
                moulding capabilities with in-house tooling and quality
                validation.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Complete Process Control
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  EDM Services
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced EDM sparking and wire-cut capabilities for complex
                geometries and intricate tooling requirements with precision
                finishing.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  Complex Geometry Solutions
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Package className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Electrical Enclosures
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Design and manufacture of custom electrical enclosures meeting
                industry standards with comprehensive testing and validation.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Custom Engineering
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Quality Assurance
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive quality control with capable inspection equipment,
                partner validation facilities, and rigorous testing protocols.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  End-to-End Quality Control
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Infrastructure Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                  <Factory className="w-6 h-6 mr-3" />
                  Complete Manufacturing Infrastructure
                </h3>
                <p className="text-gray-600">
                  Our modern toolroom and manufacturing facilities are equipped
                  to handle all types of manufacturing needs, from prototyping
                  to full-scale production with consistent quality and
                  efficiency.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Comprehensive Partner Network
                </h3>
                <p className="text-gray-600">
                  Strategic partnerships spanning raw material sourcing to final
                  inspection ensure optimal quality, cost-effectiveness, and
                  delivery timelines across all manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio Gallery Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
      Our Product Portfolio
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {manufacturingProducts.map((product, index) => (
        <div key={index} className="...">
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <img src={product.image} alt={product.name}  />
          </div>
          <div className="p-5">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Challenges?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Partner with SPC for collaborative manufacturing solutions that
            deliver quality, cost efficiency, and timely delivery. Let our 10+
            years of expertise work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center">
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingServices;