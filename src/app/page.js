"use client";

import React, { useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import CardSection from "@/Components/CardSection";
import MenuSection from "@/Components/MenuSection";
import Footer from "@/Components/Footer";
import LpHome from "@/app/Lp-home/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PaymentSection from "@/Components/PaymentSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");
  const [activePaymentTab, setPaymentActiveTab] = useState("Home");

  // const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //     router.push("/sign-in");
  //   }
  // }, [localStorage.getItem("user")]);

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <CardSection setActiveTab={setActiveTab} />
      </div>
      <MenuSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <PaymentSection activePaymentTab={activePaymentTab} setPaymentActiveTab={setPaymentActiveTab} />
      <Footer />
    </>
  );
}
