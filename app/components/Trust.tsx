import { Award, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const items = [
  {
    icon: Award,
    number: "5000+",
    title: "누적 작업",
    text: "다양한 가전제품 분해세척 경험을 바탕으로 안정적인 서비스를 제공합니다.",
  },
  {
    icon: ShieldCheck,
    number: "99%",
    title: "고객 만족",
    text: "작업 품질과 친절한 응대로 높은 만족도를 목표로 합니다.",
  },
  {
    icon: Sparkles,
    number: "100%",
    title: "분해세척",
    text: "보이지 않는 내부 오염까지 꼼꼼하게 관리합니다.",
  },
  {
    icon: Wrench,
    number: "6종",
    title: "전문 케어",
    text: "에어컨 세탁기 건조기 제습기 청소기 공기청정기까지 제품별 맞춤 케어를 제공합니다.",
  },
];

export default function Trust() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-14 text-center">
          <p className="font-bold tracking-[0.3em] text-cyan-400">
            WHY BORN CARES
          </p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            믿고 맡기는 이유
          </h2>

          <p className="mt-5 text-slate-400">
            단순 청소가 아닌 제품 수명과 위생까지 생각하는 프리미엄 케어
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-4xl font-black text-cyan-300">
                  {item.number}
                </h3>

                <h4 className="mt-4 text-xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}