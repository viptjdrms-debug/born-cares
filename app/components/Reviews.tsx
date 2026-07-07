import { Star } from "lucide-react";

const reviews = [
  {
    product: "에어컨",
    review: "곰팡이 냄새가 사라졌고 바람도 훨씬 시원해졌어요.",
    name: "의정부 고객",
  },
  {
    product: "세탁기",
    review: "분해해서 보여주시니 안심됐고 내부가 새것처럼 깨끗해졌어요.",
    name: "남양주 고객",
  },
  {
    product: "건조기",
    review: "먼지가 많이 제거됐고 건조 성능도 좋아진 것 같습니다.",
    name: "서울 고객",
  },
];

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-12 text-center lg:mb-16">
          <p className="font-bold tracking-[0.3em] text-cyan-500">REVIEW</p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            고객 후기
          </h2>

          <p className="mt-5 text-slate-500">
            실제 상담 전환에 잘 맞는 짧고 신뢰감 있는 후기 구성입니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((item) => (
            <div key={item.product} className="rounded-[28px] bg-white p-8 shadow-lg">
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-600">
                {item.product}
              </span>

              <div className="mt-6 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 leading-8 text-slate-600">"{item.review}"</p>

              <p className="mt-6 font-black text-slate-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}