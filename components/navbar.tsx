"use client"

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 rounded-full bg-green-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white">
                  <path
                    fill="currentColor"
                    d="M7,21C5.67,21 4.5,19.83 4.5,18.5C4.5,17.17 5.67,16 7,16C8.33,16 9.5,17.17 9.5,18.5C9.5,19.83 8.33,21 7,21M7,17.5C6.5,17.5 6,18 6,18.5C6,19 6.5,19.5 7,19.5C7.5,19.5 8,19 8,18.5C8,18 7.5,17.5 7,17.5M17,21C15.67,21 14.5,19.83 14.5,18.5C14.5,17.17 15.67,16 17,16C18.33,16 19.5,17.17 19.5,18.5C19.5,19.83 18.33,21 17,21M17,17.5C16.5,17.5 16,18 16,18.5C16,19 16.5,19.5 17,19.5C17.5,19.5 18,19 18,18.5C18,18 17.5,17.5 17,17.5M3,4H21V8H3V4M3,10H21V14H3V10Z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold font-parkinsans">Clanyeco</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
  <NavItem href="/" label="Home" />
  <NavItem
    href="/services"
    label="Services"
    hasDropdown
    dropdownItems={[
      { label: "House cleaning", href: "/services/house-cleaning" },
      { label: "Office cleaning", href: "/services/office-cleaning" },
      { label: "Deep cleaning", href: "/services/deep-cleaning" },
      { label: "Move in/out cleaning", href: "/services/move-in-out-cleaning" },
      { label: "Part orientation cleaning", href: "/services/part-orientation-cleaning" },
      { label: "Recurring cleaning", href: "/services/recurring-cleaning" },
    ]}
  />
  <NavItem href="/pricing" label="Pricing" />
  <NavItem href="/about-us" label="About us" hasDropdown={false} />
  <NavItem href="/cleaning-tips" label="Cleaning tips" />
  <NavItem href="/contact" label="Contact" />
</nav>


        {/* Phone Number */}
        <div className="hidden md:flex items-center">
          <Link href="tel:+18005678990" className="flex items-center text-gray-700 mr-4 font-outfit">
            <Phone className="h-4 w-4 mr-2" />
            <span>+1 (800) 567-8990</span>
          </Link>
          <Link
            href="/book"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-full transition-colors font-outfit"
          >
            Book a Cleaning
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="/" className="py-2 border-b border-gray-100 font-outfit">
            Home
          </Link>
          <div className="py-2 border-b border-gray-100 font-outfit">
  <details>
    <summary className="cursor-pointer outline-none flex items-center justify-between">
      <span>Services</span>
      <ChevronDown className="ml-1 h-4 w-4 inline" />
    </summary>
    <ul className="pl-4 mt-2 space-y-1">
      <li><Link href="/services/house-cleaning" className="block py-1">House cleaning</Link></li>
      <li><Link href="/services/office-cleaning" className="block py-1">Office cleaning</Link></li>
      <li><Link href="/services/deep-cleaning" className="block py-1">Deep cleaning</Link></li>
      <li><Link href="/services/move-in-out-cleaning" className="block py-1">Move in/out cleaning</Link></li>
      <li><Link href="/services/part-orientation-cleaning" className="block py-1">Part orientation cleaning</Link></li>
      <li><Link href="/services/recurring-cleaning" className="block py-1">Recurring cleaning</Link></li>
    </ul>
  </details>
</div>
          <Link href="/pricing" className="py-2 border-b border-gray-100 font-outfit">
            Pricing
          </Link>
          <Link href="/about-us" className="py-2 border-b border-gray-100 font-outfit">
            About us
          </Link>
          <Link href="/cleaning-tips" className="py-2 border-b border-gray-100 font-outfit">
            Cleaning tips
          </Link>
          <Link href="/contact" className="py-2 border-b border-gray-100 font-outfit">
            Contact
          </Link>

          <div className="flex flex-col space-y-3 pt-2">
            <Link href="tel:+18005678990" className="flex items-center text-gray-700 font-outfit">
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (800) 567-8990</span>
            </Link>
            <Link
              href="/book"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-full text-center transition-colors font-outfit"
            >
              Book a Cleaning
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

interface NavItemProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

function NavItem({ href, label, hasDropdown, dropdownItems }: NavItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="relative px-3 py-2 text-gray-700 hover:text-green-600 font-medium flex items-center font-outfit"
      >
        {label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>
      {hasDropdown && dropdownItems && (
        <div
          className={`absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg z-50 transition-all duration-200 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <ul className="py-2">
            {dropdownItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors font-outfit"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
