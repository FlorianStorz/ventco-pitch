import Image from "next/image";

export function SectionStart() {
  return (
    <div className="min-h-screen w-full">
      <span className="absolute right-4 lg:right-8 top-4 text-lg">
        Pitch/2024
      </span>

      <div className="relative h-screen w-full px-4 md:px-8 lg:px-12 2xl:px-24">
        <div className="flex flex-col h-full w-full justify-evenly">
          <div
            className="flex justify-start scale-50 sm:scale-75 md:scale-75 xl:scale-100"
            style={{ transformOrigin: "left" }}
          >
            <Image alt="Ventco_Logo" src="/logo.png" width={250} height={250} />
          </div>

          <h1 className="w-full flex text-[#62A6EA] leading-none text-[110px] sm:text-[160px] md:text-[200px] lg:text-[256px] lg:justify-end xl:text-[380px]">
            ventco
          </h1>
        </div>
      </div>
    </div>
  );
}
