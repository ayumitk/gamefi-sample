import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen sm:min-h-[50vh] text-white flex flex-col relative"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 15%, #43C5E4 0%, #168BC7 30%, #006FBA 48%, #0756A0 61%, #142D74 87%, #191D63 100%)",
        }}
      >
        <header className="w-full max-w-7xl mx-auto py-6 border border-white text-center">
          header
        </header>
        <div className="w-full max-w-7xl mx-auto border border-white text-center self-stretch relative z-10 grow">
          ゲームで遊ぶだけでポイントが貯まる！
        </div>
        <div className="absolute top-[20%] left-[2%] animate-bounce-1 hidden sm:block">
          <Image
            className="opacity-50 w-40"
            src="/cloud.svg"
            width={182}
            height={74}
            alt=""
          />
        </div>
        <div className="absolute bottom-[20%] left-[12%] animate-bounce-2 hidden sm:block">
          <Image
            className="opacity-50 -scale-x-100 w-24"
            src="/cloud.svg"
            width={182}
            height={74}
            alt=""
          />
        </div>
        <div className="absolute top-[24%] right-[3%] animate-bounce-3 hidden sm:block">
          <Image
            className="opacity-50 -scale-x-100 w-24"
            src="/cloud.svg"
            width={182}
            height={74}
            alt=""
          />
        </div>
        <div className="absolute bottom-[12%] right-[10%] animate-bounce-4 hidden sm:block">
          <Image
            className="opacity-50 w-40"
            src="/cloud.svg"
            width={182}
            height={74}
            alt=""
          />
        </div>
      </div>
      <div className="text-center py-80">content</div>
    </div>
  );
}
