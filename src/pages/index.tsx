import Image from "next/image";
import type { Metadata } from "next";
import { env } from "@/config/env";
import Link from 'next/link';

export const metadata: Metadata = {
  title: env.siteName,
  description: env.siteDescription,
  openGraph: {
    title: env.siteName,
    description: env.siteDescription,
    url: env.siteUrl,
    siteName: env.siteName,
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 1200,
        height: 630,
        alt: "Next.js Open Graph Image",
      },
    ],
    locale: env.siteLocale,
  }
}

export default function Home() {
    const card = [
      {href: '/programs', label: '프로그램', desc: '산전, 산후 관리 프로그램'},
      {href: '/community', label: '커뮤니티', desc: '관리시 유의사항 및 참고사항, 관리 제품 안내'},
      {href: '/info', label: '이용안내', desc: '이용가능지역: 용인,동탄,수원,성남,오산'},
      {href: '/therapist', label: '테라피스트', desc: '스파 및 통증 관리 4년, 산후조리원 4년, 산모전문 출장 6년'},
      {href: '/event', label: '이벤트', desc: '체험 1회 90,000원(90분)'},
    ];
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="flex space-x-5 mb-10">
          <Image src={`/images/logo.jpeg`} alt="labellemom" width={100} height={100}></Image>
          <div>
            <h1 className="font-bold text-xl">라벨르맘</h1>
            <p className="pt-5">1인샵 산전,산후 전문 관리</p>
            <p>산전,산후 전문관리 (용인,수원,동탄,분당..등 경기남부)</p>
          </div>
        </div>
      
        <p className="text-lg text-gray-700 mb-8">
          여자의 일생에서 가장많은 몸의 변화를경험하게 되는 임신과 출산 <br />라벨르맘에서 아름다움과 건강의 회복을 위해 노력하겠습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 프로그램 카드 컴포넌트 추가 */}
          {card.map((item, idx) => (
            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-white" key={idx}>
            <div key={idx} className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{item.label}</h2>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <Link href={item.href}>자세히 보기</Link>
              </button>
            </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
