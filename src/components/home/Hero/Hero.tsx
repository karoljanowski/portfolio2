import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2Icon, CircleIcon } from "lucide-react";
import Link from "next/link";
import HeroScene from "./Cube/Scene";


const Hero = () => {
  return (
    <Card className="container mx-auto p-8 md:p-12">
      <div className="grid grid-rows-[repeat(3,auto)] lg:grid-rows-[repeat(2, 1fr)] lg:grid-cols-[1fr_1fr]">
        <HeroHeader />
        <HeroScene />
        <div className="-mt-24 lg:mt-12 relative z-10 bg-[linear-gradient(to_top,white_0%,white_70%,rgba(255,255,255,0.9)_85%,transparent_100%)] flex flex-col justify-end items-start">
          <HeroBadges />
          <HeroContent />
          <Button asChild className="mt-6 rounded-full font-bold" size="lg">
            <Link href="#contact">
              Skontaktuj się
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

const HeroHeader = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Karol Janowski</h2>
      <div className="flex items-center">
        <span className="text-sm text-gray-500">Frontend Developer</span>
      </div>
    </div>
  )
}

const HeroBadges = () => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      <Badge variant="secondary" className="bg-cyan-100 text-cyan-700 border-cyan-400 hover:bg-cyan-100 px-3">
        <Code2Icon className="w-4 h-4" />
        <span className="text-sm font-medium ml-2 text-nowrap">2 lata doświadczenia</span>
      </Badge>
      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-400 hover:bg-green-100 px-3">
        <CircleIcon className="w-4 h-4 fill-green-800 p-1" />
        <span className="text-sm font-medium ml-2 text-nowrap">Dostępny</span>
      </Badge>
    </div>
  )
}

const HeroContent = () => {
  return (
    <div className="mt-3 space-y-2">
      <h1 className="text-3xl xl:text-4xl font-bold leading-none">
        Doświadczony Frontend Developer
      </h1>
      <p className="text-gray-600 leading-tight">
        Z pasją do tworzenia nowoczesnych i kreatywnych rozwiązań. Szukam nowych wyzwań – zarówno jako freelancer, jak i członek zespołu.
      </p>
    </div>
  )
}
export default Hero;
