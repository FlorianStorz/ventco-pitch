import Image from "next/image";
import { Card } from "./card";
import {
  AppWindow,
  BrainCircuit,
  GlobeIcon,
  Router,
  GlobeLockIcon,
} from "lucide-react";

export function SectionSolution({
  messagesSolution,
}: {
  messagesSolution: any;
}) {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesSolution.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:grid-cols-3 2xl:h-auto 2xl:py-0 2xl:px-4">
          <div className="space-y-8 text-center h-full">
            <Card className="justify-center py-8 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <Router size={80} className="text-[#62A6EA] w-full" />
              <h2 className="text-2xl text-white">
                {messagesSolution.card1Title}
              </h2>

              <p className="text-[#878787] text-sm">
                {messagesSolution.card1Text}
              </p>
            </Card>

            <Card className="justify-center py-8 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <AppWindow size={80} className="text-[#62A6EA] w-full" />
              <h2 className="text-2xl text-white">
                {messagesSolution.card2Title}
              </h2>

              <p className="text-[#878787] text-sm">
                {messagesSolution.card2Text}
              </p>
            </Card>
          </div>

          <div className="flex flex-col justify-between space-y-8 text-center h-full 2xl:gap-0 2xl:pt-0">
            <Card className="justify-center py-8 px-6 bg-neutral-900 bg-opacity-50 border-neutral-500 border-none">
              <h2 className="text-4xl text-center break-words hyphens-auto leading-tight md:text-6xl md:leading-normal xl:text-4xl xl:leading-tight 2xl:text-6xl ">
                {messagesSolution.headline}
              </h2>
            </Card>

            <Card className="justify-center py-8 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <BrainCircuit size={80} className="text-[#62A6EA] w-full" />

              <h2 className="text-2xl">{messagesSolution.card3Title}</h2>

              <p className="text-[#878787] text-sm text-center">
                {messagesSolution.card3Text}
              </p>
            </Card>
          </div>

          <div className="flex flex-col justify-between space-y-8 text-center h-full w-full">
            <Card className="justify-center py-8 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <GlobeLockIcon size={80} className="text-[#62A6EA] w-full" />

              <h2 className="text-2xl">{messagesSolution.card4Title}</h2>

              <p className="text-[#878787] text-sm text-center">
                {messagesSolution.card4Text}
              </p>
            </Card>
            <Card className="flex w-full h-full overflow-hidden bg-neutral-900 bg-opacity-50 border-none">
              <Image
                src="/MacPreview.png"
                alt="Dashboard"
                width={900}
                height={900}
                quality={100}
                className="scale-105"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
