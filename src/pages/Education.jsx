import React from "react";
import { MdSchool } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div
        id="education"
        className="relative container mx-auto lg:px-6 px-3 lg:py-5 py-2 text-center"
      >
        <div className="lg:px-6 px-3 py-6 mx-auto backdrop-blur-xl bg-slate-500 rounded-md  border border-slate-600/30 shadow-2xl">
          <h1 className="font-bold text-slate-100 cursive-text lg:text-5xl text-2xl border-b-1 border-b-gray-100 inline-block lg:mb-5 mb-1">
            Education
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(45, 58, 78)", color: "#CBD5E1" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(45, 58, 78)",
              }}
              date="2016 - 2017"
              iconStyle={{ background: "#2D3A4E", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title lg:text-2xl text-base text-start">
                Secondary
              </h3>
              <h4 className="vertical-timeline-element-subtitle lg:font-semibold text-sm text-start">
                High School Babura, ARA
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(45, 58, 78)", color: "#CBD5E1" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(45, 58, 78)" }}
              date="2017 - 2019"
              iconStyle={{ background: "#2D3A4E", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title lg:text-2xl text-base text-start">
                Senior Secondary
              </h3>
              <h4 className="vertical-timeline-element-subtitle lg:font-semibold text-sm text-start">
                Maharaja college, Ara
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(45, 58, 78)", color: "#CBD5E1" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(45, 58, 78)" }}
              date="2020 - 2024"
              iconStyle={{ background: "#2D3A4E", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title lg:text-2xl text-base text-start">
                B.Tech(IT)
              </h3>
              <h4 className="vertical-timeline-element-subtitle lg:font-semibold text-sm text-start">
                Narula Institute Of Technology, KOLKATA
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
