import { useState } from "react";
import Logo from "../../utils/Logo";
import PrimaryButton from "../ui/PrimaryButton";
import { Menu, X } from "lucide-react";
import { data } from "../../utils/data";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const menuItems = [
        { title: "Price", href: "#price" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Template", href: "#template" },
    ];

    return (
        <nav className="w-full h-16 flex items-center p-3 justify-between relative">
            <Logo className="w-40 h-40" />
            
            <div className="flex items-center gap-4">
                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-10">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href}
                                className="hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA PrimaryButton - Desktop */}
                <a href={data.hero.cta_link} className="hidden lg:block">
                    <PrimaryButton
                        labels={data.hero.cta_text}
                    />
                </a>

                {/* Hamburger PrimaryButton */}
                <button 
                    className={`
                        lg:hidden z-50 relative w-12 h-12 
                        flex items-center justify-center 
                        rounded-full
                        transition-all duration-300 ease-in-out
                        ${isOpen ? 'rotate-180' : 'rotate-0'}
                    `}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X 
                            size={24} 
                            className="text-primary transition-all duration-300" 
                        />
                    ) : (
                        <Menu 
                            size={24} 
                            className="text-primary transition-all duration-300" 
                        />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`
                    fixed inset-0 bg-black/50 backdrop-blur-sm
                    transition-all duration-300 lg:hidden
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
                onClick={toggleMenu}
            />

            {/* Mobile Menu Panel */}
            <div 
                className={`
                    fixed top-0 right-0 h-screen w-72 
                    bg-secondary shadow-xl 
                    transform transition-transform duration-300 ease-out 
                    lg:hidden z-40 p-6 pt-20
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <ul className="flex flex-col space-y-6">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href}
                                className="text-lg font-medium hover:text-primary transition-colors"
                                onClick={toggleMenu}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <li className="pt-4">
                        <a 
                            href={data.hero.cta_link}
                            onClick={toggleMenu}
                        >
                            <PrimaryButton 
                                labels={data.hero.cta_text}
                                className={`w-full`}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;