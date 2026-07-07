const steps = [
  {
    number: "01",
    title: "예약 접수",
    desc: "전화 또는 카카오톡으로 제품 종류와 희망 일정을 확인합니다.",
  },
  {
    number: "02",
    title: "방문 점검",
    desc: "예약 시간에 맞춰 방문 후 제품 상태와 오염도를 먼저 점검합니다.",
  },
  {
    number: "03",
    title: "분해 세척",
    desc: "제품별 구조에 맞춰 분해하고 내부 오염까지 꼼꼼하게 세척합니다.",
  },
  {
    number: "04",
    title: "조립 테스트",
    desc: "세척 후 조립하고 정상 작동 여부까지 확인합니다.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-12 text-center lg:mb-16">
          <p className="font-bold tracking-[0.3em] text-cyan-500">
            PROCESS
          </p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            상담부터 완료까지
          </h2>

          <p className="mt-5 text-slate-500">
            빠르고 체계적인 절차로 작업을 진행합니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <span className="text-5xl font-black text-cyan-500">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-black">{step.title}</h3>

              <p className="mt-4 leading-7 text-slate-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}