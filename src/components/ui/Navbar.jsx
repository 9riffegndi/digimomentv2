import { useState, useEffect } from "react";
import Logo from "../../utils/Logo";
import PrimaryButton from "../ui/PrimaryButton";
import { Menu, X } from "lucide-react";
import { data } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const menuItems = [
        { title: "Price", href: "#price" },
        { title: "Testimonials", href: "#testimonials" },
        { title: "Template", href: "#template" },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-secondary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="w-full h-16 flex items-center p-3 justify-between relative max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Logo className="w-40 h-40" />
                </motion.div>
                
                <div className="flex items-center gap-4">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-10">
                        {menuItems.map((item, index) => (
                            <motion.li 
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                            >
                                <a 
                                    href={item.href}
                                    className="relative font-medium group"
                                >
                                    <span className="text-primary transition-colors duration-300">
                                        {item.title}
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Button - Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="hidden lg:block"
                    >
                        <a href={data.hero.cta_link}>
                            <PrimaryButton
                                labels={data.hero.cta_text}
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </a>
                    </motion.div>

                    {/* Hamburger Button */}
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`
                            lg:hidden z-50 relative w-12 h-12 
                            flex items-center justify-center 
                            rounded-full hover:bg-purple-500/10
                            transition-all duration-300 ease-in-out
                            ${isOpen ? 'rotate-180' : 'rotate-0'}
                        `}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 45, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} className="text-primary" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 45, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -45, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} className="text-primary" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
                            onClick={toggleMenu}
                        />
                    )}
                </AnimatePresence>

                {/* Mobile Menu Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-72 bg-secondary shadow-xl lg:hidden z-40 p-6 pt-20"
                        >
                            <ul className="flex flex-col space-y-6">
                                {menuItems.map((item, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * (index + 1) }}
                                    >
                                        <a 
                                            href={item.href}
                                            className="text-lg font-medium text-primary hover:text-purple-400 transition-colors flex items-center gap-2"
                                            onClick={toggleMenu}
                                        >
                                            {item.title}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li 
                                    className="pt-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <a 
                                        href={data.hero.cta_link}
                                        onClick={toggleMenu}
                                    >
                                        <PrimaryButton 
                                            labels={data.hero.cta_text}
                                            className="w-full hover:scale-105 transition-transform duration-300"
                                        />
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;