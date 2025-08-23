import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../assets/images/profile.png";

const Home = () => {
  const iconCircleBorder: string =
    "border-2 border-cyan-300 rounded-full w-10 h-10 flex items-center justify-center";
  const iconStyle: string = "text-cyan-300 size-6";
  return (
    <>
      <section id="home" className="bg-image-overlay">
        {/* Container */}
        <div className="container flex flex-col mx-auto items-center pt-10 pb-6 gap-5 md:flex-row md:pt-30">
          <div className="px-2 space-y-6 mx-auto text-white">
            {/* Left Side */}
            <div className="space-y-3">
              {/* Texts */}
              <h1 className="font-bold uppercase text-4xl">Obadah Alsaadi</h1>
              <h2 className="font-medium text-3xl">
                I'm a <span className="text-cyan-400">Backend</span> &
                <span className="text-cyan-400"> Frontend Developer</span>
              </h2>
              <p className="max-w-md">
                I am a professional web developer with over three years of
                experience. My expertise includes HTML5, CSS3, JavaScript, and
                modern frameworks like React and TypeScript. I also build mobile
                applications with Flutter and Dart, and have foundational
                knowledge in Unity. My passion is delivering successful projects
                with 100% client satisfaction.
              </p>
            </div>
            {/* Icons */}
            <ul className="flex items-center space-x-4">
              <a
                href="https://www.google.com"
                target="_blank"
                className={iconCircleBorder}
              >
                <FaFacebookF className={iconStyle} />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className={iconCircleBorder}
              >
                <FaLinkedinIn className={iconStyle} />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className={iconCircleBorder}
              >
                <MdEmail className={iconStyle} />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                className={iconCircleBorder}
              >
                <FaGithub className={iconStyle} />
              </a>
            </ul>
            {/* Buttons */}
            <div className="container flex flex-col space-y-6 pt-2 md:flex-row md:space-x-6 md:space-y-0">
              <button
                type="button"
                className="rounded-3xl px-10 py-1 text-bgcolor1 bg-cyan-300 hover:cursor-pointer hover:bg-cyan-200"
              >
                Download Cv
              </button>
              <button
                type="button"
                className="rounded-3xl px-10 py-1 text-bgcolor1 bg-cyan-300 hover:cursor-pointer hover:bg-cyan-200"
              >
                Portfolio
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <img className="mx-auto" src={profile} alt="Obadah Alsaadi" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
