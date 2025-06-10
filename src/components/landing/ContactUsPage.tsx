"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { Phone, Mail, User, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

const updateGoogleMapsApiKey = (key: string) => {
  localStorage.setItem("GOOGLE_MAPS_API_KEY", key);
  window.location.reload();
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <div className="absolute inset-0 left-0 right-0 top-[-165px] ">
          <Image src={"/icons/contact-grid.svg"} className="w-[1400px] m-auto" alt="PeakClass" width={1000} height={1000} />
        </div>
        {/* World Map Section */}
        <section className="relative mb-16 container mx-auto  py-8">
          <div className="mb-8">
            <h1 className="font-montserrat font-bold text-[55px] leading-[75px] tracking-[0] text-center">
              Reach out to us from{" "}
              <span className="text-purple-700">anywhere</span>
            </h1>
            <h1 className="font-montserrat font-bold text-[55px] leading-[75px] tracking-[0] text-center">
              today
            </h1>
          </div>
          <WorldMap />
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full bg-[#FCF4FF] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How can we help you?
              </h2>
              {/* <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2> */}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p>Fill out the form and we will be in touch</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      className="pl-10"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number
                  </label>
                  <div className="flex">
                    <Select defaultValue="US">
                      <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="US" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="US">US</SelectItem>
                        <SelectItem value="NIG">NIG</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="CA">CA</SelectItem>
                        <SelectItem value="AU">AU</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="flex-1 ml-2"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <Input
                      id="country"
                      name="country"
                      placeholder="United States"
                      className="pl-10"
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare size={18} className="text-gray-400" />
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={4}
                      className="pl-10 w-full"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-[143px] bg-purple-800 hover:bg-purple-900 text-white rounded-full py-2"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto py-8">
          <div className="border border-purple-200 rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center">
              <Phone className="text-purple-700 mr-4" />
              <div>
                <h3 className="font-medium text-purple-800">Phone number</h3>
                <p className="text-gray-700">+234 9027890345</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard("+234 9027890345", "Phone number")}
              className="text-purple-700 border-purple-300"
            >
              Copy
            </Button>
          </div>

          <div className="border border-purple-200 rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center">
              <Mail className="text-purple-700 mr-4" />
              <div>
                <h3 className="font-medium text-purple-800">Email</h3>
                <p className="text-gray-700">peakclass@gmail.com</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard("peakclass@gmail.com", "Email")}
              className="text-purple-700 border-purple-300"
            >
              Copy
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUsPage;
