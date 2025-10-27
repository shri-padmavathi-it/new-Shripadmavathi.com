"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Star, Users, Award, ThumbsUp } from "lucide-react";
import Link from "next/link";

// Define customer groups
const customerGroups = [
  {
    id: 1,
    logos: [
      { name: "Ace Micromatic", path: "/partners/ace.png" },
      { name: "DISA", path: "/partners/disa.png" },
      { name: "TATA", path: "/partners/tata.png" },
    ],
    services: "Engineering Design, Manufacturing, IT Support",
  },
  {
    id: 2,
    logos: [
      { name: "VST", path: "/partners/vst.png" },
      { name: "Pricol", path: "/partners/prcol.png" },
      { name: "Finisar", path: "/partners/finisar.png" },
      { name: "UST Global", path: "/partners/ust.png" },
    ],
    services: "Engineering Design, Manufacturing, IT Support",
  },
  {
    id: 3,
    logos: [
      { name: "Ather", path: "/partners/ather.png" },
      { name: "HCL", path: "/partners/id.png" },
      { name: "Wolf", path: "/partners/wolf.png" },
      { name: "Beshara Group", path: "/partners/beshara.png" },
    ],
    services: "SAP, Engineering Design, Manufacturing, IT Support",
  },
  {
    id: 4,
    logos: [
      { name: "IAMPL", path: "/partners/iampl.png" },
      { name: "Schivo", path: "/partners/schnuc.png" },
      { name: "BEML", path: "/partners/beml.png" },
      { name: "IdeaForge", path: "/partners/idea.png" },
    ],
    services: "Engineering Design, Manufacturing, IT Support",
  },
  {
    id: 5,
    logos: [
      { name: "Mutha", path: "/partners/mutha.png" },
      { name: "Triton", path: "/partners/triton.png" },
      { name: "Stryker", path: "/partners/stryker.png" },
      { name: "Hitachi", path: "/partners/Hitachi.png" },
    ],
    services: "Automation, productivity improvement",
  },
];

// Featured customers for the showcase section
const featuredCustomers = [
  {
    name: "ABB",
    path: "/partners/Abb.png",
    description:
      "Partnering with ABB for 15+ years, providing expert Electrical Engineers to support automation projects with efficiency and precision.",
    industry: "Automation Company",
  },
  {
    name: "Stryker",
    path: "/partners/stryker.png",
    description:
      "Manufacturing support for Medical device components and Automation solutions.",
    industry: "Healthcare & Medical Devices",
  },
  {
    name: "TE Connectivity",
    path: "/partners/Te.jpg",
    description:
      "Engineering & Manufacturing support for Medical, Automotive, Aerospace, Defence and Marine domains",
    industry: "Healthcare & Medical Devices",
  },
];

// Testimonials data
const testimonials = [
  {
    text: "Their engineering team delivered exceptional results that exceeded our expectations. The attention to detail and commitment to quality has made them a trusted partner for our most critical projects.",
    author: "John Smith",
    position: "CTO, TATA Technologies",
  },
  {
    text: "We've collaborated on multiple projects spanning different technologies. Their team's versatility and problem-solving capabilities have significantly improved our product development cycles.",
    author: "Priya Mehta",
    position: "VP Engineering, Ather Energy",
  },
  {
    text: "From concept to execution, they've proven to be an invaluable asset to our R&D team. The precision required in medical device manufacturing is extraordinary, and they consistently deliver.",
    author: "Robert Chen",
    position: "Director of Operations, Stryker",
  },
];

// Stats data
const stats = [
  { value: "250+", label: "Projects Completed", icon: Award },
  { value: "93%", label: "Client Retention", icon: ThumbsUp },
  { value: "45+", label: "Enterprise Clients", icon: Users },
];

export default function OurCustomers() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="bg-white py-20 px-4 relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center tracking-tight mb-6">
              Our <span className="text-blue-600">Customers</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-700 text-center text-lg max-w-3xl mx-auto">
              We're proud to partner with industry leaders across multiple
              sectors, providing innovative solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-10 px-4 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "bg-orange-500" : "bg-blue-600"
                  } p-3 rounded-full mb-4`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-1 text-black">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Customers Showcase */}
      <div className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Featured Partnerships
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredCustomers.map((customer, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${
                  index % 2 === 0
                    ? "border-orange-200 hover:border-orange-300"
                    : "border-blue-200 hover:border-blue-300"
                }`}
                variants={itemVariants}
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-8 group-hover:bg-gray-100 transition-colors">
                  <div className="relative h-full w-full">
                    <Image
                      src={customer.path || "/placeholder.svg"}
                      alt={customer.name}
                      fill
                      quality={100}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                      index % 2 === 0 ? "text-orange-600" : "text-blue-600"
                    }`}
                  >
                    {customer.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {customer.name}
                  </h3>
                  <p className="text-gray-700">{customer.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Customer List */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Valued Clients
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          {customerGroups.map((group) => (
            <motion.div
              key={group.id}
              className={`mb-10 bg-white rounded-lg shadow-md overflow-hidden border-2 ${
                group.id % 2 === 0 ? "border-blue-200" : "border-orange-200"
              } hover:shadow-lg transition-all`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: group.id * 0.1 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-8 flex flex-wrap items-center justify-center gap-10 border-b md:border-b-0 md:border-r border-gray-200">
                  {group.logos.map((logo, logoIndex) => (
                    <motion.div
                      key={logoIndex}
                      className="w-32 h-16 relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={logo.path || "/placeholder.svg"}
                        alt={logo.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  ))}
                </div>
                <div
                  className={`md:w-1/3 p-8 flex items-center ${
                    group.id % 2 === 0 ? "bg-blue-50" : "bg-orange-50"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-medium text-black mb-3">
                      Services Provided:
                    </h3>
                    <p className="text-gray-700 mb-4">{group.services}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      {/* <div className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            What Our Customers Say
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-16"></div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-50 p-10 rounded-lg shadow-xl border border-gray-200">
              <div className="mb-8">
                <svg
                  className="h-12 w-12 text-gray-400 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-xl italic font-light leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden border border-gray-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 opacity-70"></div>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg text-black">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].position}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-gray-50 py-20 px-4 text-center border-t border-gray-200">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to become our next success story?
            </h2>
            <p className="text-gray-700 mb-10 text-lg">
              Join our growing list of satisfied customers and experience the
              difference our expertise can make for your business.
            </p>
            <Link href={"/about/contactUs"}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center gap-2 border border-orange-500 hover:border-orange-600 mx-auto">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
