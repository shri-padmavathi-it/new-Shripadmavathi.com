import React from "react";
import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  Cog,
  Shield,
  Database,
  Zap,
  Target,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const MESPage: React.FC = () => {
  const features = [
    "Real-time tracking of materials, work-in-progress, and production data",
    "Integrates with other factory systems like ERP, SCADA, and automation equipment",
  ];

  const advantages = [
    {
      title: "Improved Operational Efficiency",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "orange",
      items: [
        {
          subtitle: "Real-Time Data Monitoring:",
          points: [
            "Provides insights into the status of production lines",
            "Helps to make immediate decisions to resolve issues",
          ],
        },
        {
          subtitle: "Minimizes Downtime:",
          points: [
            "Automatically identifies bottlenecks and inefficiencies",
            "Alerts for machine failures and maintenance needs, reducing unplanned downtime",
          ],
        },
        {
          subtitle: "Optimized Resource Utilization:",
          points: [
            "Tracks material usage and equipment performance to maximize the output",
            "Improves scheduling of work orders, ensuring optimal workforce and machine allocation",
          ],
        },
      ],
    },
    {
      title: "Enhanced Quality Control",
      icon: <Shield className="w-8 h-8" />,
      color: "blue",
      items: [
        {
          subtitle: "Real-Time Quality Monitoring:",
          points: [
            "Tracks product quality at every stage of production",
            "Automatic feedback to operators when deviations occur",
          ],
        },
        {
          subtitle: "Compliance & Traceability:",
          points: [
            "Ensures that all products meet quality standards by enforcing process control",
            "Complete traceability of materials and operations for regulatory compliance",
          ],
        },
        {
          subtitle: "Error Reduction:",
          points: [
            "Reduces human errors through automation of data collection and process monitoring",
          ],
        },
      ],
    },
    {
      title: "Data-Driven Decision Making",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "orange",
      items: [
        {
          subtitle: "Comprehensive Reporting:",
          points: [
            "Detailed performance reports on production rates, yields, and scrap rates",
            "Historical data for trend analysis and continuous improvement",
          ],
        },
        {
          subtitle: "Predictive Analytics:",
          points: [
            "Predicts potential production issues by analysing historical data",
            "Identifies areas of improvement and optimizes production schedules",
          ],
        },
        {
          subtitle: "Informed Decision Making:",
          points: [
            "Allows factory managers to make data-backed decisions based on real-time and historical performance metrics",
          ],
        },
      ],
    },
    {
      title: "Better Integration and Scalability",
      icon: <Cog className="w-8 h-8" />,
      color: "blue",
      items: [
        {
          subtitle: "Integration with Other Systems:",
          points: [
            "MES seamlessly integrates with ERP, PLC, SCADA, and automation systems",
            "Ensures smooth data flow and real-time communication between departments",
          ],
        },
        {
          subtitle: "Scalability for Future Growth:",
          points: [
            "Adapts to changes in production processes and growing manufacturing needs",
            "Scales across multiple factories or lines without major infrastructure changes",
          ],
        },
        {
          subtitle: "Flexibility in Customization:",
          points: [
            "MES solutions can be customized for different industries and production needs",
          ],
        },
      ],
    },
  ];

  const benefits = [
    {
      title: "Process Automation & Digitalization",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Standardization & Flexibility",
      icon: <Target className="w-6 h-6" />,
    },
    { title: "Detailed Analytics", icon: <Database className="w-6 h-6" /> },
    {
      title: "Visibility & Control",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: "Increased Performance & Productivity",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const useCases = [
    {
      title: "Work Order Tracking",
      scenario:
        "As vehicles are assembled on the line, MES provides real-time updates on each vehicle's production status, work orders, and tasks. The system monitors if each task (e.g., installing doors, wiring) is completed on time and alerts supervisors if any task is delayed.",
      benefit:
        "Ensured that work orders are completed on schedule and helped avoid production bottlenecks.",
    },
    {
      title: "Machine Performance Monitoring",
      scenario:
        "MES collects data from machines and robots in real-time, tracking their operational status. If a robot performing a welding operation experiences an issue or stops, MES immediately triggers an alert, and a technician can address the problem before it causes significant downtime.",
      benefit:
        "Reduces machine downtime and increases equipment uptime by enabling immediate response to issues.",
    },
    {
      title: "Quality Control and Defect Detection",
      scenario:
        "As vehicles move through the assembly line, MES integrates with quality control systems that inspect each vehicle for defects. If a defect (like a misaligned door) is detected, MES flags the vehicle, halting further assembly and initiating corrective actions.",
      benefit:
        "Prevents defective products from reaching customers, improving overall quality and customer satisfaction.",
    },
    {
      title: "Material Availability and Inventory Tracking",
      scenario:
        "MES monitors the availability of materials (like parts and components) in real-time. If a part is running low, the system alerts the warehouse, which can trigger an automatic reorder or direct material transfer to avoid production delays.",
      benefit:
        "Minimizes material shortages and overstocking, ensuring the production line runs smoothly without interruptions.",
    },
    {
      title: "Production Analytics and Real-Time Reporting",
      scenario:
        "Supervisors and managers have access to real-time dashboards showing production progress, including key metrics such as output, cycle times, and defect rates. If any production area is falling behind, they can make adjustments instantly (e.g., shift resources, reallocate tasks).",
      benefit:
        "Allows quick decision-making and better optimization of production, leading to higher efficiency and meeting delivery deadlines.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">MES Capabilities</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Manufacturing Execution System - The bridge between enterprise
            planning and production excellence
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Introduction
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              System that monitors and controls the production process in
              real-time. Serves as a bridge between enterprise resource planning
              (ERP) and production systems.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Key Features
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Advantages
          </h2>
          <div className="space-y-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  advantage.color === "orange"
                    ? "bg-orange-50 border-l-4 border-orange-500"
                    : "bg-blue-50 border-l-4 border-blue-500"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-full ${
                      advantage.color === "orange"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-blue-100 text-blue-600"
                    } mr-4`}
                  >
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {advantage.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {item.subtitle}
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start space-x-2"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                advantage.color === "orange"
                                  ? "bg-orange-500"
                                  : "bg-blue-500"
                              } mt-2 flex-shrink-0`}
                            ></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  index % 2 === 0
                    ? "bg-orange-500 text-white"
                    : "bg-blue-500 text-white"
                } hover:shadow-lg transition-shadow duration-300 flex items-center justify-center`}
              >
                <div className="flex items-center">
                  {benefit.icon}
                  <h3 className="ml-4 text-lg font-semibold">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            MES Use Cases
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Real-Time Production Monitoring in an Automotive Assembly Line
          </p>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  index % 2 === 0
                    ? "bg-orange-50 border border-orange-200"
                    : "bg-blue-50 border border-blue-200"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      index % 2 === 0 ? "bg-orange-500" : "bg-blue-500"
                    } text-white flex items-center justify-center font-bold mr-4`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {useCase.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Scenario:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {useCase.scenario}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Benefit:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {useCase.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how MES can revolutionize your production efficiency
          </p>
          <Link href="/about/contactUs">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MESPage;
