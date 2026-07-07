import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <div className="mb-6 text-7xl">🔍</div>

        <h1 className="text-5xl font-bold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          페이지를 찾을 수 없습니다.
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          요청하신 페이지가 삭제되었거나
          <br />
          주소가 변경되었을 수 있습니다.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-teal-500 px-8 py-3 font-semibold text-white transition hover:bg-teal-600"
          >
            홈으로 이동
          </Link>

          <Link
            href="/faq"
            className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            FAQ 보기
          </Link>
        </div>
      </div>
    </main>
  );
}