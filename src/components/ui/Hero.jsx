import { useState, useEffect } from "react";
import { data } from "../../utils/data";
import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";

const Hero = () => {
  const dataSlogan = data.hero.slogan;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dataSlogan.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col gap-4 md:gap-6 items-center justify-center px-4 md:px-8 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(128,90,213,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,90,213,0.1)_1px,transparent_1px)] before:bg-[size:24px_24px] before:opacity-20 before:pointer-events-none"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative z-10 max-w-6xl mx-auto text-center md:text-left"
      >
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-inter -tracking-wider font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap"
        >
          {data.hero.title}
        </motion.h1>
        
        <div className="slogan-container group hover:scale-105 transition-transform duration-300">
          <div className="slogan-background animate-pulse"></div>
          <div className="slogan-border"></div>
          <motion.span 
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="slogan-text  relative z-10"
          >
            {dataSlogan[index]}
          </motion.span>
          <div className="slogan-shine"></div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mt-6 md:mt-8 lg:mt-10"
      >
        <PrimaryButton 
          labels={data.hero.cta_text} 
          className="text-sm sm:text-base md:text-lg whitespace-nowrap hover:scale-105 transition-transform duration-300"
        />
      </motion.div>            
    </motion.div>
  );
};

export default Hero;
