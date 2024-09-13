import {
  ArrowLeftRight,
  BarChart4,
  ChevronRight,
  Landmark,
} from "lucide-react";
import { Card } from "./card";

export function SectionExpenses({
  messagesExpenses,
}: {
  messagesExpenses: any;
}) {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesExpenses.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:grid-cols-3 2xl:h-auto 2xl:py-0 2xl:px-4">
          <div className="ml-auto w-full space-y-8 flex items-center">
            <h2 className="text-4xl text-center leading-normal">
              {messagesExpenses.headline1}
            </h2>
          </div>

          <div className="ml-auto space-y-8 flex flex-col justify-center">
            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex space-x-5">
                <div className="w-1/6 flex items-center">
                  <ArrowLeftRight size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesExpenses.card1Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesExpenses.card1Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-startpy-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex space-x-5">
                <div className="w-1/6 flex items-center">
                  <BarChart4 size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesExpenses.card2Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesExpenses.card2Text}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex items-start py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <div className="flex space-x-5">
                <div className="w-1/6 flex items-center">
                  <Landmark size={80} className="text-[#62A6EA] w-full" />
                </div>

                <div className="flex flex-col justify-center w-5/6">
                  <h2 className="text-2xl text-white flex justify-start">
                    {messagesExpenses.card3Title}
                  </h2>

                  <p className="text-[#878787] text-sm text-start">
                    {messagesExpenses.card3Text}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 text-center flex flex-col justify-center h-full ">
            <div className="px-8 h-full items-center flex flex-col justify-center">
              <h2 className="text-4xl flex text-center items-center leading-normal">
                {messagesExpenses.headline2}
              </h2>

              <div className="w-full flex justify-center scale-50 md:scale-100">
                <ChevronRight className="text-[#62A6EA]" size={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
