import { useLocation } from "react-router-dom";
import { Phone, MapPin, Heart } from "lucide-react";

const footerLinks = [
  { label: "الرئيسية", path: "/" },
  { label: "الأقسام", path: "/#categories" },
  { label: "من نحن", path: "/#about" },
  { label: "تواصل معنا", path: "/#contact" },
];

const Footer = () => {
  const location = useLocation();

  const handleClick = (path: string) => {
    if (path === "/") {
      if (location.pathname !== "/") {
        window.location.href = "/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname !== "/") {
        window.location.href = path;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gradient mb-4">المعلم للموبيليات</h3>
          <p className="text-muted-foreground leading-relaxed">
            صناعة أثاث خشبي فاخر بأيدي خبيرة منذ أكثر من 25 عاماً
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4">روابط سريعة</h4>
          <div className="flex flex-col gap-2">
            {footerLinks.map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item.path)}
                className="text-right text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">معلومات التواصل</h4>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span dir="ltr">+20 100 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>شارع النجارين، القاهرة</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
        <p className="flex items-center justify-center gap-1">
          جميع الحقوق محفوظة © {new Date().getFullYear()} المعلم للموبيليات
          <Heart size={14} className="text-primary" />
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
