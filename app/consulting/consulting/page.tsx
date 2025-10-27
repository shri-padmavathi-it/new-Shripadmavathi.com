"use client";

import React from "react";
import {
  ChevronRight,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Eye,
  Puzzle,
  Award,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

const ConsultingPage: React.FC = () => {
  const keyServices = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description:
        "Collaborate with senior executives to develop comprehensive strategies that align with your organizational goals and market dynamics.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organizational Excellence",
      description:
        "Enhance organizational effectiveness through tailored solutions that optimize processes, people, and performance.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Consulting",
      description:
        "Apply deep industry experience to identify breakthrough opportunities and implement sustainable innovation frameworks.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Transformation",
      description:
        "Guide complex transformations with proven methodologies that make the complex seem simple and sustainable.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Industry Analysis",
      description:
        "Leverage our varied experience across industries to provide unique insights and market intelligence for informed decision-making.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Solution Co-Design",
      description:
        "Work collaboratively with your teams to design and implement solutions that are perfectly tailored to your specific challenges.",
      color: "bg-blue-50 border-blue-200",
    },
  ];

  const consultingBenefits = [
    {
      icon: <Award className="w-6 h-6 text-orange-600" />,
      title: "Deep Industry Expertise",
      description:
        "Benefit from our senior consultants' lived experience across diverse industries and complex challenges",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Rapid Response Solutions",
      description:
        "Highly responsive professionals who quickly collaborate and deliver actionable solutions",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Sustainable Outcomes",
      description:
        "Focus on developing long-term sustainable business solutions rather than quick fixes",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Collaborative Approach",
      description:
        "Work together with your teams to ensure knowledge transfer and organizational capability building",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Tailored Solutions",
      description:
        "No predetermined answers - every solution is uniquely designed for your organization's specific needs",
    },
  ];

  const approachSteps = [
    {
      title: "Input Study",
      description:
        "Comprehensive analysis of your current situation, challenges, and organizational context to understand the unique landscape.",
      position: "top",
    },
    {
      title: "Individual Solution",
      description:
        "Develop customized strategies and solutions based on your specific requirements and industry dynamics.",
      position: "left",
    },
    {
      title: "Co-design",
      description:
        "Collaborative design process working closely with your teams to ensure solutions fit your organizational culture and capabilities.",
      position: "right",
    },
    {
      title: "Review",
      description:
        "Continuous evaluation and refinement to ensure solutions deliver expected outcomes and remain sustainable.",
      position: "bottom",
    },
  ];

  const handleClick = () => {
    alert("Consultation scheduling will be available soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Consulting from
              <span className="text-orange-600"> Experience</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
              As Technical consultants, we offer solutions for varying
              situations. We know every industry is unique and so we do not come
              with predetermined answers. Guided by our Senior consultants, we
              work together with you, applying our deep lived experience to
              co-design sustainable solutions that are tailored to your
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative methodology that ensures sustainable solutions
              tailored to your unique organizational needs
            </p>
          </div>

          {/* Approach Diagram */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div
              className="relative flex justify-center items-center"
              style={{ height: "500px" }}
            >
              {/* Center Circle */}
              <div className="absolute bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-full md:w-40 md:h-40 w-32 h-32 flex items-center justify-center z-20 shadow-lg">
                <div className="text-center">
                  <div className="font-bold text-lg">Our</div>
                  <div className="font-bold text-lg">Approach</div>
                </div>
              </div>

              {/* Top Circle - Input Study */}
              <div
                className="absolute bg-white border-4 border-gray-800 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10"
                style={{
                  top: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="text-center text-sm font-semibold text-gray-800 px-2">
                  Input Study
                </div>
              </div>

              {/* Left Circle - Individual Solution */}
              <div
                className="absolute bg-white border-4 border-gray-800 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10"
                style={{
                  left: "0px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="text-center text-xs font-semibold text-gray-800 px-2 leading-tight">
                  Individual
                  <br />
                  Solution
                </div>
              </div>

              {/* Right Circle - Co-design */}
              <div
                className="absolute bg-white border-4 border-gray-800 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10"
                style={{
                  right: "0px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="text-center text-sm font-semibold text-gray-800 px-2">
                  Co-design
                </div>
              </div>

              {/* Bottom Circle - Review */}
              <div
                className="absolute bg-white border-4 border-gray-800 rounded-full w-32 h-32 flex items-center justify-center shadow-lg z-10"
                style={{
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="text-center text-sm font-semibold text-gray-800 px-2">
                  Review
                </div>
              </div>

              {/* Connecting Lines */}
              {/* Top line */}
              <div
                className="absolute bg-gray-400 z-0"
                style={{
                  top: "64px",
                  left: "50%",
                  width: "3px",
                  height: "116px",
                  transform: "translateX(-50%)",
                }}
              ></div>

              {/* Bottom line */}
              <div
                className="absolute bg-gray-400 z-0"
                style={{
                  bottom: "64px",
                  left: "50%",
                  width: "3px",
                  height: "116px",
                  transform: "translateX(-50%)",
                }}
              ></div>

              {/* Left line */}
              <div
                className="absolute bg-gray-400 z-0"
                style={{
                  left: "64px",
                  top: "50%",
                  height: "3px",
                  width: "116px",
                  transform: "translateY(-50%)",
                }}
              ></div>

              {/* Right line */}
              <div
                className="absolute bg-gray-400 z-0"
                style={{
                  right: "64px",
                  top: "50%",
                  height: "3px",
                  width: "116px",
                  transform: "translateY(-50%)",
                }}
              ></div>

              {/* Diagonal connecting lines for better visual flow */}
              <div
                className="absolute bg-gray-300 z-0"
                style={{
                  top: "25%",
                  left: "25%",
                  width: "2px",
                  height: "100px",
                  transform: "rotate(45deg)",
                  transformOrigin: "center",
                }}
              ></div>

              <div
                className="absolute bg-gray-300 z-0"
                style={{
                  top: "25%",
                  right: "25%",
                  width: "2px",
                  height: "100px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "center",
                }}
              ></div>

              <div
                className="absolute bg-gray-300 z-0"
                style={{
                  bottom: "25%",
                  left: "25%",
                  width: "2px",
                  height: "100px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "center",
                }}
              ></div>

              <div
                className="absolute bg-gray-300 z-0"
                style={{
                  bottom: "25%",
                  right: "25%",
                  width: "2px",
                  height: "100px",
                  transform: "rotate(45deg)",
                  transformOrigin: "center",
                }}
              ></div>
            </div>
          </div>

          {/* Approach Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-orange-50 border-orange-200"
                    : "bg-blue-50 border-blue-200"
                } p-6 rounded-xl border-2 hover:shadow-lg transition-shadow`}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions that bring your strategy to
              life through collaborative expertise and sustainable
              implementation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className={`${service.color} p-6 rounded-xl border-2 hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                  } mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">
                Why Choose Our Consulting Approach?
              </h2>
              <p className="text-gray-700 mb-4">
                In collaboration with senior executives to take a holistic view,
                we use our expertise to quickly collaborate and respond with
                solutions to enhance the effectiveness of your organization and
                bring your strategy to life.
              </p>
              <p className="text-gray-700 mb-4">
                We are highly responsive professionals, we bring in our varied
                experience to develop sustainable business solutions to make the
                complex seem simple and sustainable.
              </p>
              <p className="text-gray-700">
                Our collaborative methodology ensures that solutions are not
                only effective but also sustainable, with full organizational
                buy-in and capability development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-700">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Benefits of Our Consulting Partnership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with consultants who
              understand that every industry is unique and every solution must
              be tailored
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingBenefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our experienced consultants work with you to co-design
            sustainable solutions tailored to your unique challenges and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Start Your Consultation
              </button>
            </Link>
            {/* <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Our Approach
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingPage;
