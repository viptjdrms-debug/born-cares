import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "에어컨",
    desc: "벽걸이 · 스탠드 · 시스템에어컨",
    image: "/images/services/aircon.jpg",
  },
  {
    title: "세탁기",
    desc: "드럼 · 통돌이 분해세척",
    image: "/images/services/washer.jpg",
  },
  {
    title: "건조기",
    desc: "히트펌프 · 콘덴서 케어",
    image: "/images/services/dryer.jpg",
  },
  {
    title: "제습기",
    desc: "내부 살균 · 냄새 제거",
    image: "/images/services/dehumidifier.jpg",
  },
  {
    title: "청소기",
    desc: "무선 · 내부 오염 제거",
    image: "/images/services/vacuum.jpg",
  },
  {
    title: "공기청정기",
    desc: "팬 · 내부 오염 제거",
    image: "/images/services/airpurifier.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-12 text-center lg:mb-16">
          <p className="font-bold uppercase tracking-[0.3em] text-cyan-500">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-black lg:text-5xl">
            제품별 전문 케어
          </h2>

          <p className="mt-5 text-slate-500">
            가전 구조에 맞춘 분해세척으로 내부 오염까지 관리합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item) => (
            <a
              key={item.title}
              href="#contact"
              className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-3xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6">
                <span className="font-bold text-slate-700">
                  무료 견적 문의
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white transition group-hover:bg-slate-900">
                  <ArrowRight size={18} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}