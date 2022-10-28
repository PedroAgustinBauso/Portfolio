import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Skills from "../components/Cards";


const MySkills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-[#03CEA4]">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
        
      {/* SKILLS */}
      <div >
       <Skills />
      </div>
    </section>
  );
};

export default MySkills;
