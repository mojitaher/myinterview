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
      className={`flex lg:flex-row md:flex-row justify-between items-center mt-[10%] gap-15 flex-col  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      ref={ref}
    >
      <div className="w-full text-center ">
        <p className="lg:text-3xl dark:text-[#A0E5DC] text-[#444b52] drop-shadow-[0_0_2px_#00c2a8] leading-loose sm:text-2xl ">
          {text}
        </p>
      </div>
      <div className="relative w-full lg:h-[350px] md:h-[350px] h-[100px]">
        <Image
          src={image}
          alt="logo"
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover rounded-lg transition-all duration-[1000ms] ${
            loaded ? "blur-0 " : "blur-md "
          }`}
        />
      </div>
    </div>
  );
}
