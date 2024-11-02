import Image from "next/image";
import Link from "next/link";
import SvgGenerator from "./svg-generator";
import { IconComponent } from "@/data";
import {GithubIcon } from "lucide-react";

interface PortafolioBoxProps {
    data: {
        id: number;
        position: number;
        title: string;
        image: string;
        description: string;
        urlGithub: string;
        urlDemo: string;
        icons: IconComponent[]
    };
}

const PortafolioBox = (props: PortafolioBoxProps) => {
    const {data} = props;
    const {id, position, title, image, description, urlGithub, urlDemo} = data;
    const isEven: boolean = position % 2 === 0;

    return (
        <div className={`grid ${id === 1 ? 'mb-0' : 'mb-24'} gap-y-12 md:p-8 md:grid-cols-2 md:gap-x-12`}>
            <div className={`flex justify-center items-center ${isEven ? 'md:order-1' : 'md:order-0'}`}>   
                <Image 
                    src={image} 
                    alt={`Image of ${title}`}
                    layout="intrinsic"
                    width={1000} 
                    height={1000} 
                    className="block w-full rounded-2xl h-auto" 
                />
            </div>
        
            <div className="flex flex-col mt-5 md:justify-between md:mt-12 md:mb-4">
                <div>
                    <h2 className="text-3xl font-bold uppercase md:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-12">
                        {description}
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl mt-12 font-bold uppercase">
                        Tecnologías y Herramientas {' '}

                        <span className="hidden md:inline"> 
                            de Desarrollo {' '}
                        </span>

                        <span className="hidden 2xl:inline">
                            Utilizadas
                        </span>
                        :
                    </h3>

                    <div className="mt-12 mb-8 flex gap-4">
                        <SvgGenerator data={data} />
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-center gap-4 mt-10 text-center font-bold md:text-3xl">
                    <Link 
                        href={urlGithub} 
                        target="_blank" 
                        className="flex items-center justify-center gap-4 transition-duration-150 p-4 rounded-2xl bg-slate-500 transition-all hover:scale-90 md:hover:bg-slate-500/80 md:gap-8">
                        <span className="text-center">
                            <span className="hidden md:inline">Repositorio {' '}</span>
                            GitHub
                        </span>

                        <GithubIcon width="50" height="50" />
                    </Link>

                    <Link
                    href={urlDemo} 
                    target="_blank"
                    className="group relative flex justify-center items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white transition-all hover:scale-90 hover:bg-indigo-600/80 focus:outline-none focus:ring active:bg-indigo-500">
                        <span className="absolute -end-full transition-all group-hover:end-4">
                            <svg
                            className="size-10 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </span>

                        <span className="text-3xl font-medium transition-all me-4"> 
                            <span className="hidden md:inline">Visualizar {' '}</span>
                            Demo
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PortafolioBox;
