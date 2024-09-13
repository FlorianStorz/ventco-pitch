"use client";

import { useCarousel } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import { CopyInput } from "@/components/copy-input";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe,
  ShareIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export function CarouselToolbar({ messagesToolbar }: { messagesToolbar: any }) {
  const api = useCarousel();
  const router = useRouter();

  useHotkeys("arrowRight", () => api.scrollNext(), [api]);
  useHotkeys("arrowLeft", () => api.scrollPrev(), [api]);

  const handleLanguageChangeDe = () => {
    router.push("/de");
  };

  const handleLanguageChangeEn = () => {
    router.push("/en");
  };

  return (
    <Dialog>
      <div className="fixed flex justify-center left-0 bottom-5 w-full">
        <AnimatePresence>
          <motion.div>
            <TooltipProvider delayDuration={20}>
              <div className="flex backdrop-filter backdrop-blur-lg dark:bg-[#1A1A1A]/80 h-10 px-4 py-2 border border-[#2C2C2C] items-center rounded-2xl space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={() => api.scrollTo(100)}>
                      <Calendar size={18} className="text-white" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">{messagesToolbar.book}</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <DialogTrigger asChild>
                      <ShareIcon size={18} className="text-white -mt-[1px]" />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">{messagesToolbar.share}</span>
                  </TooltipContent>
                </Tooltip>

                <DropdownMenu>
                  <Tooltip>
                    <DropdownMenuTrigger asChild>
                      <TooltipTrigger asChild>
                        <button className="text-white">
                          <Globe size={18} />
                        </button>
                      </TooltipTrigger>
                    </DropdownMenuTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                      align="center"
                    >
                      <span className="text-xs">
                        {messagesToolbar.language}
                      </span>
                    </TooltipContent>
                  </Tooltip>

                  <DropdownMenuContent className="bg-white rounded-md">
                    <DropdownMenuItem onClick={() => handleLanguageChangeEn()}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChangeDe()}>
                      Deutsch
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center border-l-[1px] border-border pl-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollPrev}
                        className={cn(!api?.canScrollPrev && "opacity-50")}
                        onClick={() => {
                          api.scrollPrev();
                        }}
                      >
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">
                        {messagesToolbar.previous}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollNext}
                        className={cn(!api?.canScrollNext && "opacity-50 ")}
                        onClick={() => {
                          api.scrollNext();
                        }}
                      >
                        <ChevronRight className="h-6 w-6 text-white" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">{messagesToolbar.next}</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>

      <DialogContent className="w-3/4">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="mb-2">Share our Pitch</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Thanks for sharing our pitch deck.
          </DialogDescription>

          <div className="grid gap-6 py-4">
            <CopyInput value="https://www.ventco.de" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
