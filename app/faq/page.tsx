import FAQClient from "./FAQClient";
import type { FAQCategory } from "../data/faqs";

export const metadata = {
  title: "자주 묻는 질문 | Born Cares",
  description:
    "에어컨, 세탁기, 건조기, 공기청정기 등 홈케어 서비스 관련 자주 묻는 질문을 확인해보세요.",
};

const validCategories: FAQCategory[] = [
  "aircon",
  "washer",
  "dryer",
  "purifier",
  "dehumidifier",
  "vacuum",
];

type FAQPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function FAQPage({ searchParams }: FAQPageProps) {
  const params = await searchParams;
  const category = params?.category;

  const initialCategory = validCategories.includes(category as FAQCategory)
    ? (category as FAQCategory)
    : "aircon";

  return <FAQClient initialCategory={initialCategory} />;
}