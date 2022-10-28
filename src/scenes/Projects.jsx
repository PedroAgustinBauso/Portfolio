import { motion } from "framer-motion";
//import portfolio from "../assets/Portfolio.png"
import eCommerce from "../assets/eCommerce.jpg"
import Prode from "../assets/prodeTonic3.jpg"
import portfolioPrueba from "../assets/portfolioPrueba.png"
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

let Project1 = {
  title: "Portfolio",
  image: portfolioPrueba,
  description: "Este es mi portfolio, hecho con react y deployado en versel",
  gitHub:"https://github.com/PedroAgustinBauso",
  youTube:"https://www.youtube.com/"
}

let Project2 = {
  title: "e-commerce",
  image: eCommerce,
  description: "Esto es el e-commerce",
  gitHub:"https://github.com/PedroAgustinBauso/e-commerce",
  youTube:"https://www.youtube.com/watch?v=8U38a3uWG5M&ab_channel=PedroBauso"
}

let Project3 = {
  title: "Prode",
  image: Prode,
  description: "Esto es el prode",
  gitHub: "https://github.com/NazarenoRios/Tonic3-Prode",
  youTube:"https://www.youtube.com/"
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ project }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative" style={{height:"51.5vh",width:"100%"}}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{project.title}</p>
        <p className="mt-7">
          {project.description}
        </p>
        <div style={{display:"flex",paddingTop:"10px"}}>
          <a
        className="hover:opacity-50 transition duration-500 pr-2"
        href={project.gitHub}
        target="_blank"
        rel="noreferrer"
      >
       <AiFillGithub size={50}/> 
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={project.youTube}
        target="_blank"
        rel="noreferrer"
      >
       <AiFillYoutube size={50}/> 
      </a>
        </div>
        
      </div>
      <img src={project.image} alt='' style={{objectFit:"cover",height:"51.5vh",width:"100%",border:"2px solid #03CEA4"}}/>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div style={{paddingBottom:'50px'}}>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-[#03CEA4]">PRO</span>JECTS
          </p>
          
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* ROW 2 */}
          <Project project={Project1}  />
          <Project project={Project2} />
          <Project project={Project3} />
          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
