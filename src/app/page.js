import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import CardSection from "@/Components/CardSection";
import MenuSection from "@/Components/MenuSection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <CardSection />
      </div>
      <MenuSection />
      <Footer />
    </>
  );
}
