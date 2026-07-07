const faqs = [
  {
    q: "분해세척은 일반 청소와 무엇이 다른가요?",
    a: "겉면만 닦는 방식이 아니라 커버, 필터, 내부 부품을 분리해 보이지 않는 오염까지 세척하는 방식입니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "전화 또는 카카오톡 상담으로 제품 종류, 설치 형태, 지역을 알려주시면 가능한 일정과 견적을 안내드립니다.",
  },
  {
    q: "작업 시간은 얼마나 걸리나요?",
    a: "제품 종류와 오염도에 따라 다르지만 에어컨 기준 보통 1~2시간 정도 소요됩니다.",
  },
  {
    q: "세척 후 바로 사용할 수 있나요?",
    a: "네. 작업 완료 후 정상 작동 확인까지 진행하며, 건조가 필요한 경우 사용 안내를 함께 드립니다.",
  },
  {
    q: "출장 가능 지역은 어디인가요?",
    a: "서울 및 경기 북부 지역을 중심으로 방문 서비스를 진행합니다. 일부 지역은 일정에 따라 조율이 필요할 수 있습니다.",
  },
  {
    q: "견적은 어떻게 결정되나요?",
    a: "제품 종류, 설치 환경, 오염도, 작업 난이도에 따라 달라집니다. 상담 시 사진을 보내주시면 더 정확한 안내가 가능합니다.",
  },
  {
    q: "작업 전 준비할 것이 있나요?",
    a: "제품 주변의 물건만 미리 치워주시면 됩니다. 세척에 필요한 장비와 자재는 Born Cares가 준비합니다.",
  },
  {
    q: "카드 결제나 현금영수증도 가능한가요?",
    a: "결제 방식은 상담 시 안내드립니다. 필요하신 증빙이 있다면 예약 단계에서 미리 말씀해 주세요.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <div className="mb-12 text-center">
          <p className="font-bold tracking-[0.3em] text-teal-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-950 lg:text-5xl">
            자주 묻는 질문
          </h2>

          <p className="mt-5 text-slate-500">
            예약 전 많이 궁금해하시는 내용을 정리했습니다.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-slate-950">
                {item.q}
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm text-teal-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 leading-7 text-slate-500">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}