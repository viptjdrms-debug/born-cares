import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../constants/site";

export default function MidCta() {
  return (
    <section className="bg-cyan-500 px-5 py-16 text-center text-white lg:py-20">
      <p className="font-bold tracking-[0.25em] text-cyan-100">
        QUICK CONSULT
      </p>

      <h2 className="mt-5 text-3xl font-black leading-tight lg:text-5xl">
        제품 사진만 보내도
        <br className="sm:hidden" /> 상담 가능합니다
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-cyan-50">
        에어컨 · 세탁기 · 건조기 · 제습기 · 청소기 · 공기청정기 상태를
        사진으로 보내주시면 빠르게 안내드립니다.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-slate-900"
        >
          <MessageCircle size={18} />
          빠른 상담 받기
        </a>

        <a
          href={siteConfig.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 font-black text-white"
        >
          <Phone size={18} />
          전화 문의
        </a>
      </div>
    </section>
  );
}