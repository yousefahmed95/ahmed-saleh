import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 left-4 z-40 w-12 h-12 rounded-full wood-gradient text-primary-foreground
        shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-fade-in"
      aria-label="العودة للأعلى"
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTop;
