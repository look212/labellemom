export default function EventPage() {
  return (
    <div className="flex flex-col items-centermin-h-screen p-8">
      <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300 mb-8">이벤트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-orange-50 shadow-md p-10 dark:bg-gray-800">
          <p className="text-xl font-semibold mb-2">90,000원</p>
          <p className="text-gray-700 dark:text-gray-300">체험 1회(90분)</p>
        </div>
      </div>
    </div>
  );
}