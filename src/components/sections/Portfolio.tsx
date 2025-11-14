// components/sections/Portfolio.tsx
"use client";
import Image from "next/image";
import MotionWrapper from "../MotionWrapper";

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
}

// 4 images per row
const row1Images: PortfolioImage[] = [
  { id: 1, src: "/portfolio/project-1.png", alt: "Project 1" },
  { id: 2, src: "/portfolio/project-2.png", alt: "Project 2" },
  { id: 3, src: "/portfolio/project-3.png", alt: "Project 3" },
  { id: 4, src: "/portfolio/project-4.png", alt: "Project 4" },
];

const row2Images: PortfolioImage[] = [
  { id: 5, src: "/portfolio/project-5.png", alt: "Project 5" },
  { id: 6, src: "/portfolio/project-6.png", alt: "Project 6" },
  { id: 7, src: "/portfolio/project-7.png", alt: "Project 7" },
  { id: 8, src: "/portfolio/project-8.png", alt: "Project 8" },
];

const row3Images: PortfolioImage[] = [
  { id: 9, src: "/portfolio/project-9.png", alt: "Project 9" },
  { id: 10, src: "/portfolio/project-10.png", alt: "Project 10" },
  { id: 11, src: "/portfolio/project-11.png", alt: "Project 11" },
  { id: 12, src: "/portfolio/project-12.png", alt: "Project 12" },
];

function ScrollingRow({ images, direction }: { images: PortfolioImage[], direction: "left" | "right" }) {
  // Duplicate images TWICE for seamless loop
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative overflow-hidden w-full">
      <div 
        className={`flex gap-6 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: 'fit-content' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative flex-shrink-0 w-[500px] h-[350px] md:w-[600px] md:h-[400px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 500px, 600px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-32 md:py-40 scroll-mt-20">
      <div className="mb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <MotionWrapper>
            <div className="inline-block border border-white/10 px-4 py-1.5 mb-6">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Our Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </MotionWrapper>
        </div>
      </div>

      {/* Scrolling Rows */}
      <div className="space-y-6">
        {/* Row 1 - Scroll Left */}
        <ScrollingRow images={row1Images} direction="left" />
        
        {/* Row 2 - Scroll Right */}
        <ScrollingRow images={row2Images} direction="right" />
        
        {/* Row 3 - Scroll Left */}
        <ScrollingRow images={row3Images} direction="left" />
      </div>
    </section>
  );
}
