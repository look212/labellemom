import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">이용안내</h1>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">이용가능 지역</h2>
        <p className="text-gray-700 font-medium">
          용인,동탄,수원,성남,오산 외 경기남부지역은 문의 주세요
        </p>
      </div>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">관리요금</h2>
        <p className="text-gray-700 font-medium">*산전.산후 요금동일 합니다.</p>
        <div>
          <Image src="/images/info_01.jpeg" alt="관리요금" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
      </div>
      <div className="w-full space-y-8 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">가족케어</h2>
        <p className="text-gray-700">
          90min 90,000<br />
          60min 70,000
        </p>
      </div>
      <div className="w-full space-y-8 p-10 bg-orange-50 align-center dark:bg-gray-800">
        <p className="text-2xl font-bold">주말, 공휴일 24시간 상담 및 문의가능</p>
        <p className="text-gray-700 dark:text-gray-300">
          라벨르맘은 1인샵으로 100% 예약제로 운영되며,<br />
          예약 및 문의는 <span className="font-bold">문자, 오픈카카오톡, 네이버 톡톡</span>으로 문의 부탁드립니다.
        </p>
      </div>
    </div>
  );
}