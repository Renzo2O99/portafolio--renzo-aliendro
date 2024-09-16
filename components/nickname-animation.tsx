"use client";

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Lobster, Norican, Trade_Winds, Rampart_One } from 'next/font/google';

// Configura las fuentes
const lobster = Lobster({ weight: '400', subsets: ['latin'] });
const norican = Norican({ weight: '400', subsets: ['latin'] });
const tradeWinds = Trade_Winds({ weight: '400', subsets: ['latin'] });
const rampartOne = Rampart_One({ weight: '400', subsets: ['latin'] });

// Lista de clases de fuentes a utilizar
const fonts: string[] = [
    lobster.className,
    norican.className,
    tradeWinds.className,
    rampartOne.className
];

const nicknameAnimation: React.FC = () => {
    const [currentFont, setCurrentFont] = useState<string>(fonts[0]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFont(prevFont => {
                const currentIndex = fonts.indexOf(prevFont);
                const nextIndex = (currentIndex + 1) % fonts.length;
                return fonts[nextIndex];
            });
        }, 4000); // Cambia la fuente cada 4 segundos

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const checkEmptyText = () => {
            if (text === '') {
                setCurrentFont(prevFont => {
                    const currentIndex = fonts.indexOf(prevFont);
                    const nextIndex = (currentIndex + 1) % fonts.length;
                    return fonts[nextIndex];
                });
            }
        };

        checkEmptyText();
    }, [text]);

    return (
        <div className={`${currentFont}`}>
            <TypeAnimation
                sequence={[
                    'Renzo2O99', // Primer texto
                    2000,        // Duración del texto en pantalla
                    '',           // Borra el texto
                    1000,           // Tiempo de espera mientras se borra
                    'Renzo2O99',  // Segundo texto
                    2000,
                    '',
                    1000,
                    'Renzo2O99',  // Tercer texto
                    2000,
                    '',
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={50}
                className='font-bold text-primary text-5xl'
            />
        </div>
    );
};

export default nicknameAnimation;
