"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./hexagon-style.css";
import {
  Award,
  Users,
  Briefcase,
  Cpu,
  Package,
  Building,
  Clock,
  Code,
  PenTool,
} from "lucide-react";

const Experience = () => {
  const stats = [
    {
      value: "23",
      label: "Years of Journey",
      color: "#f97316", // Orange for alternating cards
      icon: Clock,
      description: "Delivering excellence since 2002",
    },
    {
      value: "550+",
      label: "People",
      color: "#3b82f6", // Blue for alternating cards
      icon: Users,
      description: "Global talent driving innovation",
    },
    {
      value: "6+",
      label: "Industry Sectors",
      color: "#f97316", // Orange for alternating cards
      icon: Briefcase,
      description: "Cross-industry expertise",
    },
    {
      value: "25+",
      label: "Application Implementations",
      color: "#3b82f6", // Blue for alternating cards
      icon: Code,
      description: "Enterprise-grade solutions",
    },
    {
      value: "10+",
      label: "Packaged Solutions",
      color: "#f97316", // Orange for alternating cards
      icon: Package,
      description: "Ready-to-deploy industry solutions",
    },
    {
      value: "50+",
      label: "Customers Served",
      color: "#3b82f6", // Blue for alternating cards
      icon: Building,
      description: "Trusted by industry leaders",
    },
    {
      value: "10k",
      label: "BOT",
      color: "#f97316", // Orange for alternating cards
      icon: Cpu,
      description: "Automation at scale",
    },
    {
      value: "15+",
      label: "Buvi Implementations",
      color: "#3b82f6", // Blue for alternating cards
      icon: Award,
      description: "Specialized platform deployments",
    },
    {
      value: "40+",
      label: "Design Tools",
      color: "#f97316", // Orange for alternating cards
      icon: PenTool,
      description: "Custom engineering solutions",
    },
  ];

  // Function to manage hexagon hover effects
  useEffect(() => {
    const hexagons = document.querySelectorAll(".hexagon-wrapper");

    hexagons.forEach((hex) => {
      hex.addEventListener("mouseenter", () => {
        hexagons.forEach((otherHex) => {
          if (otherHex !== hex) {
            otherHex.classList.add("dimmed");
          }
        });
      });

      hex.addEventListener("mouseleave", () => {
        hexagons.forEach((otherHex) => {
          otherHex.classList.remove("dimmed");
        });
      });
    });

    return () => {
      hexagons.forEach((hex) => {
        hex.removeEventListener("mouseenter", () => {});
        hex.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gray-200"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gray-300"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gray-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block pb-6">
            Our Experience By Numbers
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
            A track record of excellence across industries, technologies, and
            solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center max-w-6xl mx-auto honeycomb-layout">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="w-1/2 lg:w-1/3 p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="hexagon-wrapper group transition-all duration-300">
                <div
                  className="hexagon shadow-lg transition-all duration-300 group-hover:shadow-2xl border-2 border-gray-300 group-hover:border-gray-400"
                  style={{ backgroundColor: stat.color }}
                >
                  <div className="hexagon-content flex flex-col items-center justify-center relative">
                    <div className="absolute top-0 left-0 right-0 flex justify-center mt-12 md:ml-4 md:mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/95 text-gray-700 text-xs rounded-full md:px-6 py-1 shadow-md border border-gray-300">
                        {stat.description}
                      </span>
                    </div>

                    <stat.icon className="md:block hidden w-8 md:h-8 text-white/90 mb-2 group-hover:text-white transition-colors" />

                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>

                    <span className="text-sm md:text-base text-white/95 text-center mt-1 font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
