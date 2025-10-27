"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../public/image.png";

// Define types for dropdown items
interface DropdownItem {
  name: string;
  path: string;
  description?: string;
}

// Define types for navigation items
interface NavItem {
  label: string;
  dropdown: DropdownItem[];
}

// Props interface for NavItem component
interface NavItemProps {
  label: string;
  dropdown: DropdownItem[];
  isActive: boolean;
  onClick: () => void;
  onLinkClick: () => void;
}

// Props interface for MobileNavItem component
interface MobileNavItemProps {
  label: string;
  dropdown: DropdownItem[];
  isActive: boolean;
  onClick: () => void;
  onLinkClick: () => void;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    {
      label: "Expertise",
      dropdown: [
        {
          name: "Engineering and R&D",
          path: "/expertise/EngineeringAndRD",
          description:
            "Advanced engineering solutions and research & development services",
        },
        {
          name: "Digital Transformation",
          path: "/expertise/Digitization",
          description: "Process digitization and automation solutions",
        },
        {
          name: "MES Solutions",
          path: "/expertise/Mes",
          description:
            "Manufacturing Execution System implementation and support",
        },
        {
          name: "ERP Systems",
          path: "/expertise/Erp",
          description: "SAP and ERP solutions across all business modules",
        },
        {
          name: "Software Product Development",
          path: "/expertise/Software",
          description: "Custom software solutions and product development",
        },
      ],
    },
    {
      label: "Solutions",
      dropdown: [
        {
          name: "BUVI Platform",
          path: "/solutions/buvi",
          description: "Business User Value Intelligence platform",
        },
      ],
    },
    {
      label: "Innovation",
      dropdown: [
        {
          name: "Engineering Change Management",
          path: "/innovation/ecm",
          description: "Streamlined engineering change processes and workflows",
        },
        {
          name: "Process Automation",
          path: "/innovation/process",
          description: "Automated business process solutions and RPA",
        },
        {
          name: "Cad Automation",
          path: "/innovation/cad",
          description: "CAD automation and technical drawing solutions",
        },
      ],
    },
    {
      label: "Consulting",
      dropdown: [
        {
          name: "Consulting",
          path: "/consulting/consulting",
          description: "Consulting from experience",
        },
      ],
    },
    {
      label: "Products",
      dropdown: [
        {
          name: "Electric Weed-Cutter",
          path: "/products/weed-cutter",
          description: "Evolutionary eco-friendly weed control solution",
        },
      ],
    },
    {
      label: "About",
      dropdown: [
        {
          name: "About Us",
          path: "/about/aboutUs",
          description: "Learn about our company and mission",
        },
        {
          name: "Sustainability",
          path: "/about/sustainability",
          description: "Our commitment to sustainable business practices",
        },
        {
          name: "Contact",
          path: "/about/contactUs",
          description: "Get in touch with our team",
        },
      ],
    },
    {
      label: "Group Companies",
      dropdown: [
        {
          name: "Optimus Protection System",
          path: "https://optimusprotect.com/",
          description: "",
        },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <div className="flex items-center" ref={navRef}>
          <Link
            href="/"
            className="flex-shrink-0 group"
            onClick={closeAllDropdowns}
          >
            <div className="relative overflow-hidden">
              <Image
                alt="Logo"
                src={Logo}
                width={180}
                height={180}
                className="h-12 w-auto"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center ml-10">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                dropdown={item.dropdown}
                isActive={activeDropdown === item.label}
                onClick={() => toggleDropdown(item.label)}
                onLinkClick={handleLinkClick}
              />
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-black hover:bg-orange-50 hover:text-orange-500 transition-all"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              closeAllDropdowns();
            }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0 top-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  label={item.label}
                  dropdown={item.dropdown}
                  isActive={mobileActiveDropdown === item.label}
                  onClick={() =>
                    setMobileActiveDropdown(
                      mobileActiveDropdown === item.label ? null : item.label
                    )
                  }
                  onLinkClick={handleLinkClick}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({
  label,
  dropdown,
  isActive,
  onClick,
  onLinkClick,
}: NavItemProps) {
  return (
    <div className="relative group mx-1">
      <button
        className="flex items-center px-4 py-2 rounded-md font-medium transition-all duration-200 text-black hover:bg-orange-50 hover:text-orange-600"
        onClick={onClick}
      >
        {label}
        <ChevronDown className="ml-1.5 h-4 w-4 transition-all duration-200 text-gray-500 group-hover:text-orange-600 group-hover:rotate-180" />
      </button>

      {isActive && (
        <div className="absolute left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-200 py-2 z-50 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-orange-400 to-blue-500 w-full absolute top-0 left-0"></div>
          {dropdown.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 group transition-all"
              onClick={onLinkClick}
            >
              <span className="block font-medium text-black group-hover:text-orange-600 transition-colors">
                {item.name}
              </span>
              {item.description && (
                <span className="text-xs text-gray-600 mt-0.5 block group-hover:text-blue-600 transition-colors">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  label,
  dropdown,
  isActive,
  onClick,
  onLinkClick,
}: MobileNavItemProps) {
  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        className="flex items-center justify-between w-full py-3 font-medium rounded-md px-2 transition-all text-black hover:bg-orange-50 hover:text-orange-600"
        onClick={onClick}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 text-gray-500 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <div className="mt-2 pl-4 border-l-2 border-orange-300 ml-2 space-y-1">
          {dropdown.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block py-2.5 text-sm text-gray-600 hover:text-orange-600 transition-colors"
              onClick={onLinkClick}
            >
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <span className="text-xs text-blue-600 mt-0.5 block">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
