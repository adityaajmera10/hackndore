import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Turret_Road } from "next/font/google";

export const turret = Turret_Road({
    weight: "800",
    subsets: ["latin"],
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('/api/sendmail', formData);
      toast.success('Email sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        message: ''
      });
    } catch (err) {
      toast.error('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="p-4 sm:p-6 rounded-lg shadow-lg md:w-full w-11/12 max-w-[600px] mx-auto bg-white/10 backdrop-blur-sm"
    >
      <Toaster />
      <h1 
        className={`text-2xl text-center md:text-5xl font-bold ${turret.className} text-primary-heading`}
      >
        Countdown
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="flex-1 p-2 border rounded w-full"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="flex-1 p-2 border rounded w-full"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="flex w-full space-x-2">
            <input
              type="tel"
              name="mobileNumber"
              className="flex-1 p-2 border rounded"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Explain in under 100 words"
          className="w-full p-2 border rounded h-24 resize-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        <div className="space-y-2 text-lg sm:text-base ">
          <h3 className="font-semibold">Contact us at</h3>
          <p>📧 hackndore@gmail.com</p>
          <p>📞 Sambhav Bhandari <br className="sm:hidden" />(+91) 90399 69100</p>
          <p>📞 Himanshu Goyal <br className="sm:hidden" />(+91) 7828433422</p>
          <p>📞 Bharat Udawat <br className="sm:hidden" />(+91) 8989549300</p>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
