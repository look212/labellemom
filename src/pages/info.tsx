export default function EventPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">이용안내</h1>
      <p className="text-lg text-gray-700 mb-8">
        라벨르맘의 특별한 이벤트를 소개합니다.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 이벤트 카드 컴포넌트 추가 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">이벤트 이름</h2>
          <p className="text-gray-600 mb-4">이벤트 설명이 여기에 들어갑니다.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            자세히 보기
          </button>
        </div>
        {/* 추가 이벤트 카드 */}
      </div>
    </div>
  );
}