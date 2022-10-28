import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png" 
import js from "../assets/js.svg" 
import git from "../assets/git.png" 
import boostrap from "../assets/boostrap.png" 
import tail from "../assets/tailwind.png" 
import expres1 from "../assets/express.png" 
import node from "../assets/node.svg" 
import postgres from "../assets/postgre.png" 
import react1 from "../assets/react.png" 
import sequelize1 from "../assets/sequelize.png" 
import github1 from "../assets/github1.png"
import material from "../assets/material.svg"
import redux from "../assets/Redux.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={html} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={css} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={js} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={react1} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={redux} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={tail} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300" style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={material} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MATERIAL UI</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={boostrap} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={node} width='700px' height='700px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={expres1} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>EXPRESS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={postgres} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={sequelize1} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SEQUELIZE</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={git} width='400px' height='400px' alt="/"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"style={{boxShadow: "5px 10px #fff"}}>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={github1} width='400px' height='400px' alt="/" style={{filter:"invert(100%)"}}/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;