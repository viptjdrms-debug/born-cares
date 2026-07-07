"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { faqCategories, faqData } from "../data/faqs";
import type { FAQCategory } from "../data/faqs";

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("aircon");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const totalCount = Object.values(faqData).reduce(
    (sum, items) => sum + items.length,
    0
  );

  const filteredFaqs = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return faqData[activeCategory].filter((item) => {
      return (
        item.q.toLowerCase().includes(keyword) ||
        item.a.toLowerCase().includes(keyword)
      );
    });
  }, [activeCategory, search]);

  const previewFaqs = filteredFaqs.slice(0, 5);

  const activeCategoryLabel =
    faqCategories.find((category) => category.id === activeCategory)?.label ??
    "FAQ";

  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <div className="mb-10 text-center">
          <p className="font-bold tracking-[0.3em] text-teal-500">FAQ</p>

          <h2 className="mt-4 text-4xl font-black text-slate-950 lg:text-5xl">
            자주 묻는 질문
          </h2>

          <p className="mt-5 text-slate-500">
            제품별 대표 질문 5개를 먼저 확인해보세요.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="대표 FAQ에서 검색해보세요"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
            />

            <p className="mt-3 text-sm text-slate-500">
              전체 {totalCount}개 FAQ 중 {activeCategoryLabel} 대표 질문{" "}
              {previewFaqs.length}개 표시
            </p>
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(0);
                setSearch("");
              }}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                activeCategory === category.id
                  ? "bg-slate-950 text-white"
                  : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className="text-xs opacity-70">
                {faqData[category.id].length}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {previewFaqs.length > 0 ? (
            previewFaqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${activeCategory}-${item.q}-${index}`}
                  className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left text-lg font-bold text-slate-950"
                  >
                    <span>{item.q}</span>

                    <span
                      className={`shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm text-teal-500 transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 leading-7 text-slate-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
              <div className="text-4xl">🔍</div>

              <p className="mt-4 text-lg font-black text-slate-950">
                검색 결과가 없습니다.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                다른 검색어를 입력해보세요.
              </p>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/faq?category=${activeCategory}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {activeCategoryLabel} 전체 FAQ 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}