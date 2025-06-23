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
      // {href: '/event', label: '이벤트', desc: '체험 1회 90,000원(90분)'},
    ];
  return (
    <>
      <main className="flex flex-col items-center">
        <div className="bg-beige w-full h-84 text-white gap-4">
          {/* <div className="absolute bg-black opacity-50 w-full h-full"></div> */}
          <div className="h-84 flex items-center justify-center gap-4 flex-col text-center">
            <Image src="/images/logo.jpeg" alt="labellemom"className="h-full w-auto" width={0} height={0}></Image>
            {/* <div>
              <h1 className="font-bold text-xl text-center">라벨르맘</h1>
              <p className="text-center">산전,산후 전문관리 (용인,수원,동탄,분당..등 경기남부)</p>
            </div> */}
          </div>
        </div>
        <div className="pt-5">
          <h1 className="font-bold text-2xl text-center text-gray-700">라벨르맘</h1>
          <p className="font-bold text-xl text-center text-gray-700">1인샵 산전산후 전문관리</p>
          <p className="p-5 text-sm text-center tracking-tight">몸과 마음이 가장 많은 변화를 경험하게 되는 시기<br />맞춤 테라피로 건강을 회복하실 수 있도록 도와드리겠습니다.</p>
        </div>
        <div className="w-full border-t-gray-200 border-t-10 border-b-gray-200 border-b-10">
          {/* 프로그램 카드 컴포넌트 추가 */}
          {card.map((item, idx) => (
            <div className={`bg-beige text-brown p-4 ${
              idx !== 0 ? 'border-t border-rose-100' : ''
            }`} key={`menu_${idx}`}>
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center p-5 w-full">
          <h2 className="text-middle-brown font-bold text-left w-full pb-4">이벤트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            <Link href="/event" className="w-full">
              <div className="w-full bg-beige shadow-md p-10 text-center">
                <p className="text-xl font-semibold mb-2">첫관리 체험 90분</p>
                <p className="text-gray-700">90,000원</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
