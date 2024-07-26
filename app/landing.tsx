"use client";

import { GetInTouchSimple } from "@/components/contact";
import { FeaturesCards } from "@/components/features";
import { FooterSocial } from "@/components/footer";
import { HeaderSimple } from "@/components/header";
import { HeroBullets } from "@/components/hero";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <HeaderSimple />
      <HeroBullets />
      <FeaturesCards />
      <GetInTouchSimple />
      <FooterSocial />
    </>
  );
};

export default LandingPage;
