import Image from "next/image";
import { Card } from "./card";
import {
  BanIcon,
  FilePieChart,
  ShieldPlus,
  TrendingUpIcon,
  Smile,
  GraduationCap,
  Handshake,
  Home,
} from "lucide-react";

export function SectionBenefits({
  messagesBenefeits,
}: {
  messagesBenefeits: any;
}) {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesBenefeits.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:grid-cols-3 2xl:h-auto 2xl:px-4 2xl:py-0 2xl:gap-8">
          <div className="space-y-8 h-full 2xl:space-y-6">
            <h2 className="text-4xl text-start">{messagesBenefeits.header1}</h2>
            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start space-x-5">
                <div className="w-1/6 flex items-center">
                  <BanIcon size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card1Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card1Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start space-x-5">
                <div className="w-1/6 flex items-center">
                  <ShieldPlus size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card2Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card2Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start space-x-5">
                <div className="w-1/6 flex items-center">
                  <FilePieChart size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card3Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card3Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start space-x-5">
                <div className="w-1/6 flex items-center">
                  <TrendingUpIcon size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card4Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card4Text}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="h-full">
            <Card className="w-full h-full overflow-hidden border-0 bg-neutral-900 ">
              <Image
                alt="Handshake"
                src="/handshake.png"
                width={650}
                height={1075}
                className="scale-150"
              />
            </Card>
          </div>

          <div className="space-y-8 h-full 2xl:space-y-6">
            <h2 className="text-4xl text-start">{messagesBenefeits.header2}</h2>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start space-x-5">
                <div className="w-1/6 flex items-center">
                  <Smile size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card5Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card5Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start  space-x-5">
                <div className="w-1/6 flex items-center">
                  <GraduationCap size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card6Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card6Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start  space-x-5">
                <div className="w-1/6 flex items-center">
                  <Handshake size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card7Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card7Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex w-full justify-start  space-x-5">
                <div className="w-1/6 flex items-center">
                  <Home size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesBenefeits.card8Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesBenefeits.card8Text}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
