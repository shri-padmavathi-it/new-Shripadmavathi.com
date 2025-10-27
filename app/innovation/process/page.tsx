"use client";

import React from "react";
import {
  ChevronRight,
  Cog,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Settings,
  Eye,
  Database,
  Network,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const ProcessAutomationPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automated Machines & Robotics",
      description:
        "CNC machines, robotic arms, conveyors, automated welding, and assembly stations streamline production processes.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Control Systems",
      description:
        "PLC/SCADA systems monitor and control machines and processes in real-time for optimal performance.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Sensors & IoT Integration",
      description:
        "Collect critical data on temperature, pressure, load, vibration, and other parameters for intelligent decision-making.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Optimize machine utilization, enable predictive maintenance, and significantly reduce downtime through data insights.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Quality Control",
      description:
        "Automated inspection systems including machine vision ensure consistent product quality and standards.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ERP Integration",
      description:
        "Seamless coordination with Enterprise Resource Planning for production planning, inventory management, and logistics.",
      color: "bg-blue-50 border-blue-200",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      title: "Increased Production Efficiency",
      description:
        "Streamlined operations and consistent output boost overall productivity",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Reduced Labor Costs",
      description:
        "Minimize manual intervention and human error while optimizing workforce allocation",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Enhanced Product Quality",
      description:
        "Consistent quality control and full traceability throughout the production process",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Predictive Maintenance",
      description:
        "Reduce unexpected downtime through intelligent monitoring and maintenance scheduling",
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      title: "Improved Workplace Safety",
      description:
        "Reduce human exposure to hazardous environments and dangerous tasks",
    },
  ];

  const automationTypes = [
    {
      title: "Process Automation System (PAS)",
      description:
        "Used to automatically control processes in chemical plants, oil refineries, and paper factories using networked sensors and controllers.",
      applications: [
        "Chemical Processing",
        "Oil Refineries",
        "Paper & Pulp",
        "Food Processing",
      ],
    },
    {
      title: "Industrial Process Control",
      description:
        "Monitor, control and optimize continuous industrial production processes using sophisticated control algorithms.",
      applications: [
        "Manufacturing Lines",
        "Power Plants",
        "Water Treatment",
        "Mining Operations",
      ],
    },
    {
      title: "Robotic Process Automation",
      description:
        "Software robots handle repetitive tasks, allowing human workers to focus on more complex and strategic activities.",
      applications: [
        "Data Entry",
        "Invoice Processing",
        "Quality Assurance",
        "Inventory Management",
      ],
    },
  ];

  const handleClick = () => {
    alert("Brochure download will be available soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transform Your Manufacturing with
              <span className="text-orange-600"> Process Automation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Streamline manufacturing operations by minimizing manual
              intervention, improving consistency, increasing productivity,
              reducing errors, and enhancing safety through intelligent
              automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                What is Process Automation?
              </h2>
              <p className="text-gray-700 mb-4">
                Process automation involves the use of various equipment and
                control systems such as machinery, processes in factories,
                boilers, and heat-treating ovens to minimize human intervention
                in manufacturing operations.
              </p>
              <p className="text-gray-700 mb-4">
                The goal of automation is to increase efficiency, productivity,
                and accuracy in the production process, reducing manual labour
                and minimizing the risk of human error.
              </p>
              <p className="text-gray-700">
                Modern automation systems integrate advanced technologies like
                IoT sensors, artificial intelligence, and machine learning to
                create intelligent manufacturing environments that can adapt and
                optimize in real-time.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    85%
                  </div>
                  <div className="text-gray-700">Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    60%
                  </div>
                  <div className="text-gray-700">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-700">Quality Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    70%
                  </div>
                  <div className="text-gray-700">Downtime Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions that transform traditional
              manufacturing into intelligent, connected operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-6 rounded-xl border-2 hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                  } mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Benefits of Process Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From managers' perspectives, the key benefits of an automated
              manufacturing system are enhancing productivity and reducing costs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-black ml-3">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Automation Section */}
      <section id="types" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Types of Process Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different automation approaches for various industrial
              applications and requirements
            </p>
          </div>
          <div className="space-y-8">
            {automationTypes.map((type, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-orange-50 border-orange-200"
                    : "bg-blue-50 border-blue-200"
                } p-8 rounded-xl border-2`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                      }`}
                    >
                      {type.title}
                    </h3>
                    <p className="text-gray-700 text-lg">{type.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-3">
                      Applications:
                    </h4>
                    <ul className="space-y-2">
                      {type.applications.map((app, appIndex) => (
                        <li
                          key={appIndex}
                          className="flex items-center text-gray-700"
                        >
                          <ChevronRight
                            className={`w-4 h-4 mr-2 ${
                              index % 2 === 0
                                ? "text-orange-600"
                                : "text-blue-600"
                            }`}
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Industry Impact</h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto">
                Recent supply chain disruptions and a squeeze on labour markets
                means automation has now become more important than ever. Modern
                automation solutions are reshaping manufacturing across all
                industries.
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$200B+</div>
                  <div className="text-blue-100">Global Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15%</div>
                  <div className="text-blue-100">Annual Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50M+</div>
                  <div className="text-blue-100">Jobs Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">80%</div>
                  <div className="text-blue-100">Manufacturer Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Automate Your Processes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of manufacturers who have transformed their
            operations with intelligent process automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAutomationPage;
