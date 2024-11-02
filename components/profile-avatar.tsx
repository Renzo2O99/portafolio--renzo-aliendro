import { animationSettings, dataPortafolio, technologiesIcons } from "@/data";
import { TypeAnimation } from "react-type-animation";
const { stringTypeAnimationPhrase, sequence } = animationSettings;

const ProfileAvatar = () => {
    return (
        <div className="glassmorphism shadow-lg rounded-2xl w-[350px]">
            <div className="flex flex-col items-center justify-center p-8 mt-4">
                <a href="#" className="relative block">
                    <img
                        alt="profile"
                        src="/robotface.jpg"
                        className="mx-auto object-cover rounded-full h-44 w-44 border-4 "
                    />
                </a>
                <h1 className="text-5xl mt-8 font-medium text-white/90">
                    Aliendro Renzo
                </h1>
                <p className="italic mt-4 text-3xl mb-6 text-gray-400">Web Developer</p>

                <h2 className="mb-5 text-3xl leading-tight text-center md:mx-auto md:hidden md:text-5xl md:mb-10">
                            {stringTypeAnimationPhrase}
                            <TypeAnimation 
                                sequence={sequence()}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="block font-bold text-secondary"
                            />
                </h2>

                <span className="hidden px-6 py-4 font-semibold text-2xl rounded-full text-white/80 bg-indigo-500 md:inline">
                    Freelancer
                </span>

                <div className="w-full py-6 mt-6 rounded-lg">
                    <div className="text-3xl flex items-center justify-between text-white/80 font-semibold">
                        <p className="flex flex-col text-center">
                            Proyectos
                            <span className="mt-4 font-bold text-white/60 text-2xl">
                                {dataPortafolio.length}
                            </span>
                        </p>

                        <p className="flex flex-col text-center">
                            Tecnologías
                            <span className="mt-4 font-bold text-white/60 text-2xl">
                                {technologiesIcons.length}
                            </span>
                        </p>

                        <p className="flex flex-col text-center">
                            Calificación
                            <span className="mt-4 font-bold text-white/60 text-2xl">
                                9.3
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAvatar;
