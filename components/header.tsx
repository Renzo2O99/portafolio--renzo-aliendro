import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";
import NicknameAnimation from "./nickname-animation";

const Header = () => {
    return(
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="flex flex-col gap-8 align-center justify-between max-w-6xl mx-auto md:flex-row">
                    <Link href="/">
                        <h1 className="italic my-3 text-6xl font-bold text-center md:text-left">
                            <NicknameAnimation/>
                        </h1>
                    </Link>
                    
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link key={id} href={src} target="_blank"
                            className="transition-all duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>

                </div>
            </header>            
        </MotionTransition>
    );
}

export default Header;