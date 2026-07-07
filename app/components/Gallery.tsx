import Image from "next/image";

const images = [
  "/images/services/aircon.jpg",
  "/images/services/washer.jpg",
  "/images/services/dryer.jpg",
  "/images/services/dehumidifier.jpg",
  "/images/services/vacuum.jpg",
  "/images/services/airpurifier.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-6">
        <div className="mb-12 text-center">
          <p className="font-bold tracking-[0.3em] text-cyan-400">GALLERY</p>

          <h2 className="mt-5 text-4xl font-black lg:text-5xl">
            작업 가능한 제품
          </h2>

          <p className="mt-5 text-slate-400">
            다양한 가전제품을 제품 구조에 맞춰 케어합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-[24px] bg-slate-800"
            >
              <Image
                src={image}
                alt={`Born Cares 작업 이미지 ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}