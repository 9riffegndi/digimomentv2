import { useState, useEffect } from "react";
import { data } from "../../utils/data";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  const dataSlogan = data.hero.slogan;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dataSlogan.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-80 flex flex-col gap-2 items-center justify-center"
      style={{
        backgroundImage: "url('../../../public/img/gridBg.svg')",
        backgroundSize: "cover",
      }}
    >
      
      <div className="items-center flex flex-col md:flex-row  justify-center gap-2">
        <h1 className="font-inter w-full justify-center -tracking-wider font-medium text-center text-2xl sm:text-4xl items-center">
          {data.hero.title}
        </h1>
        <span  key={index} className=" pl-1 pr-1   slogan-text text-2xl sm:text-4xl">{dataSlogan[index]}</span>
      </div>
        <a href={data.hero.cta_link}>
          <PrimaryButton labels={data.hero.cta_text} />
        </a>            
    </div>
  );
};

export default Hero;
