import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

type props = {
  image: StaticImageData;
  text: string;
  reverse: boolean;
};
export default function ProjectCard({ image, text, reverse }: props) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);
  return (
    <div
      className={`flex justify-between items-center mt-[10%] gap-15 ${
        reverse ? "flex-row-reverse" : ""
      }`}
      ref={ref}
    >
      <div className="w-full text-center">
        <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-loose ">
          {text}
        </p>
      </div>
      <div className="relative w-full h-[350px]">
        <Image
          src={image}
          alt="logo"
          placeholder="blur"
          fill
          className={`object-cover rounded-lg transition-all duration-[1000ms] ${
            loaded ? "blur-0 " : "blur-md "
          }`}
        />
      </div>
    </div>
  );
}
