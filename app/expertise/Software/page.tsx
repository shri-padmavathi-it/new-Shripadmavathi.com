"use client";

import React from "react";
import {
  ArrowRight,
  Cog,
  Users,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

interface StatItem {
  number: string;
  label: string;
  description: string;
}

interface IndustryItem {
  name: string;
  description: string;
}

const ProductDevelopmentPage: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: "Digital Engineering Solutions",
      description:
        "Transform your product concepts into reality with our comprehensive digital engineering services powered by industry-leading CAD, CAM, and PLM software.",
      features: [
        "3D Product Modeling",
        "Simulation & Analysis",
        "Design Optimization",
        "Virtual Prototyping",
      ],
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      title: "Manufacturing Excellence",
      description:
        "Streamline your manufacturing processes with integrated software solutions that connect design to production seamlessly.",
      features: [
        "Process Automation",
        "Quality Control",
        "Production Planning",
        "Supply Chain Integration",
      ],
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
    {
      title: "Product Lifecycle Management",
      description:
        "Manage your entire product journey from conception to retirement with our advanced PLM solutions and expert support.",
      features: [
        "Data Management",
        "Collaboration Tools",
        "Version Control",
        "Compliance Tracking",
      ],
      bgColor: "bg-orange-500",
      textColor: "text-white",
    },
    {
      title: "Technical Support & Training",
      description:
        "Maximize your software investment with our comprehensive training programs and dedicated technical support services.",
      features: [
        "Custom Training",
        "24/7 Support",
        "Implementation Services",
        "Best Practices Consulting",
      ],
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
  ];

  const stats: StatItem[] = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across various industries",
    },
    {
      number: "25%",
      label: "Faster Time-to-Market",
      description: "Average reduction in product development cycles",
    },
    {
      number: "40%",
      label: "Cost Savings",
      description: "Typical reduction in development costs",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Deep expertise in product development solutions",
    },
  ];

  const industries: IndustryItem[] = [
    {
      name: "Automotive",
      description:
        "Advanced vehicle design and manufacturing solutions for modern mobility",
    },
    {
      name: "Aerospace",
      description:
        "Precision engineering for aircraft and spacecraft components",
    },
    {
      name: "Industrial Equipment",
      description: "Heavy machinery and industrial automation solutions",
    },
    {
      name: "Consumer Products",
      description: "Fast-moving consumer goods and electronics design",
    },
    {
      name: "Medical",
      description: "Medical devices and healthcare tech",
    },
  ];

  const softwarePartners = [
    "Autodesk Inventor",
    "Fusion 360",
    "AutoCAD",
    "SolidWorks",
    "Siemens NX",
    "CATIA",
    "PTC Creo",
    "Teamcenter PLM",
    "Tecnomatix",
    "ANSYS",
  ];

  const handleClick = () => {
    alert("Brochure download will be available soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering Excellence Through
              <span className="text-orange-400"> Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We empower organizations to revolutionize their products through
              our specialized service offerings. We help identify and implement
              cutting-edge product development software solutions to
              manufacture, service, and deliver superior products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-black mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transforming Manufacturing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              For the manufacturing industry focused on engineering
              customer-centric, connected products, we deliver solutions with
              minimum time to market and reduced product development costs.
              Organizations must leverage appropriate software across the entire
              product engineering and manufacturing value chain to address
              modern challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Target className="h-6 w-6 text-orange-500 mr-3" />
                Our Approach
              </h3>
              <p className="text-gray-600 mb-6">
                We have partnered with leading product software providers for
                value-added reselling of software across the complete product
                lifecycle. This includes software products that enable digital
                engineering and digital manufacturing, helping our customers
                develop a software-enabled strategy to improve processes for
                conceptualizing, designing, developing, and managing profitable
                products.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Integrated CAD/CAM/PLM solutions
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Digital engineering transformation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    Manufacturing process optimization
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                Key Benefits
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <Zap className="h-4 w-4 text-orange-500 mr-3" />
                  Accelerated time-to-market
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 text-orange-500 mr-3" />
                  Enhanced product quality
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 text-orange-500 mr-3" />
                  Improved collaboration
                </li>
                <li className="flex items-center">
                  <Clock className="h-4 w-4 text-orange-500 mr-3" />
                  Reduced development costs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a product design and manufacturing value-added service
              provider, we enhance customer experience with best-in-class
              technical support and training, tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`${service.bgColor} ${service.textColor} p-6`}>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="opacity-90">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Technology Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry-leading software providers to deliver
              comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {softwarePartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-semibold text-gray-700">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We have a proven track record of driving results for both small
              and large enterprises across multiple industries, delivering
              greater efficiency, cost savings, and faster time to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Product Development Expertise
            </h2>
            <p className="text-lg mb-8 max-w-4xl mx-auto">
              From product development utilizing CAD, CAM, product lifecycle
              management (PLM) and simulation, to manufacturing process
              management, our deep knowledge and expertise help you achieve
              greater efficiency, cost savings and accelerated time to market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">CAD/CAM</div>
                <div className="text-orange-100">
                  Computer-Aided Design & Manufacturing
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">PLM</div>
                <div className="text-orange-100">
                  Product Lifecycle Management
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Simulation</div>
                <div className="text-orange-100">
                  Advanced Engineering Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Product Development?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can accelerate your time-to-market
            and reduce development costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDevelopmentPage;
