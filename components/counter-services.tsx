"use client"

import { dataCounter } from "@/data";   
import CountUp from "react-countup";

const CounterServices = () => {
    return(
        <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mr-16 ml-28 sm:ml-64 lg:ml-44 my-10 md:grid-cols-4 md:gap-6 md:mx-auto">
            {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight ? 'ltr' : ''}`}>
                    <div className={`flex flex-col px-4 border-2 border-transparent md:border-e-gray-100 ${lineRight ? '' : ''} ${lineRightMobile ? 'border-e-gray-100' : ''}`}>
                        <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                            + <CountUp end={endCounter} start={0} duration={5} />
                        </p>

                        <p className="text-xs uppercase max-w-[100px]">{text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CounterServices;