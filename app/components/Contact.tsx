import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../constants/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-900 py-24 text-white lg:scroll-mt-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-6">
        <div>
          <p className="font-bold tracking-[0.3em] text-cyan-400">CONTACT</p>

          <h2 className="mt-5 text-4xl font-black leading-tight lg:text-5xl">
            지금 바로
            <br />
            상담받아보세요
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            제품 사진과 함께 문의주시면 제품 상태에 맞춰 빠르게 안내드립니다.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-slate-400">전화 문의</p>
              <p className="mt-2 text-3xl font-black">{siteConfig.phone}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-slate-900"
              >
                <Phone size={18} />
                전화 문의
              </a>

              <a
                href={siteConfig.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-4 font-black text-white"
              >
                <MessageCircle size={18} />
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>

        <form className="rounded-[32px] bg-white p-6 text-slate-900 shadow-2xl lg:p-8">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="성함"
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />

            <input
              type="tel"
              placeholder="연락처"
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />

            <select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500">
              <option>제품 선택</option>
              <option>에어컨</option>
              <option>세탁기</option>
              <option>건조기</option>
              <option>제습기</option>
              <option>청소기</option>
              <option>공기청정기</option>
            </select>

            <textarea
              placeholder="문의 내용"
              rows={5}
              className="resize-none rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
            />

            <button
              type="button"
              className="rounded-full bg-cyan-500 py-4 font-black text-white hover:bg-cyan-600"
            >
              상담 신청하기
            </button>

            <p className="text-center text-xs text-slate-400">
              현재 폼은 디자인용입니다. 실제 접수는 카카오톡 또는 전화 연결로 진행됩니다.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}