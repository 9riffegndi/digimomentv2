import { data } from "../../utils/data"; import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Benefits = () => { const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };




const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const cardStyles = [
    {
        bg: 'bg-gradient-to-br from-[#111111]/90 via-purple-900/20 to-[#111111]/90',
        ring: 'ring-1 ring-purple-500/30 ring-inset',
        accent: 'bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent',
        pattern: "before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_1px_1px,rgba(128,90,213,0.15)_1px,transparent_0)] before:bg-[size:24px_24px] before:opacity-20",
        highlight: 'after:absolute after:w-full after:h-1/2 after:-top-1/2 after:bg-gradient-to-b after:from-purple-500/20 after:to-transparent after:blur-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700',
        text: {
            title: 'text-white',
            description: 'text-gray-200'
        }
    },
    {
        bg: 'bg-white',
        ring: 'ring-1 ring-purple-200/50 ring-inset',
        accent: 'bg-gradient-to-br from-purple-100/40 via-purple-50/20 to-transparent',
        pattern: "before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] before:bg-[size:20px_20px] before:opacity-20",
        highlight: 'after:absolute after:w-full after:h-1/2 after:-top-1/2 after:bg-gradient-to-b after:from-purple-200/30 after:to-transparent after:blur-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700',
        text: {
            title: 'text-gray-900',
            description: 'text-gray-700'
        }
    },
    {
        bg: 'bg-gradient-to-br from-[#111111]/90 via-purple-900/20 to-[#111111]/90',
        ring: 'ring-1 ring-purple-500/30 ring-inset',
        accent: 'bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent',
        pattern: "before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_90deg_at_1px_1px,rgba(128,90,213,0)_90deg,rgba(128,90,213,0.1)_0)] before:bg-[size:32px_32px] before:opacity-20",
        highlight: 'after:absolute after:w-full after:h-1/2 after:-top-1/2 after:bg-gradient-to-b after:from-purple-500/20 after:to-transparent after:blur-2xl after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-700',
        text: {
            title: 'text-white',
            description: 'text-gray-200'
        }
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

const MouseTrackCard = ({ children, className, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            variants={itemVariants}
            className={className}
            onMouseMove={handleMouseMove}
            whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
            }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(128, 90, 213, 0.15),
                            transparent 80%
                        )
                    `
                }}
            />
            {children}
        </motion.div>
    );
};

return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-[#111111]">
        {/* Title Section with animation */}
        <motion.div 
            className="relative mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl p-2 md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                    {data.why_choose_us.title}
                </h2>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
            </div>
        </motion.div>

        {/* Enhanced Benefits Grid with staggered animation */}
        <motion.div 
            className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            {data.why_choose_us.benefits.map((benefit, index) => (
                <MouseTrackCard
                    key={index}
                    index={index}
                    className={`group relative isolate overflow-hidden
                            ${cardStyles[index % 3].bg}
                            ${cardStyles[index % 3].ring}
                            ${cardStyles[index % 3].pattern}
                            ${cardStyles[index % 3].highlight}
                            ${getCardSize(index)}
                            p-8 md:p-10
                            transition-all duration-700
                            hover:z-10
                            hover:shadow-[0_20px_50px_rgba(128,90,213,0.15)]
                            dark:hover:shadow-[0_20px_50px_rgba(128,90,213,0.07)]
                            rounded-3xl`}
                >
                    {/* Geometric Accent - Adjusted for layout */}
                    <div className={`absolute -right-12 -top-12 w-48 h-48 rotate-12
                                 ${cardStyles[index % 2].accent}
                                 rounded-3xl
                                 transition-transform duration-700
                                 group-hover:rotate-45 group-hover:scale-110`} />

                    {/* Icon Container - Adjusted for layout */}
                    <div className={`relative z-10 ${index === 0 || index === 3 || index === 5 ? 'flex-shrink-0' : 'mb-8'}`}>
                        <div className={`${index === 0 || index === 5 ? 'w-20 h-20' : 'w-16 h-16'}
                                    transition-transform duration-500
                                    group-hover:scale-110
                                    flex items-center justify-center`}>
                            <span className={`${index === 0 || index === 5 ? 'text-3xl' : 'text-2xl'}
            ${cardStyles[index % 3].text.title}`}>
                                {benefit.icon}
                            </span>
                        </div>
                    </div>

                    {/* Content - Adjusted for layout */}
                    <div className={`relative z-10 ${index === 0 || index === 3 || index === 5 ? 'flex-grow' : ''}`}>
                        <h3 className={`${index === 0 || index === 5 ? 'text-2xl md:text-3xl' : 'text-xl'} 
                                      font-semibold mb-3
                                      ${cardStyles[index % 3].text.title}`}>
                            {benefit.title}
                        </h3>
                        <p className={`${index === 0 || index === 5 ? 'text-base md:text-lg' : 'text-sm'}
                                      leading-relaxed
                                      ${cardStyles[index % 3].text.description}`}>
                            {benefit.description}
                        </p>
                    </div>

                    {/* Elegant Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32
                                  bg-gradient-to-br from-purple-500/5 to-transparent
                                  rounded-full blur-2xl
                                  transition-opacity duration-500
                                  opacity-0 group-hover:opacity-100" />
                </MouseTrackCard>
            ))}
        </motion.div>
    </section>
);

};

export default Benefits;