import Image from "next/image";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">프로그램</h1>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">산전,산후 이용시기</h2>
        <div>
          <Image src="/images/program_01.jpeg" alt="산전, 산후 이용 시기 이미지" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
      </div>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">산전관리</h2>
        <div>
          <Image src="/images/program_02.jpeg" alt="산전 이미지" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
        <p className="text-gray-700">
          *임신중 빠르게 변화하는 신체 변화에 따른 통증과 부종을 예방하며,<br />
          산후 후유증을 사전에 예방 및 순산할수 있도록 도와 줍니다.<br /><br />
          무게중신 변형, 체중증가, 골반압박으로 인한 <br />
          부종 및 통증관리<br />
          혈액순환 촉진 및 튼살예방 보습관리
        </p>
      </div>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4">산후관리</h2>
        <div>
          <Image src="/images/program_03.jpeg" alt="산후 이미지" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
        <p className="text-gray-700">
          *출산 후 일어날수있는 몸의 변화와 혈액순환 촉진으로 보다 빠르게 회복을 도와줍니다.<br />
          최적의 상태로 돌아갈수 있도록 도와줍니다.<br /><br />
          전신 경혈 부종 순환관리 및 골반 대칭관리<br />
          산후풍 ,저림현상 완화 및 예방관리<br />
          복직근 이개 회복 및 횡경막 이완관리<br />
          젖몸살 ,울혈 및 증유 기저부 순환관리
        </p>
      </div>
    </div>
  );
}