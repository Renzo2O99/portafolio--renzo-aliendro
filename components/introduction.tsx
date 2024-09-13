"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return(
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-5">
                <Image src="/home-4.png" priority width="800" height="800" alt="Profile Picture"/>

                <div className="flex flex-col mb-10 xl:mb-0 items-center justify-center max-w-xl mx-auto">
                    <h1 className="mb-5 text-3xl leading-tight text-center md:text-left md:text-5xl md:mb-10">
                        Si puedes pensarlo,
                        <TypeAnimation 
                            sequence={[
                                "puedes programarlo", 1000,
                                "puedes optimizarlo", 1000,
                                "puedes implementarlo", 1000,
                                "puedes desarrollarlo", 1000,
                                "puedes crearlo", 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-secondary"
                        />
                    </h1>

                    <p className="text-3xl text-center md:text-left mb-2 md:mb-8">
                        Web Developer especializado en Frontend. <br/> Me dedico a desarrollar proyectos web en mis tiempos libres.
                    </p>

                    <div className="flex items-center mt-10 gap-6 md:items-center md:justify-start md:mt-5 md:gap-10">
                        <Link 
                            href="/projects"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                            rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Visualizar Proyectos
                        </Link>

                        <Link 
                            href="/contact"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/95"
                        >
                            Contactar Conmigo
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Introduction;