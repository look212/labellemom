import Image from "next/image";
import { env } from "@/config/env";
import Seo from "@/components/Seo";

export default function ProgramsPage({title}: {
  title: string;
}) {
  return (
    <>
      <Seo title={`${title} - 프로그램`} />
      <div className="flex flex-col items-center p-5">
        <h1 className="text-2xl font-bold pb-2 text-left w-full border-b-1 border-stone-300">라벨르맘 프로그램</h1>
        <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
          <h2 className="text-1xl font-bold mb-4 text-middle-brown">산전,산후 이용시기</h2>
          <div>
            <Image src="/images/program_01.jpeg" alt="라벨르맘 산전, 산후 이용 시기 이미지" className="w-full h-auto object-cover" width={720} height={450} />
          </div>
        </div>
        <div className="w-full space-y-8 border-b-1 border-stone-200 pb-8 pt-8">
          <h2 className="text-1xl font-bold mb-4 text-middle-brown">산전관리</h2>
          <div>
            <Image src="/images/program_02.jpeg" alt="라벨르맘 산전 이미지" className="w-full h-auto object-cover" width={720} height={450} />
          </div>
        </div>
        <div className="w-full space-y-8 pt-8">
          <h2 className="text-1xl font-bold mb-4 text-middle-brown">산후관리</h2>
          <div>
            <Image src="/images/program_03.jpeg" alt="라벨르맘 산후 이미지" className="w-full h-auto object-cover" width={720} height={450} />
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      title: env.siteName,
    },
  }
}