import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/201558862770"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 left-4 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white
      shadow-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl"
    aria-label="تواصل عبر واتساب"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
