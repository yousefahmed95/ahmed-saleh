import { Award, Clock, Users, Hammer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import workshopImg from "@/assets/workshop.jpg";

const stats = [
  { icon: <Clock size={28} />, value: "+25", label: "سنة خبرة" },
  { icon: <Users size={28} />, value: "+1500", label: "عميل سعيد" },
  { icon: <Hammer size={28} />, value: "+3000", label: "مشروع منجز" },
  { icon: <Award size={28} />, value: "+50", label: "تصميم حصري" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`grid md:grid-cols-2 gap-12 items-center section-fade ${isVisible ? "visible" : ""}`}>
          {/* Image */}
          <div className="relative">
            <img
              src={workshopImg}
              alt="ورشة النجارة"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 wood-gradient text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <span className="text-3xl font-black">+25</span>
              <span className="block text-sm">سنة خبرة</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">من نحن</h2>
            <div className="w-16 h-1 wood-gradient rounded-full mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              نحن ورشة <strong className="text-foreground">المعلم للموبيليات</strong>، نعمل في مجال صناعة الأثاث الخشبي منذ أكثر من 25 عاماً.
              نجمع بين الحرفية التقليدية والتصاميم العصرية لنقدم لعملائنا أثاثاً يدوم لسنوات.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نستخدم أجود أنواع الأخشاب الطبيعية ونهتم بأدق التفاصيل في كل قطعة نصنعها.
              رضا عملائنا هو أولويتنا وهدفنا دائماً.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 border border-border text-center card-hover">
                  <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-black text-gradient">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
