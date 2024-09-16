"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { animationSettings, biografyContent, buttonSettings } from "@/data";

const { speciality, description, pictureProfileUrl } = biografyContent;
const { stringTypeAnimationPhrase, sequence } = animationSettings;
const { contactButtonWhite, contactButtonOrange } = buttonSettings;

const Introduction = () => {
    return(
        <div className="pt-32 z-20 w-full bg-darkBg/60 md:pt-0">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-5">
                <Image src={pictureProfileUrl} priority width="800" height="800" alt="Profile Picture"/>

                <div className="flex flex-col mb-10 xl:mb-0 justify-center items-center max-w-xl mx-auto">
                    <h1 className="mb-5 text-3xl leading-tight text-center md:mx-auto md:text-5xl md:mb-10">
                        {stringTypeAnimationPhrase}
                        <TypeAnimation 
                            sequence={sequence()}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="block font-bold text-secondary"
                        />
                    </h1>

                    <p className="text-3xl text-center mb-2 md:mb-2">
                        {speciality}
                    </p>

                    <p className="text-3xl text-center mb-2 md:mb-8">
                        {description}
                    </p>

                    <div className="flex items-center mt-10 gap-6 md:items-center md:justify-start md:mt-5 md:gap-10">
                        <Link 
                            href="/portafolio"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit 
                            rounded-xl hover:shadow-xl hover:shadow-white/50">
                            {contactButtonWhite}
                        </Link>

                        <Link 
                            href="/contact"
                            className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/95"
                        >
                            {contactButtonOrange}
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Introduction;