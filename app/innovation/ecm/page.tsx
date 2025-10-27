import React from "react";
import {
  CheckCircle,
  FileText,
  Users,
  Shield,
  TrendingUp,
  ArrowRight,
  Cog,
  ClipboardList,
  Link2,
} from "lucide-react";
import Link from "next/link";

const ECMPage = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improve Product Quality",
      description:
        "Enhance product quality and performance through systematic change management",
      color: "blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduce Operational Risks",
      description:
        "Minimize operational risks and rework costs with structured processes",
      color: "orange",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Ensure Compliance",
      description:
        "Maintain regulatory compliance and comprehensive documentation control",
      color: "blue",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Maintain Consistency",
      description: "Ensure consistency across production and supply chains",
      color: "orange",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Change Identification",
      description:
        "Identify and document engineering changes from various sources",
    },
    {
      step: "02",
      title: "Impact Analysis",
      description: "Analyze the impact of changes across all affected systems",
    },
    {
      step: "03",
      title: "Review & Approval",
      description: "Systematic review and approval by relevant stakeholders",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Controlled implementation with proper communication",
    },
    {
      step: "05",
      title: "Verification",
      description: "Post-change verification to ensure successful completion",
    },
  ];

  const features = [
    "Systematic documentation and tracking",
    "Cross-functional stakeholder collaboration",
    "Robust change tracking systems",
    "Full traceability of product revisions",
    "Comprehensive impact analysis",
    "Regulatory compliance support",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Engineering Change Management
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A structured process to handle modifications in product designs,
              specifications, and manufacturing processes throughout the product
              lifecycle
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our ECM Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every change is systematically documented, reviewed, approved, and
              communicated across all stakeholders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              How We Help Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Effective Engineering Change Management delivers measurable
              benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${
                  benefit.color === "blue"
                    ? "bg-blue-50 border-2 border-blue-100"
                    : "bg-orange-50 border-2 border-orange-100"
                }`}
              >
                <div
                  className={`${
                    benefit.color === "blue"
                      ? "text-blue-600"
                      : "text-orange-500"
                  } mb-4`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Comprehensive ECM Support
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide complete support from change identification and
                impact analysis to implementation and post-change verification,
                ensuring smooth transitions and reliable outcomes.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
                <ClipboardList className="w-24 h-24 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">
                  Stakeholder Collaboration
                </h3>
                <p className="text-gray-600 mb-6">
                  Engineering, procurement, manufacturing, and quality teams
                  work together seamlessly through our integrated ECM platform.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Change Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Minimize disruptions, avoid errors, and maintain full traceability
            with our robust ECM solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/solutions/buvi">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border-2 border-orange-400">
                View Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECMPage;
