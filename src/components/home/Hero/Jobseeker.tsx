import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Jobseeker = () => {
    return (
        <Card className="bg-gradient-to-r from-purple-700 to-blue-700 flex flex-col justify-between">
            <CardHeader className="p-4 pb-0 md:p-6 md:pb-0">
                <CardTitle className="text-base leading-tight text-white md:text-2xl xl:text-3xl">
                    Jobseeker
                </CardTitle>
                <CardDescription className="text-sm leading-tight text-white md:text-base md:leading-tight xl:text-lg">
                    Sprawdź moją autorską aplikację SaaS.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 md:pt-2">
                <Button className="bg-white text-black font-bold hover:bg-gray-200">
                    <Link href="https://jobseeker.vercel.app/">
                        Sprawdź
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}   

export default Jobseeker;