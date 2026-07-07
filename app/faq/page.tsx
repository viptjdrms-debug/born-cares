import Link from "next/link";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../constants/site";

const faqs = [
  {
    q: "분해세척은 일반 청소와 무엇이 다른가요?",
    a: "겉면만 닦는 청소가 아니라 제품을 분해해 내부 오염, 곰팡이, 먼지까지 세척하는 서비스입니다.",
  },
  {
    q: "예약은 어떻게 진행되나요?",
    a: "전화 또는 카카오톡으로 제품 종류, 지역, 희망 일정을 알려주시면 상담 후 예약을 확정합니다.",
  },
  {
    q: "작업 시간은 얼마나 걸리나요?",
    a: "제품 종류와 오염도에 따라 다르지만 에어컨 기준 보통 1~2시간 정도 소요됩니다.",
  },
  {
    q: "작업 전 준비할 것이 있나요?",
    a: "제품 주변 물건만 치워주시면 됩니다. 세척 장비와 필요한 자재는 Born Cares가 준비합니다.",
  },
  {
    q: "세척 후 바로 사용할 수 있나요?",
    a: "네. 작업 완료 후 정상 작동 확인까지 진행하며, 필요한 경우 건조 및 사용 안내를 드립니다.",
  },
  {
    q: "출장 가능 지역은 어디인가요?",
    a: "서울 및 경기 북부 지역을 중심으로 방문 서비스를 진행합니다. 일부 지역은 상담 후 조율 가능합니다.",
  },
  {
    q: "견적은 어떻게 결정되나요?",
    a: "제품 종류, 설치 환경, 오염도, 작업 난이도에 따라 달라집니다. 사진을 보내주시면 더 정확한 안내가 가능합니다.",
  },
  {
    q: "문의는 어디로 하면 되나요?",
    a: "전화 또는 카카오톡 상담으로 빠르게 문의하실 수 있습니다.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-bold tracking-[0.35em] text-teal-300">
            BORN CARES FAQ
          </p>

          <h1 className="mt-6 text-4xl font-black leading-tight lg:text-6xl">
            자주 묻는 질문
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            예약 전 궁금한 내용을 한눈에 확인하실 수 있습니다.
            더 자세한 상담은 전화 또는 카카오톡으로 문의해 주세요.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
            >
              <Phone size={20} />
              전화 문의
            </a>

            <a
              href={siteConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-4 font-bold text-white transition hover:bg-teal-400"
            >
              <MessageCircle size={20} />
              카카오 상담
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
            <p className="text-sm font-bold tracking-[0.25em] text-teal-500">
              GUIDE
            </p>

            <h2 className="mt-4 text-3xl font-black">
              상담 전 확인사항
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "제품 종류 확인",
                "설치 형태 확인",
                "방문 지역 확인",
                "희망 일정 확인",
                "오염 상태 사진 준비",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-teal-500" size={22} />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm text-slate-400">운영시간</p>
              <p className="mt-2 text-2xl font-black">{siteConfig.hours}</p>
              <p className="mt-4 text-sm text-slate-400">출장지역</p>
              <p className="mt-2 font-bold">{siteConfig.area}</p>
            </div>
          </aside>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-black">
                  {item.q}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-teal-500 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 leading-8 text-slate-500">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-slate-950 p-10 text-center text-white shadow-2xl lg:p-16">
          <p className="font-bold tracking-[0.3em] text-teal-300">
            CONTACT
          </p>

          <h2 className="mt-5 text-3xl font-black lg:text-5xl">
            아직 궁금한 점이 있으신가요?
          </h2>

          <p className="mt-5 text-slate-300">
            제품 사진과 설치 환경을 보내주시면 더 정확하게 안내드립니다.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-white px-8 py-4 font-bold text-slate-950"
            >
              전화 문의하기
            </a>

            <a
              href={siteConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-500 px-8 py-4 font-bold text-white"
            >
              카카오톡 상담
            </a>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-sm font-bold text-slate-400 underline">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}