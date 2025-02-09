"use client";

import Link from "next/link";
import { Menu, MousePointer2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card } from "./ui/card";

const Header = () => {
  const navItems = [
    { label: "Projekty", href: "#projects" },
    { label: "Usługi", href: "#services" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="my-6 mx-2">
        <Card role="navigation" className="container mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 bg-cyan-200 rounded-lg p-2">
              <MousePointer2Icon className="w-6 h-6 text-cyan-600" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </Card>
    </header>
  );
};

export default Header;
