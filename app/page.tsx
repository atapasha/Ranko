 "use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import Galaxy from '../components/background/Galaxy';

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      {/* Galaxy Background Container */}
      <div style={{ width: '100%', minHeight: '650px', position: 'relative' }}>
        
        {/* Foreground Content Stacked Above Galaxy */}
        <div className="relative z-20 w-full h-full">
          <Navbar
            scrollToWebsiteDesign={scrollToWebsiteDesign}
            scrollToGraphicDesign={scrollToGraphicDesign}
            scrollToShopifyStores={scrollToShopifyStores}
            scrollToBrands={scrollToBrands}
            scrollToServices={scrollToServices}
          />
          
          <div className="text-4xl pb-5 pt-10 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Create, grow, and <br /> scale your business
          </div>
          
          {/* Glassmorphic Paragraph Container */}
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
            Custom tailored solutions for your business. We are a team of creatives who are excited to help you grow your business.
          </p>

          {/* Glassmorphic Action Button */}
          <Link
            href={"/book"}
            className="cursor-pointer flex items-center justify-center border border-white/20 rounded-full w-48 p-3 mx-auto my-8 text-white bg-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105"
          >
            Book a call
          </Link>
        </div>

        {/* Absolute Galaxy Layer Below Content */}
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-auto">
          <Galaxy 
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>
        
      </div>

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div id ='services'>
          <Services />
        </div>
        <InfiniteMovingCardsDemo />
        <FAQS />
      </div>    
    </div>
  );
}
