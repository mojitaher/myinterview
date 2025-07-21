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
      className={`flex justify-between items-center mt-[10%] gap-15  ${
        reverse ? "flex-row-reverse" : ""
      }`}
      ref={ref}
    >
      <div className="w-full text-center ">
        <p className="text-3xl dark:text-[#A0E5DC] text-[#444b52] drop-shadow-[0_0_2px_#00c2a8] leading-loose ">
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
