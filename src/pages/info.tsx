import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">라벨르맘 이용안내</h1>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4 text-middle-brown">이용가능 지역</h2>
        <p className="text-gray-700 font-medium">
          용인,수원,분당,성남,동탄,경기광주일부 외 경기남부지역은 문의 주세요
        </p>
      </div>
      <div className="w-full space-y-8 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4 text-middle-brown">관리요금</h2>
        <p className="text-gray-700 font-medium">*산전.산후 요금동일 합니다.</p>
        <div>
          <Image src="/images/info_01.jpeg" alt="라벨르맘 관리요금" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
      </div>
      <div className="w-full space-y-8 p-4 bg-zinc-800 align-center">
        <p className="text-lg font-bold tracking-tight text-cream text-center">주말, 공휴일 24시간 상담 및 문의가능</p>
      </div>
    </div>
  );
}