'use client'

import { Projects as ProjectsData } from "@/lib/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import CarouselSection from "@/components/ui/carousel-section";
import Motion from "@/components/ui/motion";
import Image from "next/image";
interface ProjectsProps {
    className?: string
}

const Projects = ({ className }: ProjectsProps) => {
    const items = ProjectsData.map(project => ({
        id: project.path,
        content: (
            <div 
                className="w-full min-h-96 h-full grid grid-rows-1 grid-cols-1 relative" 
            >
                <Image src={project.image} alt={project.title} width={1500} height={450} 
                className="object-cover max-h-[450px] row-span-full col-span-full" />
                <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent row-span-full col-span-full p-6 relative z-20">
                    <div className="flex flex-col justify-end h-full gap-2">
                        <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-100 mb-2 text-sm leading-tight">{project.description}</p>
                        <div className="flex gap-2">
                            {/* <Button variant="blur" className="w-fit">
                                <Link href={project.path} className="flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Dowiedz się więcej
                                </Link>
                            </Button> */}
                            <Button variant="blur" className="w-fit border-white/50 border">
                                <Link href={project.live} className="flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Odwiedź stronę
                                </Link>
                            </Button>
                            <Button variant="blur" className="w-fit border-white/50 border">
                                <Link href={project.github} className="flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    Kod źródłowy
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }));

    return (
        <Motion className={className}>
            <CarouselSection
                title="Projekty"
                description="Sprawdź moje najnowsze projekty"
                items={items}
                itemsPerView="1"
                itemClassName="basis-auto p-0 w-full h-full"
            />
        </Motion>
    );
};

export default Projects;