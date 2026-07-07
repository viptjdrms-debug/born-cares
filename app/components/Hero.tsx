import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { siteConfig } from "../constants/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-6 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-bold tracking-[0.25em] text-cyan-300">
              PREMIUM APPLIANCE CARE
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight lg:text-7xl">
              가전의 속까지
              <br />
              <span className="text-cyan-300">프리미엄 케어</span>
            </h1>

            <p className="mt-6 text-lg font-semibold text-slate-200">
              {siteConfig.area} 출장 전문 · {siteConfig.hours}
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              에어컨, 세탁기, 건조기, 제습기, 청소기, 공기청정기까지
              제품별 구조에 맞춰 분해세척과 유지관리를 진행합니다.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2">
              {["제품별 맞춤 분해세척", "고급주택 · 병원 · 기업 대응", "서울 · 경기 북부 출장", "전화 · 카카오 빠른 상담"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-cyan-300" />
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-8 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300"
              >
                무료 견적받기
              </a>

              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                <Phone size={18} />
                전화 상담
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
              <Image
                src="/images/hero/main.jpg"
                alt="Born Cares 프리미엄 가전 홈케어"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-white/90 p-5 text-slate-900 shadow-xl backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-black text-cyan-500">5000+</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    누적 작업
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-cyan-500">99%</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    고객 만족
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-black text-cyan-500">6종</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    전문 케어
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}