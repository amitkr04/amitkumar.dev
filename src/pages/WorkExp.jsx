import React from "react";
import { FaReact } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <>
      <div
        id="experience"
        className="relative container mx-auto lg:px-6 px-3 lg:py-5 py-2  text-center"
      >
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-3xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-2">
            Work Experience
          </h1>
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(45, 58, 78)", color: "#CBD5E1" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(45, 58, 78)" }}
              date="Feb 2024 - Mar 2024"
              iconStyle={{ background: "#2D3A4E", color: "#fff" }}
              icon={<MdCorporateFare />}
            >
              <h3 className="vertical-timeline-element-title lg:text-2xl text-base text-start">
                MERN Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle lg:font-semibold text-sm text-start">
                WebStack Academy
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(45, 58, 78)", color: "#CBD5E1" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(45, 58, 78)" }}
              date="May 2025 - Present"
              iconStyle={{ background: "#2D3A4E", color: "#fff" }}
              icon={<MdCorporateFare />}
            >
              <h3 className="vertical-timeline-element-title g:text-2xl text-base text-start">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle lg:font-semibold text-sm text-start">
                Walsis eConnect India Pvt Limited
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
