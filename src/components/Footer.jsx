import React from "react";

// Imported Company-Brand
import company from "../assets/mooi.jpg";

const Footer = () => {
  return (
    <div className="bg-blueColor w-full h-[300px] rounded-[10px]">
      <div className="grid grid-cols-4 items-center text-white">
        <div>
          <img
            src={company}
            alt="Company Brand"
            className="w-[45%] relative top-[20px] left-10 mt-8"
          />
          <ul className="mt-[50px] relative left-7 flex flex-row">
            <li className="mx-4 mt-5">Impressum</li>
            <li className="mt-5">Datenschutz</li>
          </ul>
        </div>

        <div>
          <h1 className=" relative font-semibold text-[25px] top-[25px] left-7">
            Support
          </h1>

          <ul className="mt-[50px] relative left-7 flex flex-col">
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h1 className=" relative font-semibold text-[25px] top-[25px] left-7">
            Contact
          </h1>

          <ul className="mt-[50px] relative left-7 flex flex-col">
            <li>Email</li>
            <li>Telefon</li>
            <li>Chat-Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
