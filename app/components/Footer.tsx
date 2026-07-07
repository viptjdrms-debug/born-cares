import { Clock3, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../constants/site";

export default function Footer() {
  return (
    <footer className="bg-black pb-28 pt-12 text-slate-400 lg:pb-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-black text-white">
              Born <span className="text-cyan-500">cares</span>
            </h3>

            <p className="mt-4 font-semibold text-slate-300">
              프리미엄 가전 홈케어 전문
            </p>

            <p className="mt-4 leading-7">
              {siteConfig.services}
              <br />
              분해세척 및 유지관리 서비스
            </p>
          </div>

          <div className="space-y-4 text-sm lg:text-right">
            <div className="flex items-center justify-end gap-2">
              <Phone size={16} />
              <span>{siteConfig.phone}</span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Clock3 size={16} />
              <span>{siteConfig.hours}</span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <MapPin size={16} />
              <span>{siteConfig.area}</span>
            </div>

            <p>상호명 : {siteConfig.name}</p>
            <p>대표자 : 송성근</p>
            <p>사업자등록번호 : 139-12-73051</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          © 2026 {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}