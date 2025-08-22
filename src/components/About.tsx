import Divider from "./Divider";
const About = () => {
  return (
    <>
      <section id="about" className="bg-bgcolor2 py-20">
        <div className="container mx-auto px-6 space-y-16 text-white">
          <h1 className="text-4xl font-bold text-center text-white">
            About <span className="text-cyan-300">Me</span>
          </h1>
          <p className="mx-auto text-[16px] text-center">
            I'm professional web developer with strong skill in HTML, CSS,
            JavaScript, Tailwind, JQuery etc. I have working in this field
            almost 3 years and all projects are complited successfully with 100%
            client satisfiction.
          </p>

          <h1 className="font-bold text-2xl text-center">
            | <span className="text-cyan-300">Explore</span> |
          </h1>
          <Divider />
          {/* Container for Design and Development */}
          <div className="flex flex-col mx-auto justify-between space-y-16 text-center md:text-start md:space-y-0 md:space-x-8 md:flex-row">
            {/* Design */}
            <div>
              <h1 className="font-bold text-2xl text-cyan-300">Design</h1>
              <p>
                I can deson te ste based on sour necds and sungestions. car also
                design the ate trom scratch and consult vou durine the loo.
              </p>
            </div>
            {/* Development */}
            <div>
              <h1 className="font-bold text-2xl text-cyan-300">Development</h1>
              <p>
                I can design te ste based on sour necds and sungestions. car
                also design the ate trom scratch and consult vou durine the loo.
              </p>
            </div>
          </div>
          <div className="justify-center text-center">
            <h1 className="font-bold text-2xl text-cyan-300">Maintenance</h1>
            <p>
              I can deson te ste based on sour necds and sungestions. car also
              design the ate trom scratch and consult vou durine the loo.
            </p>
          </div>
          <Divider />
        </div>
      </section>
    </>
  );
};

export default About;
