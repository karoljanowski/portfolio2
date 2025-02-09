'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CarouselSectionProps {
    title: string;
    description?: string;
    className?: string;
    items: {
        id: string | number;
        content: ReactNode;
    }[];
    itemClassName?: string;
    cardClassName?: string;
    showControls?: boolean;
    itemsPerView?: "1" | "2" | "3" | "4";
}

const CarouselSection = ({
    title,
    description,
    items,
    itemClassName,
    cardClassName,
    showControls = true,
    itemsPerView = "3"
}: CarouselSectionProps) => {
    const basisMap = {
        "1": "basis-full",
        "2": "md:basis-1/2",
        "3": "md:basis-1/2 lg:basis-1/3",
        "4": "md:basis-1/2 lg:basis-1/4"
    };

    return (
        <Card className={cn("overflow-hidden flex flex-col h-full", cardClassName)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className="p-0 rounded-t-lg overflow-hidden flex-1">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full h-full"
                >
                    <CarouselContent className="h-full">
                        {items.map((item) => (
                            <CarouselItem 
                                key={item.id} 
                                className={cn(
                                    "pl-2 md:pl-4", 
                                    basisMap[itemsPerView],
                                    itemClassName
                                )}
                            >
                                {item.content}
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {showControls && (
                        <div>
                            <CarouselPrevious className="right-14 top-8 -translate-y-1/2" style={{left: 'unset'}} />
                            <CarouselNext className="right-4 top-8 -translate-y-1/2" />
                        </div>
                    )}
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default CarouselSection; 