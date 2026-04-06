import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Ruler, TreePine, Star, Check, Paintbrush, Info } from "lucide-react";
import { products, categories } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageZoom from "@/components/ImageZoom";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>المنتج غير موجود</p>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const allImages = product.gallery.length > 0 ? product.gallery : [product.image];

  const whatsappMsg = encodeURIComponent(
    `مرحباً، أنا مهتم بمنتج: ${product.name}\nالسعر: ${product.price.toLocaleString("ar-EG")} ج.م`
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ArrowRight size={14} className="rotate-180" />
            <Link to={`/category/${product.category}`} className="hover:text-primary transition-colors">
              {category?.name}
            </Link>
            <ArrowRight size={14} className="rotate-180" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Gallery */}
            <div>
              <ImageZoom
                src={allImages[selectedImage]}
                alt={product.name}
                allImages={allImages}
                selectedIndex={selectedImage}
                onChangeIndex={setSelectedImage}
              />
              {allImages.length > 1 && (
                <div className="flex gap-3">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        i === selectedImage ? "border-primary" : "border-border opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-black text-gradient mb-6">
                يبدأ من {product.price.toLocaleString("ar-EG")} ج.م
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                  <TreePine size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">نوع الخشب</span>
                    <span className="font-semibold text-sm">{product.woodType}</span>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                  <Paintbrush size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">نوع الدهانات</span>
                    <span className="font-semibold text-sm">{product.paintType}</span>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                  <Ruler size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">المقاسات</span>
                    <span className="font-semibold text-sm">{product.dimensions}</span>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                  <Info size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="text-xs text-muted-foreground block">ملاحظة</span>
                    <span className="font-semibold text-sm">{product.customNote}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Star size={18} className="text-gold" />
                  مميزات المنتج
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/201001234567?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={22} />
                تواصل لطلب المنتج
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
