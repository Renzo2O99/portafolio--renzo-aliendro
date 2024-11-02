"use client"

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { animationSettings, biografyContent, buttonSettings } from "@/data";
import ProfileAvatar from "./profile-avatar";

const { speciality, description, pictureProfileUrl } = biografyContent;
const { stringTypeAnimationPhrase, sequence } = animationSettings;
const { contactButtonWhite, contactButtonOrange } = buttonSettings;

const Introduction = () => {
    return(
        <>
            <div className="pt-32 pb-32 z-20 w-full bg-darkBg/60 md:pt-0 md:pb-0">
                <div className="grid z-20 items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-5">
                    <div className="flex mx-auto my-8 md:mt-0">
                        <ProfileAvatar/>
                    </div>

                    <div className="flex flex-col mb-10 xl:mb-0 justify-center items-center max-w-xl mx-auto">
                        <h2 className="hidden mb-5 text-3xl leading-tight text-center md:mx-auto md:text-5xl md:block md:mb-10">
                            {stringTypeAnimationPhrase}
                            <TypeAnimation 
                                sequence={sequence()}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="block font-bold text-secondary"
                            />
                        </h2>

                        <div className="hidden md:block">
                            <p className="text-3xl text-center mb-2 md:mb-2">
                                {speciality}
                            </p>

                            <p className="text-3xl text-center mb-2 md:mb-8">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center mt-10 gap-6 md:items-center md:justify-start md:mt-5 md:gap-10">
                            <Link 
                                href="/portafolio"
                                className="relative px-1 py-4 transition-all border-none cursor-pointer text-white bg-gradient-button-1 text-md w-fit 
                                rounded-xl shadow-button-1 hover:bg-gradient-button-1/95 hover:scale-90 hover:opacity-75">
                                <span className="px-4 py-4 bg-span-button-1 rounded-xl hover:bg-opacity-0">
                                    {contactButtonWhite}
                                </span>
                            </Link>


                            <Link 
                                href="#_" 
                                className="relative px-0.5 py-1 inline-flex items-center justify-center overflow-hidden group rounded-md text-md w-fit hover:scale-90 hover:opacity-75">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative px-6 py-3 transition-all bg-span-button-1 rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white">
                                        {contactButtonOrange}
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default Introduction;