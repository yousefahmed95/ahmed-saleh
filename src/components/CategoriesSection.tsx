import { useNavigate } from "react-router-dom";
import { categories } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChefHat, Bed, Baby, Sofa, UtensilsCrossed, Monitor, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat size={32} />,
  Bed: <Bed size={32} />,
  Baby: <Baby size={32} />,
  Sofa: <Sofa size={32} />,
  UtensilsCrossed: <UtensilsCrossed size={32} />,
  Monitor: <Monitor size={32} />,
  BookOpen: <BookOpen size={32} />,
};

const CategoriesSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="categories" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 section-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">أقسام الموبيليات</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر القسم الذي تبحث عنه واستكشف مجموعة متنوعة من التصاميم الفاخرة
          </p>
          <div className="w-24 h-1 wood-gradient mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className={`group relative overflow-hidden rounded-xl bg-card border border-border card-hover
                section-fade ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="product-card-overlay" />
              </div>
              <div className="p-4 text-center">
                <div className="text-primary mb-2 flex justify-center">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="font-bold text-lg">{cat.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 hidden sm:block">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
