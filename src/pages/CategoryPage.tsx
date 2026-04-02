import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { categories, products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const category = categories.find((c) => c.id === id);
  const categoryProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === id);
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.includes(search) || p.description.includes(search)
      );
    }
    if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [id, search, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>القسم غير موجود</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Header */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold" style={{ color: "hsl(35,30%,97%)" }}>
                {category.name}
              </h1>
              <p className="mt-2 text-lg" style={{ color: "hsl(35,25%,80%)" }}>{category.description}</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ArrowRight size={14} className="rotate-180" />
            <span className="text-foreground font-medium">{category.name}</span>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن منتج..."
                className="w-full pr-10 pl-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-lg bg-card border border-border focus:ring-2 focus:ring-primary/30 outline-none"
            >
              <option value="default">ترتيب حسب</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 pb-20">
          {categoryProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-xl">لا توجد منتجات مطابقة</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group bg-card rounded-xl border border-border overflow-hidden card-hover text-right"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="product-card-overlay" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-gradient">
                        {product.price.toLocaleString("ar-EG")} ج.م
                      </span>
                      <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {product.woodType}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
