import Image from "next/image";
import { Card } from "./card";

export function SectionTeam({ messagesTeam }: { messagesTeam: any }) {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesTeam.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:grid-cols-3 2xl:h-auto 2xl:py-0 2xl:px-4">
          <div className="space-y-8 h-full grid gap-8 xl:grid-cols-2 xl:space-y-0 2xl:grid-cols-1">
            <Card className="items-start space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col justify-between w-full">
                  <h2 className="text-xl">{messagesTeam.card1Name}</h2>
                  <span className="">{messagesTeam.card1Role}</span>

                  <p className="text-[#878787] text-sm !mt-2">
                    {messagesTeam.card1Job}
                  </p>
                </div>

                <Image
                  src="/florian_square.jpeg"
                  alt="Florian"
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-md"
                />
              </div>
              <p className="text-[#878787] text-sm !mt-4">
                {messagesTeam.card1Text}
              </p>
            </Card>

            <Card className="items-start space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col justify-between w-full">
                  <h2 className="text-xl">{messagesTeam.card2Name}</h2>
                  <span className="">{messagesTeam.card2Role}</span>

                  <p className="text-[#878787] text-sm !mt-2">
                    {messagesTeam.card2Job}
                  </p>
                </div>

                <Image
                  src="/lukas_square.jpg"
                  alt="Lukas"
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-md"
                />
              </div>
              <p className="text-[#878787] text-sm !mt-4">
                {messagesTeam.card2Text}
              </p>
            </Card>
          </div>

          <div className="flex h-full w-full items-center justify-center">
            <Card className="w-full h-full bg-neutral-900 border-none p-0 m-0 flex items-center justify-center">
              <h2 className="text-4xl text-center break-words hyphens-auto leading-tight md:text-6xl 2xl:text-5xl">
                {messagesTeam.headline}
              </h2>
            </Card>
          </div>

          <div className="flex w-full items-center justify-center bg-neutral-900 bg-opacity-50 border-none">
            <Image
              src="/logo.png"
              alt="ventco logo"
              width={650}
              height={875}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
