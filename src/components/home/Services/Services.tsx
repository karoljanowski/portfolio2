'use client'

import Image from "next/image";
import CarouselSection from "@/components/ui/carousel-section";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Motion from "@/components/ui/motion";
const services = [
    {
        id: 1,
        title: "Landing page dla lokalnych firm",
        description: "Tworzę profesjonalne strony internetowe dla lokalnych biznesów, które przyciągają klientów i budują wiarygodność marki.",
        image: "/images/services/landing.jpg"
    },
    {
        id: 2,
        title: "Strony z animacjami 3D",
        description: "Projektuję i implementuję zaawansowane strony internetowe z interaktywnymi elementami 3D, które wyróżnią Twoją markę.",
        image: "/images/services/3d.jpg"
    },
    {
        id: 3,
        title: "Aplikacje webowe",
        description: "Tworzę dedykowane aplikacje internetowe, takie jak systemy rezerwacji czy panele administracyjne.",
        image: "/images/services/app.jpg"
    },
    {
        id: 4,
        title: "Inne pomysły?",
        description: "Nie znalazłeś tego, czego szukasz? Porozmawiajmy o Twoim projekcie! Chętnie pomogę w realizacji Twojego pomysłu.",
        image: "/images/services/other.jpg"
    }
];

const Services = () => {
    const items = services.map(service => ({
        id: service.id,
        content: (
            <div className="w-full min-h-96 h-full grid grid-rows-1 grid-cols-1 rounded-lg overflow-hidden" >
                <div className="w-full h-full bg-black/50 row-span-full col-span-full p-6">
                    <div className="flex flex-col justify-end h-full gap-2">
                        <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                        <p className="text-gray-100 text-sm leading-tight mb-2">{service.description}</p>
                        <Button variant="blur" className="w-fit">
                            <Link href={'mailto:karol.jj@icloud.com'} className="flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                Skontaktuj się
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }));

    return (
        <Motion>
            <CarouselSection
                title="Co mogę dla Ciebie zrobić?"
                description="Specjalizuję się w tworzeniu nowoczesnych rozwiązań internetowych, które pomagają firmom rozwijać się w cyfrowym świecie."
                items={items}
                itemsPerView="2"
            />
        </Motion>
    );
};

export default Services;