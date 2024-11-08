'use client';

import Link from 'next/link';
import { itemsNavbar } from "@/data";
import { usePathname } from 'next/navigation';
import MotionTransition from './transition-component';

const Navbar = () => {
    const router = usePathname();

    return(
        <MotionTransition 
        position='right'
        className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className={`
                    cursor-pointer px-3 py-2 transition duration-100 rounded-full cursor-pointer hover:bg-secondary 
                    ${router === item.link && 'bg-secondary'}`}>
                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                ))}
            </nav>
        </MotionTransition>
    );
}

export default Navbar;