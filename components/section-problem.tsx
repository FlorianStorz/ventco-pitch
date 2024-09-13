import Image from "next/image";
import { RefreshCcw, TrendingDown } from "lucide-react";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { Card } from "./card";

export function SectionProblem({ messagesProblem }: { messagesProblem: any }) {
  return (
    <div className="min-h-screen relative w-screen ">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span className="">{messagesProblem.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:grid-cols-3 2xl:h-auto 2xl:px-4 ">
          <div className="space-y-8 text-center h-full">
            <Card className="bg-opacity-50 border-neutral-500 border-opacity-30 ">
              <CoronavirusIcon
                className="text-[#62A6EA] w-full"
                style={{ fontSize: 80 }}
              />

              <h2 className="text-2xl">{messagesProblem.card1Title}</h2>

              <p className="text-[#878787] text-sm">
                {messagesProblem.card1Text}
              </p>
            </Card>
            <Card className="h-auto bg-neutral-900 border-none">
              <h2 className="text-4xl text-center leading-tight md:text-6xl md:leading-normal xl:text-5xl xl:leading-tight">
                {messagesProblem.headline}
              </h2>
            </Card>
          </div>

          <div className="h-full overflow-hidden">
            <Card className="w-full overflow-hidden border-0">
              <Image
                alt="Mold"
                src="/mold_window_bw.jpg"
                width={650}
                height={875}
                className="scale-125 lg:scale-150"
              />
            </Card>
          </div>

          <div className="ml-auto w-full space-y-8 text-center">
            <Card className="bg-opacity-50 border-neutral-500 border-opacity-30">
              <RefreshCcw size={80} className="text-[#62A6EA] w-full" />

              <h2 className="text-2xl">{messagesProblem.card2Title}</h2>

              <p className="text-[#878787] text-sm">
                {messagesProblem.card2Text}
              </p>
            </Card>
            <Card className="bg-opacity-50 border-neutral-500 border-opacity-30">
              <TrendingDown size={80} className="text-[#62A6EA] w-full" />

              <h2 className="text-2xl">{messagesProblem.card3Title}</h2>

              <p className="text-[#878787] text-sm">
                {messagesProblem.card3Text}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
