"use client";
import contact from "@/../public/contact.svg";
import { turret } from "@/components/Countdown";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("Submitting...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("Submission successful!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Submission failed. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="text-white h-screen">
      <section id="contact" className="flex flex-col items-center w-5/6 mx-auto gap-10 pb-8">
        <h2 className={`${turret.className} text-4xl mt-24 sm:mt-4 font-blue-primary`}>
          Contact Us
        </h2>
          <div className="flex flex-col-reverse md:flex-row py-5 w-full items-center justify-evenly bg-rich-blue-contactBg md:px-24 px-6">
          <div className="flex flex-col-reverse md:flex-row py-5 w-full items-center justify-evenly bg-rich-blue-contactBg md:px-24 px-6">
            <Image src={contact} height={200} className="" alt="" />
            
            <form onSubmit={onSubmit} className="flex flex-col  text-[#eeeeee] gap-1 items-start">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-lg md:w-[288px] px-5 mb-2 py-2 bg-[#343333]"
                type="text"
                id="name"
                placeholder="Rachel Joe"
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                value={formData.name}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                className="rounded-lg px-5 md:w-[288px] mb-2 py-2 bg-[#343333]"
                type="email"
                id="email"
                placeholder="Rachel@domain.com"
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                value={formData.email}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="rounded-lg w-full px-5 mb-2 py-2 resize-none bg-[#343333]"
                id="message"
                placeholder="Type your query here"
                rows={3}
                cols={18}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                value={formData.message}
                required
              />
              <button type="submit" className="bg-[#6088EE] py-2 my-2 px-10 flex gap-2">
                Send Message
              </button>
              {submitStatus && <p className="text-sm mt-2">{submitStatus}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;