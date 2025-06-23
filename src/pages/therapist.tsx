import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">테라피스트</h1>
      <div className="w-full space-y-8 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4 text-middle-brown">라벨르맘테라피스트</h2>
        <p>15년이상의 경력 및 피부미용 국가자격증 보유</p>
        <div className='flex items-center justify-center space'>
          <div className='flex-1'>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">스파 및 통증 관리 4년<br />(강남역삼,판교,분당)</li>
              <li className="text-gray-700">산후조리원 관리실 운영 및 근무<br />(강남,홍대,판교)</li>
              <li className="text-gray-700">산모전문 출장 7년</li>
            </ul>
          </div>
          <Image src="/images/certificate_01.jpeg" alt="미용사 면허증" className="flex-none" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}