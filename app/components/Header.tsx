"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../constants/site";

const menus = [
  { name: "회사소개", href: "/#about" },
  { name: "서비스", href: "/#services" },
  { name: "작업 사례", href: "/#portfolio" },
  { name: "자주 묻는 질문", href: "/#faq" },
  { name: "예약문의", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-md backdrop-blur"
          : "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 lg:px-6 ${
          scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black text-slate-950 lg:text-3xl"
        >
          Born <span className="text-cyan-500">cares</span>
        </Link>

        <nav className="hidden items-center gap-10 font-semibold text-slate-800 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="transition hover:text-cyan-500"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-cyan-500 px-7 py-3 font-bold text-white transition hover:bg-cyan-600 lg:block"
        >
          무료견적
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white lg:hidden"
          aria-label="메뉴"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-5 text-lg font-bold">
            {menus.map((menu) => (
              <Link key={menu.name} href={menu.href} onClick={closeMenu}>
                {menu.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
            <a
              href={siteConfig.phoneHref}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 font-bold text-white"
            >
              <Phone size={18} />
              전화문의
            </a>

            <a
              href={siteConfig.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-4 py-3 font-bold text-white"
            >
              <MessageCircle size={18} />
              카카오톡
            </a>
          </div>
        </div>
      )}
    </header>
  );
}