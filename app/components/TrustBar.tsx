import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "전문 기사 방문",
  },
  {
    icon: ShieldCheck,
    title: "제품별 맞춤 분해세척",
  },
  {
    icon: Clock3,
    title: "빠른 상담",
  },
  {
    icon: Wrench,
    title: "사후관리 안내",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-5 lg:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-3 rounded-2xl bg-slate-50 p-4"
              >
                <Icon className="text-cyan-500" size={22} />
                <span className="text-sm font-bold text-slate-700 lg:text-base">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}