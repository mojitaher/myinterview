import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectImg from "../../public/img/slideW.png";
import projectImg2 from "../../public/img/hack (1).png";
import projectImg3 from "../../public/img/project (1).png";
import capsoul from "../../public/img/capsoul1 (3).png";
import Image from "next/image";

const slides = [
  { id: 1, img: capsoul, title: "Skill Capsoul" },
  {
    id: 2,
    img: projectImg,
    title: "Weather Page",
    text: "Responsive Weather Website",
  },
  { id: 3, img: projectImg2, title: "Hack project", text: "Dashbord UI" },
  {
    id: 4,
    img: projectImg3,
    title: "IMDB Website",
    text: "Website With InfinityScroll and IMDB Films",
  },
];
export default function ProjectSilder() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onselect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onselect);
    onselect();

    return () => {
      emblaApi.off("select", onselect); // پاکسازی event listener
    };
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (typeof window === "undefined") return; // فقط سمت کلاینت
    if (!emblaApi) return;

    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return; // فقط سمت کلاینت
    startAutoplay();
    return () => stopAutoplay();
  }, [emblaApi]);
  return (
    <div className="w-full flex flex-col items-center mt-16">
      {/* Slider */}
      <div className="overflow-hidden w-full max-w-5xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_80%] sm:flex-[0_0_60%] mx-4 rounded-2xl overflow-hidden shadow-xl"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                className={`object-cover transition-all duration-500 w-full h-[400px] ${
                  slide.id - 1 == selectedIndex ? "hover:scale-125" : ""
                }`}
              />
              {/* Glass Effect Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md">
                <h2 className="text-white text-2xl font-semibold">
                  {slide.title}
                </h2>
                <p className="text-white/80 text-sm">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex space-x-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi.scrollTo(i)}
            className={`w-3 h-3 rounded-full  hover:bg-white ${
              i == selectedIndex ? "bg-blue-400" : "bg-white/50"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
