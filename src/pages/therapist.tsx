import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">테라피스트</h1>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <div>
          <Image src="/images/certificate_01.jpeg" alt="미용사 면허증" className="w-full h-auto object-cover max-w-3xl" width={720} height={450} />
        </div>
      </div>
      <div className="w-full space-y-8 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">라니테라피스트</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700">스파 및 통증 관리 4년(강남역삼,판교,분당정자)</li>
          <li className="text-gray-700">산후조리원 4년(강남,홍대,판교)</li>
          <li className="text-gray-700">산모전문 출장 6년</li>
        </ul>
      </div>
    </div>
  );
}