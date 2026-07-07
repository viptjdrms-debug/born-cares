"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { faqCategories, faqData } from "../data/faqs";
import type { FAQCategory } from "../data/faqs";
import { siteConfig } from "../constants/site";

type FAQClientProps = {
  initialCategory: FAQCategory;
};

export default function FAQClient({ initialCategory }: FAQClientProps) {
  const router = useRouter();

  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>(initialCategory);

  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setActiveCategory(initialCategory);
    setSearch("");
    setOpenIndex(0);
  }, [initialCategory]);

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setSearch("");
    setOpenIndex(0);
    router.push(`/faq?category=${category}`, { scroll: false });
  };

  const filteredFaqs = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return faqData[activeCategory].filter((item) => {
      return (
        item.q.toLowerCase().includes(keyword) ||
        item.a.toLowerCase().includes(keyword)
      );
    });
  }, [activeCategory, search]);

  const activeCategoryInfo =
    faqCategories.find((category) => category.id === activeCategory) ??
    faqCategories[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filteredFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="px-5 pb-12 pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
            Born Cares FAQ
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            {activeCategoryInfo.icon} {activeCategoryInfo.label} FAQ
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {activeCategoryInfo.label} 홈케어 서비스 전 궁금한 내용을 빠르게
            확인해보세요.
          </p>

          <div className="mx-auto mt-8 max-w-2xl">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(0);
              }}
              placeholder={`${activeCategoryInfo.label} FAQ에서 검색해보세요`}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100"
            />

            <p className="mt-3 text-sm text-slate-500">
              총 {faqData[activeCategory].length}개의 FAQ · 검색 결과{" "}
              {filteredFaqs.length}개
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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

          <div className="grid gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    id={`faq-${index}`}
                    key={`${activeCategory}-${item.q}-${index}`}
                    className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-slate-900 md:text-lg">
                        {item.q}
                      </span>

                      <span className="text-2xl text-teal-600">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-sm leading-7 text-slate-600 md:text-base">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center">
                <div className="text-4xl">🔍</div>

                <p className="mt-4 text-lg font-bold text-slate-900">
                  검색 결과가 없습니다.
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  다른 검색어를 입력해보세요.
                </p>
              </div>
            )}
          </div>

          <div className="mt-14 rounded-3xl bg-slate-900 px-6 py-10 text-center text-white md:px-10">
            <h2 className="text-2xl font-bold">
              원하는 답변을 찾지 못하셨나요?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
              제품 상태와 사용 환경에 따라 필요한 관리 방식이 달라질 수 있습니다.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
              >
                전화 상담
              </a>

              <a
                href={siteConfig.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-400"
              >
                카카오톡 상담
              </a>

              <a
                href="/#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}