import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../constants/site";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={siteConfig.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full bg-slate-900 py-4 text-center font-bold text-white"
        >
          <Phone size={18} />
          전화 문의
        </a>

        <a
          href={siteConfig.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 py-4 text-center font-bold text-white"
        >
          <MessageCircle size={18} />
          카카오톡 상담
        </a>
      </div>
    </div>
  );
}