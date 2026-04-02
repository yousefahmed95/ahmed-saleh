import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="أعمال نجارة فاخرة"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 opacity-0 animate-fade-in-up"
          style={{ color: "hsl(35, 30%, 97%)" }}
        >
          صناعة الموبيليات
          <br />
          <span className="text-gradient">بأيدي خبيرة</span>
        </h1>
        <p
          className="text-lg md:text-xl mb-10 opacity-0 animate-fade-in-up max-w-xl mx-auto"
          style={{ color: "hsl(35, 25%, 85%)", animationDelay: "0.2s" }}
        >
          نصنع لك أثاثاً يجمع بين الفخامة والمتانة، بأجود أنواع الأخشاب وأدق التفاصيل
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button onClick={scrollToCategories} className="btn-primary">
            تصفح الأعمال
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCategories}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "hsl(35, 30%, 85%)" }}
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default HeroSection;
