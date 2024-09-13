import { Card } from "./card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, PlusCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SectionSubscription({
  messagesSubscription,
  locale,
}: {
  messagesSubscription: any;
  locale: string;
}) {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute flex justify-between text-lg left-4 right-4 top-4 md:left-8 md:right-8">
        <span>{messagesSubscription.title}</span>
        <span>ventco</span>
      </div>

      <div className="flex flex-col min-h-screen justify-center items-center container">
        <div className="grid gap-8 px-4 pt-[50px] pb-[100px] h-[580px] overflow-auto md:h-screen md:pt-[100px] md:px-8 lg:px-12 2xl:h-auto 2xl:px-4 2xl:gap-4">
          <div className="w-full justify-between text-center">
            <h2 className="text-1xl leading-relaxed md:text-2xl">
              {messagesSubscription.headlinePart1}
              {/* <br />
              {messagesSubscription.headlinePart2} */}
              <br />
              {messagesSubscription.headlinePart3}
            </h2>
          </div>

          <Tabs defaultValue="monthly" className="w-full">
            <div className="w-full flex justify-center pb-2">
              <TabsList className="w-fit bg-[#121212] text-white border border-neutral-500 border-opacity-30">
                <TabsTrigger value="monthly">
                  {messagesSubscription.monthlyBig}
                </TabsTrigger>
                <TabsTrigger value="yearly">
                  {messagesSubscription.yearlyBig}
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="grid gap-8 px-4 md:px-0 md:pt-0 xl:grid-cols-3">
                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border w-fit border-border rounded-lg text-sm font-medium mb-4">
                        {messagesSubscription.card1Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card1Text}
                    </p>
                    <Separator className="bg-neutral-500 " />
                    <div className="w-full pt-4 pb-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet2}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet3}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet4}</div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="w-full">
                    <Table className={cn("")}>
                      <TableHeader className="">
                        <TableRow>
                          <TableHead className="w-1/3"></TableHead>
                          <TableHead className="text-right text-[#878787] w-1/3 px-4 py-1">
                            {messagesSubscription.oneTime}
                          </TableHead>
                          <TableHead className="text-right text-[#878787] w-1/3 px-4 py-1">
                            {messagesSubscription.monthlySmall}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="">
                          <TableCell className="text-sm font-medium w-1/3 px-4 pt-3 pb-1">
                            {messagesSubscription.buy}
                          </TableCell>
                          <TableCell className="text-right text-sm font-medium w-1/3 px-4 pt-3 pb-1">
                            TBD / {messagesSubscription.sensor}
                          </TableCell>
                          <TableCell className="text-right text-sm font-medium w-1/3 px-4 pt-3 pb-1">
                            <div className="flex flex-row w-full justify-between">
                              <span>+</span>
                              <span>TBD / {messagesSubscription.sensor}</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <div className="flex items-center space-x-2 w-full">
                      <div className="flex-grow bg-neutral-500 h-[1px]"></div>
                      <span className="px-2 text-sm">or</span>
                      <div className="flex-grow bg-neutral-500 h-[1px]"></div>
                    </div>

                    <Table className="">
                      <TableBody className="">
                        <TableRow className="">
                          <TableCell className="text-sm font-medium w-1/3 px-4 py-1">
                            {messagesSubscription.rent}
                          </TableCell>
                          <TableCell className="text-right text-sm font-medium w-1/3 px-4 py-1">
                            &mdash;
                          </TableCell>
                          <TableCell className="text-right text-sm font-medium w-1/3 px-4 py-1">
                            TBD / {messagesSubscription.sensor}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div> */}

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.month}
                    </div>
                  </div>
                </Card>

                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-[#62A6EA]">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border border-[#62A6EA] rounded-lg text-sm font-medium mb-4 text-[#62A6EA]">
                        {messagesSubscription.card2Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card2Text}
                    </p>
                    <Separator className="bg-neutral-500" />

                    <div className="w-full pt-4 pb-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card2Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet2}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet3}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet4}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet5}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.month}
                    </div>
                  </div>
                </Card>

                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border w-fit border-border rounded-lg text-sm font-medium mb-4">
                        {messagesSubscription.card3Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card3Text}
                    </p>
                    <Separator className="bg-neutral-500" />
                    <div className="w-full pt-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card3Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet4}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet5}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet2}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet3}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.month}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="flex w-full justify-center text-[#878787] pt-2 ">
                {messagesSubscription.vat}
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid xl:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0">
                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border w-fit border-border rounded-lg text-sm font-medium mb-4">
                        {messagesSubscription.card1Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card1Text}
                    </p>
                    <Separator className="bg-neutral-500 " />
                    <div className="w-full pt-4 pb-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet2}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet3}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card1Bullet4}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.year}
                    </div>
                  </div>
                </Card>

                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-[#62A6EA]  ">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border border-[#62A6EA] rounded-lg text-sm font-medium mb-4 text-[#62A6EA]">
                        {messagesSubscription.card2Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card2Text}
                    </p>
                    <Separator className="bg-neutral-500" />

                    <div className="w-full pt-4 pb-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card2Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet2}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet3}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet4}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card2Bullet5}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.year}
                    </div>
                  </div>
                </Card>

                <Card className="flex flex-col justify-between space-y-0 py-6 px-6 bg-[#121212] bg-opacity-50 border-neutral-500 border-opacity-30 ">
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-center">
                      <div className="py-1 px-4 border w-fit border-border rounded-lg text-sm font-medium mb-4">
                        {messagesSubscription.card3Title}
                      </div>
                    </div>
                    <p className="text-[#878787] text-sm text-center pb-4">
                      {messagesSubscription.card3Text}
                    </p>
                    <Separator className="bg-neutral-500" />
                    <div className="w-full pt-4">
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <CheckCircle size={20} color="#62A6EA" />
                        <div>{messagesSubscription.card3Bullet1}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet4}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet5}</div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div className="">
                          {messagesSubscription.card3Bullet2}
                        </div>
                      </div>
                      <div className="flex justify-start space-x-4 ml-4 items-center text-sm font-medium py-2">
                        <PlusCircle size={20} color="#22c55e" />
                        <div>{messagesSubscription.card3Bullet3}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-full flex justify-center text-6xl text-[#62A6EA] font-semibold py-4 blur-md hover:blur-none">
                      tbd
                    </div>
                    <div className="w-full flex justify-center text-sm text-[#878787]">
                      {messagesSubscription.per} {messagesSubscription.sensor}{" "}
                      {messagesSubscription.per} {messagesSubscription.year}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="flex w-full justify-center text-[#878787] pt-2 ">
                {messagesSubscription.vat}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mb-4 w-full justify-between text-center">
            <h2 className="text-2xl leading-relaxed pb-2">
              {locale === "en" ? (
                <>
                  Discover how you can access ventco practically for{" "}
                  <span className="text-[#62A6EA]">free</span> on the next
                  slide.
                </>
              ) : (
                <>
                  Erfahre auf der nächsten Seite, wie Du ventco praktisch{" "}
                  <span className="text-[#62A6EA]">kostenlos</span> nutzen
                  kannst.
                </>
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
