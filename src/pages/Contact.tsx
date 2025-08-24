import logo from "../assets/images/logo_saadi2.png";
import { FaPhoneAlt, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const iconStyle: string = "text-white size-6";
  const formStyle: string =
    "bg-bgcolor2 w-2xs px-6 rounded-2xl placeholder:font-medium placeholder:text-white";

  return (
    <>
      <section id="contact" className="bg-bgcolor1">
        <div className="container mx-auto py-20 text-white">
          <h1 className="text-center font-bold text-4xl pb-20">
            Contact <span className="text-cyan-300">Me</span>
          </h1>
          {/* Main Row */}
          <div className="flex flex-col-reverse justify-center items-center md:space-x-20 md:flex-row">
            {/* Left Side */}
            <div className="flex flex-col space-y-10 items-center md:items-start pt-20 md:pt-0">
              <img src={logo} alt="" className="h-12 brightness-200" />
              <p className="font-medium text-[16px] max-w-md text-center px-2 md:px-0 md:text-start">
                I am a professional web developer with over three years of
                experience. My expertise includes HTML5, CSS3, JavaScript, and
                modern frameworks like React and TypeScript. I also build mobile
                applications with Flutter and Dart, and have foundational
                knowledge in Unity. My passion is delivering successful projects
                with 100% client satisfaction.
              </p>
              {/* Icons */}
              <ul className="flex items-center space-x-10">
                <a href="tel:+966-57-083-1351" target="_blank">
                  <FaPhoneAlt className={iconStyle} />
                </a>
                <a
                  href="https://www.linkedin.com/in/obadah-alsaadi-1b334a37b/"
                  target="_blank"
                >
                  <FaLinkedinIn className={iconStyle} />
                </a>
                <a href="mailto:obaaaaada@gmail.com" target="_blank">
                  <MdEmail className={iconStyle} />
                </a>
                <a href="https://github.com/Obadah26" target="_blank">
                  <FaGithub className={iconStyle} />
                </a>
              </ul>
            </div>
            {/* Right Side */}
            <div className="flex flex-col items-center justify-center">
              <form action="action.php" method="post">
                {/* Name */}
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={`${formStyle} h-14`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className={`${formStyle} h-14`}
                    />
                  </div>
                </div>
                <br />
                {/* Phone & Subject */}
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6">
                  <div>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className={`${formStyle} h-14`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className={`${formStyle} h-14`}
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
                    className={`${formStyle} h-14 w-full`}
                  />
                </div>
                <br />
                {/* Message */}
                <div>
                  <textarea
                    placeholder="Message"
                    name="message"
                    className={`${formStyle} h-40 pt-2 w-full`}
                  ></textarea>
                </div>
                <br />
                {/* Submit */}
                <div>
                  <input
                    type="submit"
                    name="submit"
                    className={`${formStyle} h-14 w-full hover:bg-bgcolor2/50 hover:cursor-pointer`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-bgcolor2 flex flex-row mx-auto py-10 items-center justify-between px-6 text-white">
        <h3>Copywrite&copy; 2025 All Rights Reserved By Obadah.</h3>
        <a
          href="#"
          className="border-4 border-cyan-300 w-15 h-15 rounded-md hover:cursor-pointer"
        >
          <div className="font-bold text-5xl text-center pb-5">↑</div>
        </a>
      </div>
    </>
  );
};

export default Contact;
