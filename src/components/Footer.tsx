import { Card } from "./ui/card"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="my-6 container mx-auto px-6 md:px-12">
            <Card className="p-2 flex items-center justify-center text-center">
                <p className="text-gray-700 text-sm">
                    {currentYear} &copy; Karol Janowski. Wszystkie prawa zastrzeżone
                </p>
            </Card>
        </footer>
    )
}

export default Footer;