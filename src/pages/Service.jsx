import React from "react";
import { services, testimonials } from "../utils/services";
import { LuSparkles } from "react-icons/lu";
import { Star } from "lucide-react";
import Faq from "./Faq";

const Service = () => {
  return (
    <>
      <div className="relative container mx-auto lg:px-6 px-3  lg:py-5 py-2  text-center">
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-3xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-2">
            Our Services
          </h1>
          <p className="lg:text-xl text-base text-gray-200   mx-auto leading-relaxed mb-5">
            We offer comprehensive digital solutions to help your business grow
            and succeed <br /> in the digital landscape. From design to
            development, we have got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-slate-600  border border-slate-600/30 rounded-md shadow-lg p-4   transition-all duration-300 space-y-2 "
              >
                <service.icon className="text-white w-10 h-10 p-3 rounded-md  text-2xl  bg-gradient-to-r from-fuchsia-500 to-cyan-500 " />

                <h3 className="text-xl font-bold text-gray-100   transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed ">
                  {service.shortDescription}
                </p>
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl text-sm px-5 py-2.5 text-center     cursor-pointer">
                  <LuSparkles />
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-slate-600 border border-slate-600/30 rounded-md shadow-xl px-8 py-10 lg:mt-20 mt-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let us discuss how we can help bring your vision to life. Get in
              touch with us today for a free consultation and project quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                Get Free Quote
              </button>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500    hover:text-white       cursor-pointer">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white   rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Schedule Consultation
                </span>
              </button>
            </div>
          </div>

          {/* What People Say */}
          <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-800/20 rounded-md border border-slate-600/30 shadow-2xl lg:mt-20 mt-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 lg:mb-4 mb-2">
              What People{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Say
              </span>
            </h2>
            <p className="text-slate-100   max-w-2xl mx-auto lg:mb-8 mb-2">
              Here's what colleagues and clients have to say about working with
              me.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} animation="fadeInUp">
                  <div className="  shadow-xl bg-slate-600  rounded-md      h-full ">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-slate-100  text-sm leading-relaxed mb-4 flex-grow  text-justify">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="border-t border-slate-200 text-start  pt-4">
                        <p className="font-semibold text-slate-950   text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-100   text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* project sucess rate */}
          <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-800/20 rounded-md border border-slate-600/30 shadow-2xl lg:mt-20 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
              <div className="bg-slate-900/50 p-10 py-20 rounded-md cursor-pointer">
                <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                  1+
                </span>
                <p className="text-slate-200 text-sm font-semibold">
                  Projects Delivered
                </p>{" "}
              </div>
              <div className="bg-slate-900/50 p-10 py-20 rounded-md cursor-pointer">
                {" "}
                <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold">
                  2+
                </span>
                <p className="text-slate-200 text-sm font-semibold">
                  Years Experience
                </p>{" "}
              </div>
              <div className="bg-slate-900/50 p-10  py-20 rounded-md cursor-pointer">
                {" "}
                <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 font-bold">
                  5+
                </span>
                <p className="text-slate-200 text-sm font-semibold">
                  Happy Clients
                </p>{" "}
              </div>
              <div className="bg-slate-900/50 p-10 py-20 rounded-md cursor-pointer">
                {" "}
                <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 font-bold">
                  100%
                </span>
                <p className="text-slate-200 text-sm font-semibold">
                  Success Rate
                </p>{" "}
              </div>
            </div>
          </div>

          {/* FA Questions */}
          <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-800/20 rounded-md border border-slate-600/30 shadow-2xl lg:mt-20 mt-6">
            <Faq />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
