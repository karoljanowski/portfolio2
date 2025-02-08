'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Motion from "@/components/ui/motion"

const stack = [
    {name: "Next.js", image: "/images/stack/nextjs.svg"},
    {name: "React", image: "/images/stack/react.svg"},
    {name: "Tailwind CSS", image: "/images/stack/tailwind.svg"},
    {name: "TypeScript", image: "/images/stack/typescript.svg"},
    {name: "PostgreSQL", image: "/images/stack/postgresql.svg"},
    {name: "Docker", image: "/images/stack/docker.svg"},
    {name: "Git", image: "/images/stack/git.svg"},
    {name: "Vercel", image: "/images/stack/vercel.svg"},
    {name: "Supabase", image: "/images/stack/supabase.svg"},
    {name: "Framer", image: "/images/stack/framer.svg"},
    {name: "Three.js", image: "/images/stack/threejs.svg"},
    {name: "JavaScript", image: "/images/stack/javascript.svg"},
]

const Stack = () => {
  return (
    <Motion className="container mx-auto px-6 md:px-12 my-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_5fr] gap-4 items-center">
            <div className="flex flex-col gap-4">
                <p className="text-xl font-bold text-gray-500 leading-none">Stos<br/>technologiczny</p>
            </div>

            <Carousel
            opts={{ align: "start", loop: true}}
            plugins={[Autoplay({
                delay: 2000
            })]}
            className="w-full overflow-hidden"
            >
            <CarouselContent className="gap-0">
                {stack.map((item, index) => (
                    <CarouselItem key={index} className="h-20 w-20 basis-auto pl-6 xl:pl-12 xl:h-20 xl:w-24">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain grayscale brightness-75 opacity-50 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
    </Motion>
  )
}

export default Stack;
