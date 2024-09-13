import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ReactElement } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ventco | Pitch",
};

export default function Layout({
  children,
  params,
}: {
  children: ReactElement;
  params: { locale: string };
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <head />

      <body className={cn("overflow-x-hidden bg-neutral-900")}>
        <header></header>
        <main
          className={
            inter.className +
            "container mx-auto px-4 overflow-hidden md:overflow-visible"
          }
        >
          {children}

          <Analytics debug={false} />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
