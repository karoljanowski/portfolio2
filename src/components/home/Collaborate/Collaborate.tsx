import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
const Collaborate = () => {
    return (
        <Card className="py-8">
            <CardHeader className="text-center space-y-4">
                <CardTitle className="text-4xl font-bold">
                    Współpracujmy razem!
                </CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto leading-tight">
                    Masz ciekawy projekt w głowie? Chcesz stworzyć coś wyjątkowego? 
                    Jestem otwarty na nowe wyzwania i chętnie pomogę przekształcić Twoje pomysły w rzeczywistość.
                </CardDescription>
                <CardContent className="flex flex-col gap-2 items-center justify-center sm:flex-row pt-6">
                    <Button asChild size="lg">
                        <Link href="mailto:karol.jj@icloud.com" className="flex items-center gap-2 font-bold">
                            <Mail className="mr-2 h-5 w-5" />
                            Skontaktuj się
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                        <Link href="https://www.linkedin.com/in/karol-janowski-35463925b/" className="flex items-center gap-2 font-bold">
                            <Linkedin className="mr-2 h-5 w-5" />
                            Przejdź na Linkedin
                        </Link>
                    </Button>
                </CardContent>
            </CardHeader>
        </Card>

    )
}

export default Collaborate