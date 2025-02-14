"use client";

import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import CardSection from "@/Components/CardSection";
import MenuSection from "@/Components/MenuSection";
import Footer from "@/Components/Footer";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <CardSection setActiveTab={setActiveTab} />
      </div>
      <MenuSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </>
  );
}
