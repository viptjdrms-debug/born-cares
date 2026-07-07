"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 bg-slate-100 py-24 lg:scroll-mt-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-12 text-center lg:mb-16">
          <p className="font-bold tracking-[0.3em] text-cyan-500">
            BEFORE & AFTER
          </p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            작업 전 · 후 비교
          </h2>

          <p className="mt-5 text-slate-500">
            슬라이더를 움직여 세척 전후 차이를 확인해보세요.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-slate-900 shadow-2xl">
            <Image
              src="/images/before-after/after.jpg"
              alt="세척 후"
              fill
              className="object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <Image
                src="/images/before-after/before.jpg"
                alt="세척 전"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute bottom-0 top-0 w-1 bg-white"
              style={{ left: `${position}%` }}
            />

            <div
              className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-black shadow-xl"
              style={{ left: `${position}%` }}
            >
              ↔
            </div>

            <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-red-500">
              BEFORE
            </div>

            <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-cyan-500">
              AFTER
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              aria-label="Before After Slider"
            />
          </div>

          <div className="mt-8 rounded-[28px] bg-white p-6 text-center shadow-lg">
            <p className="font-black text-slate-900">
              제품 상태에 따라 세척 범위와 작업 시간은 달라질 수 있습니다.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              정확한 견적은 사진 상담 또는 방문 확인 후 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}