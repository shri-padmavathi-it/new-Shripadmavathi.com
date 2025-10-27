"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear messages when user starts typing
    if (submitMessage) setSubmitMessage("");
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(
          data.message || "Thank you! Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Contact Us Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider text-white">
            Contact <span className="text-gray-100">Us</span>
          </h1>
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
            <div className="h-full w-full relative">
              <div className="absolute right-0 w-4 h-full bg-white/10 mx-1"></div>
              <div className="absolute right-8 w-4 h-full bg-white/10 mx-1"></div>
              <div className="absolute right-16 w-4 h-full bg-white/10 mx-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 border-2 border-gray-300 p-3 rounded-md">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-md">
                  <Building className="text-blue-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">
                  Shri Padmavathi Consultants
                </h2>
                <p className="text-gray-600 text-lg mt-1">
                  Raja Rajeshwari Nagar, Bangalore 560098
                </p>
                <Link
                  href="https://www.shripadmavathi.com"
                  className="text-blue-600 hover:text-blue-800 flex items-center mt-1"
                >
                  www.shripadmavathi.com
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 border-2 border-gray-300 p-3 rounded-md">
                <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded-md">
                  <Phone className="text-orange-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">PHONE</h2>
                <p className="text-gray-600 text-lg mt-1">+91 9972030641</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 border-2 border-gray-300 p-3 rounded-md">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-md">
                  <Mail className="text-blue-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-black">EMAIL</h2>
                <Link
                  href="mailto:cantact@shripadmavathi.com"
                  className="text-blue-600 hover:text-blue-800 flex items-center mt-1"
                >
                  contact@shripadmavathi.com
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 bg-white rounded-lg shadow-xl p-6 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-6">
                Send us a message
              </h2>

              {submitMessage && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md relative">
                  <span>{submitMessage}</span>
                  <button
                    onClick={() => setSubmitMessage("")}
                    className="absolute top-1 right-2 text-green-700 hover:text-green-900 font-bold"
                  >
                    ×
                  </button>
                </div>
              )}

              {submitError && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md relative">
                  <span>{submitError}</span>
                  <button
                    onClick={() => setSubmitError("")}
                    className="absolute top-1 right-2 text-red-700 hover:text-red-900 font-bold"
                  >
                    ×
                  </button>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md bg-white border-2 border-gray-300 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md bg-white border-2 border-gray-300 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md bg-white border-2 border-gray-300 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md bg-white border-2 border-gray-300 text-black shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center gap-2 border-2 border-orange-500 hover:border-orange-600 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map and Image Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="relative h-64 w-full">
                {/* Map placeholder - in a real app you would use a map component */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5851392485214!2d77.4927!3d12.9363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fab95dac3b9%3A0x9cea13b3a8f2b5a8!2sRaja%20Rajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1681897252345!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">
                    Raja Rajeshwari Nagar, Bangalore 560098
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements similar to the image */}
            <div className="relative h-96 bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
              <div className="absolute inset-0">
                <Image
                  src="/office.jpg"
                  alt="Office workspace"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50"
                />
              </div>

              {/* Overlay hexagon shapes similar to the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-orange-200/50 rotate-45 transform -translate-y-1/2"></div>
                  <div className="absolute bottom-4 left-1/4 w-40 h-40 bg-blue-200/50 rotate-45 transform translate-y-1/2"></div>
                  <div className="absolute right-1/3 bottom-1/3 w-48 h-48 border-4 border-gray-300 rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-black mb-4">
                Office Hours
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-black">
                    9:30 AM - 6:30 PM
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday & Sunday</span>
                  <span className="font-medium text-black">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
