"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Play,
  Users,
  Zap,
  Target,
  Globe,
  Cpu,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface ExpandableCardProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <span className="font-semibold text-black">{title}</span>
      {isExpanded ? (
        <ChevronUp className="w-5 h-5 text-blue-600" />
      ) : (
        <ChevronDown className="w-5 h-5 text-blue-600" />
      )}
    </button>
    {isExpanded && (
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-gray-700">{content}</p>
      </div>
    )}
  </div>
);

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "orange" | "blue";
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  icon,
  color,
}) => (
  <div
    className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
      color === "orange"
        ? "bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500"
        : "bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500"
    }`}
  >
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
        color === "orange" ? "bg-orange-500" : "bg-blue-500"
      }`}
    >
      <div className="text-white text-2xl">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
    <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
  </div>
);

const DigitizationTransformationPage: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );

  const handleClick = () => {
    alert("Demo video will be available soon!");
  };

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const businessChallenges = [
    {
      title: "Develop more competitive products and solutions",
      content:
        "Leverage cutting-edge technologies and data-driven insights to create innovative products that stand out in the market. Our solutions help you identify market gaps, accelerate innovation cycles, and deliver superior value propositions to your customers.",
    },
    {
      title: "Reduce product time to market",
      content:
        "Streamline your development processes with agile methodologies, automated workflows, and collaborative platforms. We help you eliminate bottlenecks, optimize resource allocation, and implement concurrent engineering practices to significantly reduce your product launch timelines.",
    },
    {
      title: "Optimize product development costs",
      content:
        "Implement cost-effective development strategies through virtual prototyping, simulation-driven design, and efficient resource management. Our solutions help you identify cost-saving opportunities while maintaining quality and innovation standards.",
    },
    {
      title: "Integrate disparate, legacy systems",
      content:
        "Seamlessly connect your existing systems with modern digital platforms through our comprehensive integration solutions. We ensure data consistency, workflow continuity, and system interoperability while preserving your existing investments.",
    },
    {
      title: "Improving prediction accuracy",
      content:
        "Harness the power of AI and machine learning to enhance your predictive capabilities. Our advanced analytics solutions help you make more accurate forecasts, reduce uncertainty, and make data-driven decisions across your entire value chain.",
    },
    {
      title: "Enable end-to-end visibility across the product lifecycle",
      content:
        "Gain complete transparency across your product lifecycle with integrated PLM solutions. Track progress, monitor performance, and optimize processes from concept to retirement with real-time insights and comprehensive reporting.",
    },
  ];

  const solutions = [
    {
      title: "Smart Manufacturing Solutions",
      description:
        "Our comprehensive digital consulting framework and smart manufacturing solutions help manufacturing companies achieve product excellence and enhanced operational efficiency across the entire product value chain.",
      icon: <Cpu />,
      color: "blue" as const,
    },
    {
      title: "Digital Transformation Solutions",
      description:
        "Our digital transformation solutions cover the key areas of digital product development, digital supply chain, digital manufacturing, and digital customer experience. It enables enterprises to connect the digital thread and become smart, intelligent, and connected enterprise for the new normal.",
      icon: <Zap />,
      color: "orange" as const,
    },
    {
      title: "Digital Customer Experience Solutions",
      description:
        "Our digital customer experience solutions enable companies to manage their entire omnichannel customer journey offering the flexibility of virtual product interaction with the convenience of buying products online, enabled through digital applications and mobile apps.",
      icon: <Users />,
      color: "blue" as const,
    },
    {
      title: "Software-Defined Vehicles (SDVs) Solutions",
      description:
        "Our software-defined vehicle offerings integrate next-gen technologies with full vehicle systems to deliver elevated customer experiences and new revenue streams for clients.",
      icon: <Target />,
      color: "orange" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Reimagining digital journeys
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90">
              We help our customers solve industry problems with our
              next-generation digital solutions. By employing the latest
              technologies, we implement best-fit solutions that deliver better
              results.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Driving Digital Transformation in Manufacturing
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Today's global digital economy is defined by continuous change
                and progress. To keep up and manage technology-driven change and
                evolving business transformation roadmaps, manufacturers need a
                partner who understands the latest innovation and how to
                implement change successfully.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We use our deep domain knowledge of product and manufacturing
                engineering processes and our partnerships with emerging
                technology providers to deliver digital transformation for our
                customers.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/about/contactUs">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </Link>
                <Link href="/about/aboutUs">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Industry 4.0 Solutions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5" />
                    Digital Manufacturing
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="w-5 h-5" />
                    Data Analytics
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    Predictive Maintenance
                  </li>
                  <li className="flex items-center gap-3">
                    <Cpu className="w-5 h-5" />
                    AI & Machine Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Business Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solve your business challenges with our Digital Enterprise
              Solutions
            </p>
          </div>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {businessChallenges.map((challenge, index) => (
              <ExpandableCard
                key={index}
                title={challenge.title}
                content={challenge.content}
                isExpanded={expandedCards[index] || false}
                onToggle={() => toggleCard(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-8 max-w-4xl mx-auto leading-relaxed">
              "This Migration project was the largest project undertaken in our
              PLM journey so far and for the first time in our history of many
              Go-Lives we had, we saw no Post Go-Live issues/escalations."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-black">
                  Leading Tier 1 Automotive Components Supplier
                </p>
                <p className="text-gray-600">Global Manufacturing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">
              We deliver future-ready digital solutions for our customers
            </p>
            <Link href="/solutions/buvi">
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto">
                View all DES Solutions <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                color={solution.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's work together to accelerate your digital revolution and
            achieve product excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contactUs">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitizationTransformationPage;
