import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      user_email: email,
      user_company: company,
      subject: subject,
      message: message,
      to_name: "Amit Kumar",
    };

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    console.log("publicKey", publicKey);
    emailjs
      .send(serviceid, templateid, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          // Clear all input fields
          setName("");
          setEmail("");
          setCompany("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div
        id="contact"
        className="relative container mx-auto lg:px-6 px-3  lg:py-5 py-2  text-center"
      >
        {/* Header Section */}
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md border border-slate-600/30 shadow-2xl">
          <p className="font-semibold text-slate-100 text-sm">Get In Touch</p>
          <h1 className="font-bold text-slate-100 text-3xl">
            Let's Work Together
          </h1>
          <h2 className="text-gray-300 text-xl mb-5">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's discuss
            <br />
            how we can bring your ideas to life.
          </h2>

          {/* Main Grid Section */}
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Left: Form */}
            <div className="md:col-span-2 rounded-xl p-6 shadow-lg bg-slate-600 border border-slate-600/30">
              <h2 className="text-xl font-semibold mb-2 text-slate-100">
                Send a Message
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-slate-100"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 rounded"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border p-2 rounded"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company"
                    className="border p-2 rounded"
                    name="user_company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border p-2 rounded"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <textarea
                  type="text"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                  className="border p-2 rounded w-full h-32 resize-none"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-2 rounded-xl  cursor-pointer"
                >
                  <LuSparkles />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-600 border border-slate-600/30 p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-slate-100">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p className="flex items-center gap-2">
                    <MdEmail /> eramitofficial25@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MdPhone /> +91 6206116484
                  </p>
                  <p className="flex items-center gap-2">
                    <MdLocationOn /> Patna, Bihar
                  </p>
                  <p className="flex items-center gap-2">
                    <MdAccessTime /> Response Time: Within 24 hours
                  </p>
                </div>
              </div>

              <div className="bg-slate-600 border border-slate-600/30 p-4 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-slate-100">
                  Connect With Me
                </h3>
                <div className="flex flex-col gap-2 text-gray-100 ">
                  <a
                    href="https://github.com/amitkr04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border p-2 rounded bg-slate-950 hover:bg-slate-900"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amit-kumar-b43130216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border p-2 rounded bg-[#4285F4] hover:bg-[#4285F4]/90 "
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://x.com/Amitkum73951900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border p-2 rounded bg-[#1da1f2] hover:bg-[#1da1f2]/90 "
                  >
                    <FaTwitter /> Twitter
                  </a>
                </div>
              </div>

              <div className="bg-slate-600 border border-slate-600/30 text-green-500 p-3 rounded-xl text-center font-medium">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                ✅ Available for Projects <br />
                <span className="text-sm font-normal">
                  Currently accepting new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
