export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm">© {new Date().getFullYear()} 라벨르맘. All rights reserved.</p>
          <p className="text-xs">개인정보책임관리자 : 이수진 | 경기도 용인시 기흥구 기흥역로58번길 56</p>
        </div>
      </div>
    </footer>
  );
}