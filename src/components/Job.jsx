import React from "react";

// Imported icons
import { BiTimeFive } from "react-icons/bi";

// Imported Images
import logo1 from "../assets/slack.jpg";
import logo2 from "../assets/mooi.jpg";
import logo3 from "../assets/flow.jpg";
import logo4 from "../assets/veritas.jpg";
import logo5 from "../assets/bmw.jpg";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.",
    company: "Slack inc.",
  },
  {
    id: 2,
    image: logo2,
    title: "Web Developer",
    time: "5 Days",
    location: "New York",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.",
    company: "Mooi inc.",
  },
  {
    id: 3,
    image: logo3,
    title: "Web Developer",
    time: "20 Days",
    location: "Brooklyn",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.",
    company: "Flower inc.",
  },
  {
    id: 4,
    image: logo4,
    title: "Software Developer",
    time: "Now",
    location: "Miami",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.",
    company: "Varitas Aequitas",
  },
  {
    id: 5,
    image: logo5,
    title: "Software Developer",
    time: "Now",
    location: "Germany",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.",
    company: "BMW Group",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover-shadow-ls"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>

                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className=" border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
