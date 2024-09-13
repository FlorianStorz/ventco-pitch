"use client";

import { SectionBook } from "@/components/section-book";
import { SectionProblem } from "@/components/section-problem";
import { SectionSolution } from "@/components/section-solution";
import { SectionStart } from "@/components/section-start";
import { SectionSubscription } from "@/components/section-subscription";
import { SectionTeam } from "@/components/section-team";
import { SectionBenefits } from "@/components/section-benefits";
import { SectionVision } from "@/components/section-vision";
import { SectionExpenses } from "@/components/section-expenses";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselToolbar } from "./carousel-toolbar";
import React from "react";

export function PitchCarusel({ messages }: { messages: any }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full min-h-full relative text-white" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionProblem messagesProblem={messages.messagesProblem} />
        </CarouselItem>
        <CarouselItem>
          <SectionSolution messagesSolution={messages.messagesSolution} />
        </CarouselItem>
        <CarouselItem>
          <SectionBenefits messagesBenefeits={messages.messagesBenefits} />
        </CarouselItem>
        <CarouselItem>
          <SectionTeam messagesTeam={messages.messagesTeam} />
        </CarouselItem>
        <CarouselItem>
          <SectionVision
            isActive={current === 6}
            messagesVision={messages.messagesVision}
            locale={messages.locale}
          />
        </CarouselItem>
        <CarouselItem>
          <SectionSubscription
            messagesSubscription={messages.messagesSubscription}
            locale={messages.locale}
          />
        </CarouselItem>
        <CarouselItem>
          <SectionExpenses messagesExpenses={messages.messagesExpenses} />
        </CarouselItem>
        <CarouselItem>
          <SectionBook
            messagesBook={messages.messagesBook}
            locale={messages.locale}
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar messagesToolbar={messages.messagesToolbar} />
    </Carousel>
  );
}
