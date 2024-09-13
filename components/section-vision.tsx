import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";
import TypeWriterComponent from "typewriter-effect";

export function SectionVision({
  isActive,
  messagesVision,
  locale,
}: {
  isActive: boolean;
  messagesVision: any;
  locale: string;
}) {
  const words_changing = [
    messagesVision.landlords,
    messagesVision.propertyManagers,
    messagesVision.realEstateInvestors,
    messagesVision.authorities,
    messagesVision.municipalities,
    messagesVision.you,
  ];

  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesVision.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen px-4 justify-center text-center container md:px-8 lg:px-12">
        <h2 className="text-white text-4xl break-words hyphens-manual leading-normal md:text-6xl lg:text-8xl xl:text-[122px] ">
          {locale === "en" ? (
            <>Become the #1 platform in property management for</>
          ) : (
            <>Die #1 Plattform im Bereich Immobilien&shy;management für</>
          )}
        </h2>
        <h2 className="text-[#62A6EA] pt-2 text-4xl leading-normal font-semibold md:text-6xl lg:text-8xl xl:text-[122px] ">
          <TypeWriterComponent
            options={{
              strings: words_changing,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
    </div>
  );
}
