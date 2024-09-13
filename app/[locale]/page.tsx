import { useTranslations } from "next-intl";
import { PitchCarusel } from "@/components/pitch-carousel";
import React from "react";
import { useLocale } from "next-intl";

export default function Page() {
  const t_toolbar = useTranslations("Toolbar");
  const t_problem = useTranslations("Problem");
  const t_solution = useTranslations("Solution");
  const t_benefits = useTranslations("Benefits");
  const t_team = useTranslations("Team");
  const t_vision = useTranslations("Vision");
  const t_subscription = useTranslations("Pricing");
  const t_expenses = useTranslations("Expenses");
  const t_book = useTranslations("Book");
  const t_earlyAdopters = useTranslations("EarlyAdopters");

  const locale = useLocale();

  const messagesToolbar = {
    book: t_toolbar("book"),
    share: t_toolbar("share"),
    language: t_toolbar("language"),
    previous: t_toolbar("previous"),
    next: t_toolbar("next"),
  };

  const messagesProblem = {
    title: t_problem("title"),
    card1Title: t_problem("card1Title"),
    card1Text: t_problem("card1Text"),
    headline: t_problem("headline"),
    card2Title: t_problem("card2Title"),
    card2Text: t_problem("card2Text"),
    card3Title: t_problem("card3Title"),
    card3Text: t_problem("card3Text"),
  };

  const messagesSolution = {
    title: t_solution("title"),
    card1Title: t_solution("card1Title"),
    card1Text: t_solution("card1Text"),
    card2Title: t_solution("card2Title"),
    card2Text: t_solution("card2Text"),
    card3Title: t_solution("card3Title"),
    card3Text: t_solution("card3Text"),
    card4Title: t_solution("card4Title"),
    card4Text: t_solution("card4Text"),
    headline: t_solution("headline"),
  };

  const messagesBenefits = {
    title: t_benefits("title"),
    header1: t_benefits("header1"),
    header2: t_benefits("header2"),
    card1Title: t_benefits("card1Title"),
    card1Text: t_benefits("card1Text"),
    card2Title: t_benefits("card2Title"),
    card2Text: t_benefits("card2Text"),
    card3Title: t_benefits("card3Title"),
    card3Text: t_benefits("card3Text"),
    card4Title: t_benefits("card4Title"),
    card4Text: t_benefits("card4Text"),
    card5Title: t_benefits("card5Title"),
    card5Text: t_benefits("card5Text"),
    card6Title: t_benefits("card6Title"),
    card6Text: t_benefits("card6Text"),
    card7Title: t_benefits("card7Title"),
    card7Text: t_benefits("card7Text"),
    card8Title: t_benefits("card8Title"),
    card8Text: t_benefits("card8Text"),
  };

  const messagesTeam = {
    title: t_team("title"),
    headline: t_team("headline"),
    card1Name: t_team("card1Name"),
    card1Role: t_team("card1Role"),
    card1Job: t_team("card1Job"),
    card1Text: t_team("card1Text"),
    card2Name: t_team("card2Name"),
    card2Role: t_team("card2Role"),
    card2Job: t_team("card2Job"),
    card2Text: t_team("card2Text"),
  };

  const messagesVision = {
    title: t_vision("title"),
    landlords: t_vision("landlords"),
    propertyManagers: t_vision("propertyManagers"),
    realEstateInvestors: t_vision("realEstateInvestors"),
    authorities: t_vision("authorities"),
    municipalities: t_vision("municipalities"),
    you: t_vision("you"),
    buttonText: t_vision("buttonText"),
  };

  const messagesSubscription = {
    title: t_subscription("title"),
    headlinePart1: t_subscription("headlinePart1"),
    headlinePart2: t_subscription("headlinePart2"),
    headlinePart3: t_subscription("headlinePart3"),

    monthlyBig: t_subscription("monthlyBig"),
    monthlySmall: t_subscription("monthlySmall"),
    yearlyBig: t_subscription("yearlyBig"),
    yearlySmall: t_subscription("yearlySmall"),
    month: t_subscription("month"),
    year: t_subscription("year"),
    oneTime: t_subscription("oneTime"),
    sensor: t_subscription("sensor"),

    card1Title: t_subscription("card1Title"),
    card1Text: t_subscription("card1Text"),
    card1Bullet1: t_subscription("card1Bullet1"),
    card1Bullet2: t_subscription("card1Bullet2"),
    card1Bullet3: t_subscription("card1Bullet3"),
    card1Bullet4: t_subscription("card1Bullet4"),

    card2Title: t_subscription("card2Title"),
    card2Text: t_subscription("card2Text"),
    card2Bullet1: t_subscription("card2Bullet1"),
    card2Bullet2: t_subscription("card2Bullet2"),
    card2Bullet3: t_subscription("card2Bullet3"),
    card2Bullet4: t_subscription("card2Bullet4"),
    card2Bullet5: t_subscription("card2Bullet5"),

    card3Title: t_subscription("card3Title"),
    card3Text: t_subscription("card3Text"),
    card3Bullet1: t_subscription("card3Bullet1"),
    card3Bullet2: t_subscription("card3Bullet2"),
    card3Bullet3: t_subscription("card3Bullet3"),
    card3Bullet4: t_subscription("card3Bullet4"),
    card3Bullet5: t_subscription("card3Bullet5"),

    per: t_subscription("per"),

    buy: t_subscription("buy"),
    rent: t_subscription("rent"),
    or: t_subscription("or"),
    vat: t_subscription("vat"),
  };

  const messagesExpenses = {
    title: t_expenses("title"),
    headline1: t_expenses("headline1"),
    headline2: t_expenses("headline2"),
    card1Title: t_expenses("card1Title"),
    card1Text: t_expenses("card1Text"),
    card2Title: t_expenses("card2Title"),
    card2Text: t_expenses("card2Text"),
    card3Title: t_expenses("card3Title"),
    card3Text: t_expenses("card3Text"),
  };

  const messagesBook = {
    title: t_book("title"),
    buttonText: t_book("buttonText"),
    imprint: t_book("imprint"),
    imprintLegal: t_book("imprintLegal"),
    openSourceLink: t_book("openSourceLink"),
    privacyPolicy: t_book("privacyPolicy"),
  };

  const messagesEarlyAdopters = {
    title: t_earlyAdopters("title"),
    monthlyBig: t_earlyAdopters("monthlyBig"),
    yearlyBig: t_earlyAdopters("yearlyBig"),
    withTax: t_earlyAdopters("withTax"),
    withoutTax: t_earlyAdopters("withoutTax"),
    cardTitle: t_earlyAdopters("cardTitle"),
    cardSubtitle: t_earlyAdopters("cardSubtitle"),
    monthlyPrice: t_earlyAdopters("monthlyPrice"),
    yearlyPrice: t_earlyAdopters("yearlyPrice"),
    earlyAdoptersDiscount: t_earlyAdopters("earlyAdoptersDiscount"),
    yearlyPaymentDiscount: t_earlyAdopters("yearlyPaymentDiscount"),
    totalPriceMonthly: t_earlyAdopters("totalPriceMonthly"),
    totalPriceYearly: t_earlyAdopters("totalPriceYearly"),
    subtotal: t_earlyAdopters("subtotal"),
    vat: t_earlyAdopters("vat"),
    total: t_earlyAdopters("total"),
    offer: t_earlyAdopters("offer"),
    offer1: t_earlyAdopters("offer1"),
    offer2: t_earlyAdopters("offer2"),
    offer3: t_earlyAdopters("offer3"),
    offer4: t_earlyAdopters("offer4"),
    offer5: t_earlyAdopters("offer5"),
    offer6: t_earlyAdopters("offer6"),
    offer7: t_earlyAdopters("offer7"),
    benefits: t_earlyAdopters("benefits"),
    benefit1: t_earlyAdopters("benefit1"),
    benefit2: t_earlyAdopters("benefit2"),
    benefit3: t_earlyAdopters("benefit3"),
    benefit4: t_earlyAdopters("benefit4"),
    benefit5: t_earlyAdopters("benefit5"),
    benefit6: t_earlyAdopters("benefit6"),
    benefit7: t_earlyAdopters("benefit7"),

    card2Title: t_earlyAdopters("card2Title"),
    card2Subtitle: t_earlyAdopters("card2Subtitle"),
    activationFee: t_earlyAdopters("activationFee"),

    card3TitleYearly: t_earlyAdopters("card3TitleYearly"),
    card3TitleMonthly: t_earlyAdopters("card3TitleMonthly"),
    card3Subtitle: t_earlyAdopters("card3Subtitle"),
    option1: t_earlyAdopters("option1"),
    option2: t_earlyAdopters("option2"),
    option3: t_earlyAdopters("option3"),
  };

  const messagesAll = {
    locale: locale,
    messagesToolbar: messagesToolbar,
    messagesProblem: messagesProblem,
    messagesSolution: messagesSolution,
    messagesBenefits: messagesBenefits,
    messagesTeam: messagesTeam,
    messagesVision: messagesVision,
    messagesSubscription: messagesSubscription,
    messagesExpenses: messagesExpenses,
    messagesBook: messagesBook,
    messagesEarlyAdopters: messagesEarlyAdopters,
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 h-screen">
      <PitchCarusel messages={messagesAll} />
    </div>
  );
}
