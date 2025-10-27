"use client";

import React from "react";
import {
  CheckCircle,
  Cloud,
  Database,
  Shield,
  Users,
  Settings,
  Zap,
  Globe,
  BarChart3,
  Cog,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { a } from "framer-motion/client";

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

const SAPERPServices: React.FC = () => {
  const implementations = [
    "Rise with SAP S/4HANA Private Cloud",
    "Grow with SAP S/4HANA Public Cloud",
    "SAP SuccessFactors",
    "SAP BW/4HANA, BI & SAC",
    "SAP MDG",
    "SAP WM/EWM",
    "SAP GRC",
  ];

  const buildIntegration = [
    "SAP BTP Build Apps",
    "SAP Integration Suite",
    "Concur, SF, S4HANA Integration",
    "IIoT Solutions",
  ];

  const appManagement = [
    "Application support to SAP ECC and on-premise S/4HANA",
    "Comprehensive Support Services",
    "SAP Professional Services",
    "SAP Infrastructure Management",
  ];

  const valueAdds = [
    "SAP System Audits",
    "Computer System Validation (CSV)",
    "SAP Innovation Garage",
    "Process Automations using SAP BTP pre-built AI/ML",
  ];

  const handleClick = () => {
    alert("Brochure download will be available soon!");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              SAP ERP Solutions & Services
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Transform your business with comprehensive SAP implementations,
              enhancements, and global rollouts. Leverage next-generation cloud
              ERP solutions with built-in AI capabilities and industry best
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our SAP Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureHighlight
              title="Cloud-First Approach"
              description="Deploy SAP S/4HANA in public or private cloud environments with scalable, secure, and cost-effective solutions."
              icon={<Cloud className="w-12 h-12" />}
            />
            <FeatureHighlight
              title="AI-Powered Insights"
              description="Leverage built-in AI and machine learning capabilities for predictive analytics and automated business processes."
              icon={<Zap className="w-12 h-12" />}
            />
            <FeatureHighlight
              title="Global Implementation"
              description="Comprehensive rollout services with industry best practices and proven methodologies across multiple regions."
              icon={<Globe className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Comprehensive SAP Service Offerings
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ServiceCard
              title="Implementations, Enhancements & Global Rollout"
              items={implementations}
              icon={<Settings className="w-8 h-8" />}
              variant="blue"
            />

            <ServiceCard
              title="SAP Build for Apps and Integration"
              items={buildIntegration}
              icon={<Database className="w-8 h-8" />}
              variant="orange"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Application Management Services"
              items={appManagement}
              icon={<Cog className="w-8 h-8" />}
              variant="orange"
            />

            <ServiceCard
              title="Customer Value Adds"
              items={valueAdds}
              icon={<Star className="w-8 h-8" />}
              variant="blue"
            />
          </div>
        </div>
      </section>

      {/* SAP Solutions Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our SAP Solution Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  S/4HANA Cloud
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ready-to-run ERP system with industry best practices, available
                as SaaS with built-in security and AI capabilities.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Public & Private Cloud Options
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  SuccessFactors
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive HR management suite with talent acquisition,
                performance management, and employee experience solutions.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  Human Capital Management
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Analytics & BI
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced analytics with SAP Analytics Cloud, BW/4HANA for
                real-time insights and data-driven decision making.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Real-time Analytics
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  GRC & Security
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Governance, Risk, and Compliance solutions with built-in
                security features and enterprise-grade protection.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  Enterprise Security
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Integration Suite
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Seamless integration capabilities connecting SAP and non-SAP
                applications with pre-built connectors and APIs.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Hybrid Integration
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  BTP & AI/ML
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Business Technology Platform with pre-built AI/ML capabilities
                for process automation and intelligent insights.
              </p>
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-orange-600">
                  Intelligent Automation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with SAP?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through your SAP journey with proven
            methodologies, comprehensive support, and innovative solutions
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAPERPServices;
