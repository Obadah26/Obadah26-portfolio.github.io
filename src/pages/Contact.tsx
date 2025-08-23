import React from "react";
import logo from "../assets/images/logo.png";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const iconStyle: string = "text-white size-6";
  const formStyle: string =
    "bg-bgcolor2 w-2xs h-[51px] px-6 rounded-2xl placeholder:font-medium placeholder:text-white";

  return (
    <>
      <section id="contact" className="bg-bgcolor1">
        <div className="container mx-auto py-20 text-white">
          <h1 className="text-center font-bold text-4xl">
            Contact <span className="text-cyan-300">Me</span>
          </h1>
          {/* Main Row */}
          <div className="flex flex-col justify-center items-center space-y-10 md:space-y-0 md:space-x-10 md:flex-row">
            {/* Left Side */}
            <div className="flex flex-col space-y-10 items-start">
              <img src={logo} alt="" />
              <p className="font-medium text-[16px] max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
                justo nibh. Nulla non justo porttitor, pellentesque est sit
                amet, tempor lorem. Phasellus vitae mauris bibendum, pharetra
                metus at, volutpat augue.
              </p>
              {/* Icons */}
              <ul className="flex items-center space-x-10">
                <a href="https://www.google.com" target="_blank">
                  <FaFacebookF className={iconStyle} />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <FaLinkedinIn className={iconStyle} />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <MdEmail className={iconStyle} />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <FaGithub className={iconStyle} />
                </a>
              </ul>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-center justify-center">
              <form action="action.php" method="post">
                {/* Name */}
                <div className="flex flex-row space-x-5">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={formStyle}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={formStyle}
                    />
                  </div>
                </div>
                <br />
                {/* Phone & Subject */}
                <div className="flex flex-row space-x-5">
                  <div>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className={`${formStyle}`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={formStyle}
                    />
                  </div>
                </div>
                <br />
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`${formStyle} w-full`}
                  />
                </div>
                <br />
                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className={`${formStyle} w-full`}
                  ></textarea>
                </div>
                <br />
                {/* Submit */}
                <div>
                  <input
                    type="submit"
                    name="submit"
                    className={`${formStyle} w-full`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
