import Title from './Common/Title';
import data from '@/data/data.json';
import Image from 'next/image';
import React from 'react';
import me from "../assets/me.png"

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center" id="about">
            <Title num={1} title="Sobre mí" />

            <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                <p className="mt-10 text-xl text-textDark md:w-1/2">
                    {data.about}
                </p>

                <div className="relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon">
                    <Image
                        alt={data.name}
                        className="rounded-full"
                        layout="fill"
                        objectFit="cover"
                        src={me}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
