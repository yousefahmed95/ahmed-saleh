export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  woodType: string;
  paintType: string;
  dimensions: string;
  customNote: string;
  features: string[];
  image: string;
  gallery: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "kitchens",
    name: "المطابخ",
    icon: "ChefHat",
    description: "مطابخ عصرية بتصاميم فريدة وعملية",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
  },
  {
    id: "bedrooms",
    name: "غرف النوم",
    icon: "Bed",
    description: "غرف نوم أنيقة توفر الراحة والفخامة",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
  },
  {
    id: "kids-bedrooms",
    name: "غرف نوم أطفال",
    icon: "Baby",
    description: "غرف مرحة وآمنة لأطفالك",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
  },
  {
    id: "living-rooms",
    name: "الأنتريهات",
    icon: "Sofa",
    description: "أنتريهات فاخرة لاستقبال ضيوفك",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    id: "dining",
    name: "السفرة",
    icon: "UtensilsCrossed",
    description: "طاولات سفرة أنيقة لأوقات عائلية مميزة",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
  },
  {
    id: "desks",
    name: "المكاتب",
    icon: "Monitor",
    description: "مكاتب عملية بتصاميم عصرية",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
  },
  {
    id: "libraries",
    name: "المكتبات",
    icon: "BookOpen",
    description: "مكتبات خشبية أنيقة لتنظيم كتبك",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
  },
  {
    id: "corners",
    name: "الركنات",
    icon: "Armchair",
    description: "ركنات عصرية تناسب مساحة منزلك وتوفر الراحة",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    id: "niche",
    name: "النيش",
    icon: "Lamp",
    description: "نيش فاخر لعرض التحف والمقتنيات بأناقة",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
];

export const products: Product[] = [
  // المطابخ
  {
    id: "k1",
    name: "مطبخ كلاسيكي فاخر",
    category: "kitchens",
    price: 45000,
    description: "مطبخ خشبي كلاسيكي بتصميم فاخر مع وحدات تخزين واسعة وسطح رخامي أنيق",
    woodType: "خشب زان",
    dimensions: "3.5م × 2.5م",
    features: ["وحدات تخزين واسعة", "سطح رخامي", "إضاءة LED مدمجة", "مقابض نحاسية"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    ],
  },
  {
    id: "k2",
    name: "مطبخ مودرن أبيض",
    category: "kitchens",
    price: 38000,
    description: "مطبخ عصري بلمسات بيضاء أنيقة وتصميم مينيمالي",
    woodType: "MDF عالي الجودة",
    dimensions: "4م × 2م",
    features: ["تصميم مينيمالي", "أدراج سحب ناعمة", "فرن مدمج", "شفاط حديث"],
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    ],
  },
  {
    id: "k3",
    name: "مطبخ خشب أرو",
    category: "kitchens",
    price: 55000,
    description: "مطبخ فخم من خشب الأرو الطبيعي بنقوشات يدوية",
    woodType: "خشب أرو",
    dimensions: "4.5م × 3م",
    features: ["نقوشات يدوية", "خشب طبيعي 100%", "تشطيب لاكيه", "جزيرة مطبخ"],
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
    ],
  },
  // غرف النوم
  {
    id: "b1",
    name: "غرفة نوم رويال",
    category: "bedrooms",
    price: 65000,
    description: "غرفة نوم فاخرة بتصميم ملكي مع سرير كينج وخزانة واسعة",
    woodType: "خشب زان أحمر",
    dimensions: "سرير 200×180 سم",
    features: ["سرير كينج سايز", "خزانة 6 أبواب", "تسريحة بمرآة", "2 كومودينو"],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  {
    id: "b2",
    name: "غرفة نوم مودرن",
    category: "bedrooms",
    price: 42000,
    description: "غرفة نوم عصرية بخطوط بسيطة وألوان هادئة",
    woodType: "خشب MDF + لاميناتو",
    dimensions: "سرير 200×160 سم",
    features: ["تصميم عصري", "إضاءة خلفية", "خزانة جرّارة", "ألوان متعددة"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  // غرف أطفال
  {
    id: "kb1",
    name: "غرفة أطفال سماوية",
    category: "kids-bedrooms",
    price: 28000,
    description: "غرفة أطفال بألوان سماوية مبهجة وتصميم آمن",
    woodType: "خشب MDF مقاوم للرطوبة",
    dimensions: "سرير 190×90 سم",
    features: ["حواف آمنة", "ألوان مبهجة", "مكتب دراسة", "دولاب واسع"],
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    ],
  },
  {
    id: "kb2",
    name: "غرفة أطفال دورين",
    category: "kids-bedrooms",
    price: 32000,
    description: "غرفة بسرير دورين عملية لتوفير المساحة",
    woodType: "خشب زان",
    dimensions: "سرير دورين 190×90 سم",
    features: ["سرير دورين", "سلم آمن", "أدراج تخزين", "مكتب ملحق"],
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    gallery: [],
  },
  // الأنتريهات
  {
    id: "lr1",
    name: "أنتريه كلاسيكي",
    category: "living-rooms",
    price: 35000,
    description: "طقم أنتريه كلاسيكي فاخر بقماش مخمل",
    woodType: "خشب زان معالج",
    dimensions: "3 قطع + ترابيزة",
    features: ["قماش مخمل", "نقوشات يدوية", "هيكل خشب زان", "وسائد إضافية"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
  },
  {
    id: "lr2",
    name: "أنتريه مودرن L",
    category: "living-rooms",
    price: 28000,
    description: "كنبة على شكل L بتصميم عصري مريح",
    woodType: "هيكل معدني + خشب",
    dimensions: "3م × 2م",
    features: ["تصميم L شيب", "قماش مقاوم للبقع", "وسائد قابلة للغسل", "مساند ذراع"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    gallery: [],
  },
  // السفرة
  {
    id: "d1",
    name: "سفرة 8 كراسي كلاسيك",
    category: "dining",
    price: 40000,
    description: "طاولة سفرة فاخرة تتسع لـ 8 أشخاص بتصميم كلاسيكي",
    woodType: "خشب أرو طبيعي",
    dimensions: "220×100 سم",
    features: ["8 كراسي", "نقوشات خشبية", "سطح لامع", "قاعدة متينة"],
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    gallery: [],
  },
  {
    id: "d2",
    name: "سفرة مودرن 6 كراسي",
    category: "dining",
    price: 25000,
    description: "سفرة عصرية بتصميم بسيط وأنيق",
    woodType: "خشب زان + زجاج",
    dimensions: "180×90 سم",
    features: ["6 كراسي", "سطح زجاجي", "أرجل خشبية", "تصميم بسيط"],
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    gallery: [],
  },
  // المكاتب
  {
    id: "dk1",
    name: "مكتب تنفيذي فاخر",
    category: "desks",
    price: 18000,
    description: "مكتب تنفيذي بتصميم فخم مناسب للمكاتب الرئيسية",
    woodType: "خشب زان طبيعي",
    dimensions: "160×80 سم",
    features: ["أدراج جانبية", "سطح جلد", "فتحات كابلات", "تصميم كلاسيكي"],
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    ],
  },
  {
    id: "dk2",
    name: "مكتب دراسة شبابي",
    category: "desks",
    price: 8000,
    description: "مكتب دراسة عملي بتصميم شبابي عصري",
    woodType: "MDF عالي الكثافة",
    dimensions: "120×60 سم",
    features: ["رف كتب علوي", "درج قلم", "فتحة كابلات", "ألوان متعددة"],
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    gallery: [],
  },
  // المكتبات
  {
    id: "lib1",
    name: "مكتبة حائط كلاسيكية",
    category: "libraries",
    price: 22000,
    description: "مكتبة حائط كبيرة بتصميم كلاسيكي فخم",
    woodType: "خشب زان أحمر",
    dimensions: "300×40×220 سم",
    features: ["6 أرفف قابلة للتعديل", "أبواب زجاجية", "إضاءة داخلية", "نقوشات كلاسيكية"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    gallery: [],
  },
  {
    id: "lib2",
    name: "مكتبة مودرن مفتوحة",
    category: "libraries",
    price: 12000,
    description: "مكتبة مفتوحة بتصميم عصري مينيمالي",
    woodType: "خشب MDF + معدن",
    dimensions: "180×35×200 سم",
    features: ["تصميم مفتوح", "هيكل معدني", "أرفف خشبية", "سهلة التركيب"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    gallery: [],
  },
  // الركنات
  {
    id: "c1",
    name: "ركنة حرف L مودرن",
    category: "corners",
    price: 22000,
    description: "ركنة على شكل حرف L بتصميم عصري مريح تناسب المساحات المختلفة",
    woodType: "هيكل خشب زان",
    dimensions: "3م × 2م",
    features: ["تصميم L شيب", "قماش مقاوم للبقع", "وسائد قابلة للغسل", "توفير مساحة"],
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    gallery: [],
  },
  {
    id: "c2",
    name: "ركنة حرف U عائلية",
    category: "corners",
    price: 30000,
    description: "ركنة كبيرة على شكل حرف U مثالية للعائلات الكبيرة",
    woodType: "هيكل خشب زان معالج",
    dimensions: "4م × 3م",
    features: ["تصميم U شيب", "مساند إضافية", "قماش فاخر", "مناسبة للمساحات الكبيرة"],
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    gallery: [],
  },
  // النيش
  {
    id: "n1",
    name: "نيش كلاسيكي فاخر",
    category: "niche",
    price: 18000,
    description: "نيش كلاسيكي بنقوشات يدوية وأبواب زجاجية لعرض التحف",
    woodType: "خشب زان أحمر",
    dimensions: "180×45×200 سم",
    features: ["أبواب زجاجية", "إضاءة داخلية", "نقوشات يدوية", "أرفف قابلة للتعديل"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    gallery: [],
  },
  {
    id: "n2",
    name: "نيش مودرن بسيط",
    category: "niche",
    price: 12000,
    description: "نيش عصري بتصميم مينيمالي أنيق",
    woodType: "MDF عالي الجودة",
    dimensions: "160×40×190 سم",
    features: ["تصميم بسيط", "ألوان متعددة", "سهل التركيب", "مساحة تخزين واسعة"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    gallery: [],
  },
];
