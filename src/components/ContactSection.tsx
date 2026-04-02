import { useState } from "react";
import { Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 section-fade ${isVisible ? "visible" : ""}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-muted-foreground text-lg">نسعد بتواصلك معنا لأي استفسار أو طلب</p>
          <div className="w-24 h-1 wood-gradient mx-auto mt-6 rounded-full" />
        </div>

        <div className={`grid md:grid-cols-2 gap-12 section-fade ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">الاسم</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="أدخل اسمك"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">رقم الهاتف</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="أدخل رقم هاتفك"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">الرسالة</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                placeholder="اكتب رسالتك هنا..."
              />
            </div>
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={18} />
              إرسال الرسالة
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full wood-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">رقم الهاتف</h3>
                  <p className="text-muted-foreground" dir="ltr">+20 100 123 4567</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border card-hover">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full wood-gradient flex items-center justify-center text-primary-foreground shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">عنوان الورشة</h3>
                  <p className="text-muted-foreground">شارع النجارين، المنطقة الصناعية، القاهرة</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/201001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/30 card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">واتساب مباشر</h3>
                <p className="text-muted-foreground">تواصل معنا عبر الواتساب الآن</p>
              </div>
            </a>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-xl p-4 border border-border text-center card-hover font-semibold text-primary"
              >
                فيسبوك
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-card rounded-xl p-4 border border-border text-center card-hover font-semibold text-primary"
              >
                إنستجرام
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
