"use client";
import About from "@/Components/About";
import Background from "@/Components/Background";
import Contact from "@/Components/Contact";
import Events from "@/Components/Events";
import Footer from "@/Components/Footer";
import Menu from "@/Components/Menu";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      {/* Add overflow-x-hidden to prevent horizontal scrolling */}
      <div className="relative h-screen overflow-x-hidden overflow-hidden"> 

        {/* Responsive Navbar */}
        <Navbar />

        {/* Page Content */}
        <Background />
      </div>

      {/* Ensure all components are wrapped in a container with overflow-x-hidden */}
      <div className="overflow-x-hidden">
        <Menu />
        <Events />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
