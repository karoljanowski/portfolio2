import HeroContainer from "@/components/home/Hero/HeroContainer";
import Stack from "@/components/home/Stack/Stack";
import Projects from "@/components/home/Projects/Projects";
import Social from "@/components/home/Social/Social";
import Services from "@/components/home/Services/Services";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <HeroContainer />
      <Stack />
      <div className="container mx-auto px-6 md:px-12 my-6 grid grid-cols-1 grid-rows-auto sm:grid-cols-3 sm:grid-rows-[repeat(2,auto)] lg:grid-cols-[1fr_3fr] lg:grid-rows-3 gap-6">
        <Social color="bg-purple-800" media="GitHub" name="@karoljanowski" icon={<Github />} link="https://github.com/karoljanowski" />
        <Social color="bg-blue-500" media="LinkedIn" name="@karoljanowski" icon={<Linkedin />} link="https://www.linkedin.com/in/karol-janowski-35463925b/" />
        <Social color="bg-red-500" media="Email" name="karol.jj@icloud.com" icon={<Mail />} link="mailto:karol.jj@icloud.com" />
        <Projects className="sm:col-span-3 lg:col-start-2 row-start-1 lg:row-span-full" />
      </div>
      <div className="container mx-auto px-6 md:px-12 my-6">
        <Services />
      </div>

    </main>
  );
}
