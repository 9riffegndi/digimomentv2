import { data } from "../../utils/data";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardStyles = [
        {
            bg: 'bg-gradient-to-br from-[#111111]/90 via-purple-900/20 to-[#111111]/90',
            ring: 'ring-1 ring-purple-500/30 ring-inset',
            accent: 'bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent',
            pattern: "before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:20px_20px] before:opacity-20",
            highlight: 'after:absolute after:w-full after:h-1/2 after:-top-1/2 after:bg-gradient-to-b after:from-purple-500/20 after:to-transparent after:blur-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700'
        },
        {
            bg: 'bg-white',
            ring: 'ring-1 ring-purple-200/50 ring-inset',
            accent: 'bg-gradient-to-br from-purple-100/40 via-purple-50/20 to-transparent',
            pattern: "before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] before:bg-[size:20px_20px] before:opacity-20",
            highlight: 'after:absolute after:w-full after:h-1/2 after:-top-1/2 after:bg-gradient-to-b after:from-purple-200/30 after:to-transparent after:blur-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700'
        }
    ];

    const getCardSize = (index) => {
        // More dynamic and interesting layout configuration
        switch (index) {
            case 0: // Hero card - full width with horizontal layout
                return 'lg:col-span-3 md:h-[250px] flex md:flex-row items-center gap-8 backdrop-blur-lg';
            case 1: // Tall card left
                return 'lg:col-span-1 lg:row-span-2 md:h-[500px] flex flex-col justify-center';
            case 2: // Regular card top right
                return 'lg:col-span-2 md:h-[240px] flex flex-col justify-center';
            case 3: // Regular card bottom right
                return 'lg:col-span-2 md:h-[240px] flex flex-col justify-center';
            case 4: // Wide card bottom
                return 'lg:col-span-2 md:h-[250px] flex md:flex-row items-center gap-8';
            case 5: // Accent card right
                return 'lg:col-span-1 lg:row-span-1 md:h-[250px] flex flex-col justify-center';
            default:
                return 'lg:col-span-1 flex flex-col justify-center';
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    };

    return (
        <section className="relative w-full py-24 px-4 md:px-8 bg-[#111111]">
            {/* Animated Title Section */}
            <motion.div 
                className="relative mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {data.why_choose_us.title}
                    </motion.h2>
                    <motion.div 
                        className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>
            </motion.div>

            {/* Enhanced Benefits Grid */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8">
                {data.why_choose_us.benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02, y: -4 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className={`group relative isolate overflow-hidden
                                 ${cardStyles[index % 2].bg}
                                 ${cardStyles[index % 2].ring}
                                 ${cardStyles[index % 2].pattern}
                                 ${cardStyles[index % 2].highlight}
                                 ${getCardSize(index)}
                                 p-8 md:p-10
                                 rounded-3xl
                                 cursor-pointer`}
                    >
                        {/* Animated Geometric Accent */}
                        <motion.div 
                            className={`absolute -right-12 -top-12 w-48 h-48
                                     ${cardStyles[index % 2].accent}
                                     rounded-3xl`}
                            animate={{
                                rotate: hoveredIndex === index ? 45 : 12,
                                scale: hoveredIndex === index ? 1.1 : 1
                            }}
                            transition={{ duration: 0.7 }}
                        />

                        {/* Animated Icon Container */}
                        <motion.div 
                            className={`relative z-10 ${index === 0 || index === 3 || index === 5 ? 'flex-shrink-0' : 'mb-8'}`}
                            animate={{
                                scale: hoveredIndex === index ? 1.1 : 1
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={`${index === 0 || index === 5 ? 'w-20 h-20' : 'w-16 h-16'}
                                        flex items-center justify-center`}>
                                <motion.span 
                                    className={`${index === 0 || index === 5 ? 'text-3xl' : 'text-2xl'}
                                             ${index % 2 === 0 ? 'text-white' : 'text-purple-700'}`}
                                    animate={{
                                        rotate: hoveredIndex === index ? -6 : 0
                                    }}
                                >
                                    {benefit.icon}
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Animated Content */}
                        <motion.div 
                            className={`relative z-10 ${index === 0 || index === 3 || index === 5 ? 'flex-grow' : ''}`}
                            animate={{
                                x: hoveredIndex === index ? 8 : 0
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className={`${index === 0 || index === 5 ? 'text-2xl md:text-3xl' : 'text-xl'} 
                                       font-semibold mb-3
                                       ${index % 2 === 0 ? 'text-white' : 'text-gray-800'}`}>
                                {benefit.title}
                            </h3>
                            <p className={`${index === 0 || index === 5 ? 'text-base md:text-lg' : 'text-sm'}
                                       leading-relaxed
                                       ${index % 2 === 0 ? 'text-gray-300' : 'text-gray-600'}`}>
                                {benefit.description}
                            </p>
                        </motion.div>

                        {/* Interactive Glow Effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl"
                            animate={{
                                opacity: hoveredIndex === index ? 0.2 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;