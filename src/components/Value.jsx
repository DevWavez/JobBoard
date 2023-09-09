import React from "react";

// Imported Images
import sample from "../assets/slack.jpg";
import sample2 from "../assets/mooi.jpg";
import sample3 from "../assets/flow.jpg";
import sample4 from "../assets/veritas.jpg";
import sample5 from "../assets/bmw.jpg";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px]  pb-[3rem] font-bold w-[400px] block">
        The Value that holds us true and to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              slack inc.
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample2} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              .Mooi
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample3} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Flower GmbH
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            the Beautiful things on the world are flowers
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample4} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Veritas Aequtias
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Drive wonderful Cars, and design wonderful Pages
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample5} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              BMW Group
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            New Cars, need new Internet presentations
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] shadow-lg shadow-greyIsh-400/700">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#eeedf7] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={sample5} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              BMW Group
            </span>
          </div>

          <p className="text-[25px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            New Car Arrived Yesterday, if you see the Car take a Photo for us
            and tell us what u Think
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
