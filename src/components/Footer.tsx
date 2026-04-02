import { Link } from "react-router-dom";
import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => (
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
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link>
            <Link to="/#categories" className="text-muted-foreground hover:text-primary transition-colors">الأقسام</Link>
            <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">من نحن</Link>
            <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors">تواصل معنا</Link>
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

export default Footer;
