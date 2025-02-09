import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Motion from "@/components/ui/motion";
interface SocialProps {
    media: string
    name: string
    icon: React.ReactNode
    link: string
    color: string
}
const Social = ({ media, name, icon, link, color }: SocialProps) => {
    return (
        <Motion>
            <Card className="p-6">
                <Link href={link} className="grid grid-cols-2 grid-rows-2 items-start group">
                <div className={`w-12 h-12 rounded-lg text-white flex items-center justify-center ${color}`}>
                    {icon}
                </div>
                <div className="flex items-center justify-end">
                    <ArrowUpRight className="w-12 h-12 text-gray-500 transition-transform duration-300 group-hover:scale-125" />
                </div>
                <div className="col-span-2">
                    <p className="text-xl font-bold mt-2">{media}</p>
                    <p className="text-sm text-gray-500">{name}</p>
                    </div>
                </Link>
            </Card>
        </Motion>
    )
}

export default Social;