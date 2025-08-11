import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { Heart } from "lucide-react";

const slides = [
  { id: 1, title: "Fine line florals", note: "delicate & minimal" },
  { id: 2, title: "Tiny scripts", note: "personal quotes" },
  { id: 3, title: "Geometric shapes", note: "clean + balanced" },
  { id: 4, title: "Mini symbols", note: "subtle statements" },
];

const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef} aria-label="Featured tattoo styles">
      <div className="flex gap-4">
        {slides.map((s) => (
          <article
            key={s.id}
            className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] rounded-xl border border-border bg-card/70 backdrop-blur tape-effect hover-scale"
          >
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-t-xl flex items-center justify-center">
              <Heart className="h-10 w-10 text-primary" aria-hidden="true" />
            </div>
            <div className="p-4">
              <h3 className="font-handwritten text-xl text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
