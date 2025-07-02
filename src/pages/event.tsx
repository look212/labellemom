export default function EventPage() {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300 mb-8">라벨르맘 이벤트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        <div className="w-full bg-beige shadow-md p-10 text-center">
          <p className="text-xl font-semibold mb-2">첫관리 체험 90분</p>
          <p className="text-gray-700">90,000원</p>
        </div>
      </div>
    </div>
  );
}