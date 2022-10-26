import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/pedro-agustin-bauso"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={50}/>
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/PedroAgustinBauso"
        target="_blank"
        rel="noreferrer"
      >
       <AiFillGithub size={50}/> 
      </a>
    </div>
  );
};

export default SocialMediaIcons;
