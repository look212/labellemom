import Image from "next/image";

export default function EventPage() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">커뮤니티</h1>
      <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4 text-middle-brown">관리시 유의사항 및 참고사항</h2>
        <p className="text-gray-700 font-medium text-center">
          아이돌봐주실 분이 계셔야 방문가능하며,<br />
          관리시 이용되는 모든 재료 및 소품은<br />
          가지고 방문드리니 자리만 확보 해주시면 됩니다.<br />
          (2층이상 엘리베이터가 없을시, 이용이 힘드실수 있습니다.)<br /><br />
          수유,유축미리해주셔야 관리시 보다<br />
          편안하게 받으실수 있으며,<br />
          천연흡수가능한 제품으로 전신100% 수기관리가<br />
          진행되다보니 관리전 가벼운 샤워 부탁드립니다.
        </p>
      </div>
      <div className="w-full space-y-8 pb-8 pt-8">
        <h2 className="text-1xl font-bold mb-4 text-middle-brown">관리 제품</h2>
        <p className="text-gray-700 m-2">*만다린올리브오일</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 m-0">
          <Image src="/images/community_01.jpeg" alt="라벨르맘 만다린올리브오일 이미지" className="w-full h-auto object-cover" width={720} height={450} />
          <Image src="/images/community_02.jpeg" alt="라벨르맘 만다린올리브오일 이미지" className="w-full h-auto object-cover" width={720} height={450} />
        </div>
        <p className="text-gray-700 border-b-1 border-stone-200 pb-8 pt-8 m-0">
          *르노벨 데아롬 그레이<br />
          신경계릴렉스(심신안정), 근육이완(근육통증) ,불면증 완화
        </p>
        <p className="text-gray-700 pt-8 m-0">
          *온열돔<br />
          체온을 높여 면역력 증진과 통증완화 및 혈액순환,냉증,부종,신경통개선
        </p>
      </div>
    </div>
  );
}