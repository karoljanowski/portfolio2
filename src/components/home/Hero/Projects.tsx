'use client'
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex items-center justify-center bg-cyan-500 p-0">
            <Link href="/projects" className="w-full h-full grid grid-cols-1 items-center justify-items-center">
                <TextCircle isHovered={isHovered} />
                <ArrowUpRight className="w-14 h-14 row-span-full col-span-full text-white" />
            </Link>
        </Card>
    );
};

const TextCircle = ({ isHovered }: { isHovered: boolean }) => {
    const text = "PROJECTS•PROJECTS•PROJECTS•";
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const [translateValue, setTranslateValue] = useState('-75px');

    const getCharacterStyle = (index: number, totalChars: number) => ({
        transform: `
            translate(-50%, -50%)
            rotate(${index * (360 / totalChars)}deg)
            translateY(${translateValue})
        `
    });

    useEffect(() => {
        if (isDesktop) {
            setTranslateValue(isHovered ? '-85px' : '-75px');
        } else {
            setTranslateValue(isHovered ? '-60px' : '-55px');
        }
    }, [isHovered, isDesktop]);

    return (
        <div className="flex items-center justify-center h-full relative row-span-full col-span-full">
            <div>
                {text.split('').map((char, index) => (
                    <span
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg lg:text-2xl transition-all duration-300"
                    style={getCharacterStyle(index, text.length)}
                >
                    {char}
                </span>
                ))}
            </div>
        </div>
    );
}

export default Projects;