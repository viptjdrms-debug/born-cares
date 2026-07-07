"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "에어컨 분해세척은 얼마나 걸리나요?",
    a: "벽걸이는 약 1~2시간, 스탠드 및 시스템 에어컨은 제품 종류에 따라 2~4시간 정도 소요됩니다.",
  },
  {
    q: "세탁기는 완전 분해해서 청소하나요?",
    a: "제품 상태를 확인한 뒤 내부 오염까지 확인하며 분해세척을 진행합니다.",
  },
  {
    q: "건조기 먼지와 콘덴서도 청소 가능한가요?",
    a: "가능합니다. 내부 먼지 제거와 함께 제품 상태를 점검해 성능 저하를 예방합니다.",
  },
  {
    q: "서울·경기 외 지역도 가능한가요?",
    a: "예약 상황에 따라 가능 여부가 달라질 수 있으니 전화 또는 카카오톡으로 문의해주세요.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-6">
        <div className="mb-12 text-center">
          <p className="font-bold tracking-[0.3em] text-cyan-500">FAQ</p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            자주 묻는 질문
          </h2>

          <p className="mt-5 text-slate-500">
            상담 전에 많이 확인하시는 내용을 정리했습니다.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left font-black text-slate-900"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={22}
                  className={`shrink-0 text-cyan-500 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-200 px-6 py-5 leading-7 text-slate-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}