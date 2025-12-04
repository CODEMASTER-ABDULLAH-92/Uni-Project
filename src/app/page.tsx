"use client";
import { useSelector } from "react-redux";
import UpperNav from "./Components/UpperNav";
import LowerNav from "./Components/LowerNav";
import { data } from "../../public/assets";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

import OurStory from "./Components/OurStory";
import BestSeller from "./Components/BestSeller";
import Footer from "./Components/Footer";
import NewProduct from "./Components/NewProduct";
import DiscoverCollection from "./Components/DiscoverCollection";
import RefineCasual from "./Components/Refine";
import Testimonilas from "./Components/Testimonilas";
// import Blogs from "./Components/Blogs";
import Services from "./Components/Services";
import Pictures from "./Components/Pictures";
import SearchBar from "./Components/SearchBar";


import TrendingProductsCarousel from "./Components/Carousel";
import type { RootState } from "@/app/lib/store"; // adjust path
import TrustedByMarquee from "./Components/Logo";
import Blogs from "./Components/Blogs";
export default function Home() {
  const imgRef = useRef(null);
  const searchBarRef = useRef(null);
  const [count, setCount] = useState<number>(0);
  const [fade, setFade] = useState(false);


const showSearch = useSelector((state: RootState) => state.variable.showSearchBar);

  useGSAP(() => {
    gsap.fromTo(
      searchBarRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all",
      }
    );
  });

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 200);
    return () => clearTimeout(timeout);
  }, [count]);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      {
        scale: 1.2,
        opacity: 0,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".hh",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );
  }, [count]);

  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", stagger: 1 }
    );
  }, []);

  const images = [data.homeIma2, data.homeIma1, data.homeIma3];

  return (
    <div className="relative">
      {/* ✅ Sticky Navbars */}
      <div className="fixed w-full z-50 space-y-7 sm:space-y-7">
        <UpperNav />
        <LowerNav />
      </div>

      {/* ✅ Hero Section with proper spacing for sticky nav */}
      <section className="h-screen relative w-full pt-32 sm:pt-40">
        {/* Background Image */}
        <Image
          key={count}
          src={images[count]}
          alt={`Home${count + 1}`}
          ref={imgRef}
          fill
          className={`object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          sizes="100vw"
          priority
        />

        {/* Search Bar */}
        {showSearch && (
          <div
            ref={searchBarRef}
            className="flex flex-1 h-64 sm:h-96 justify-center items-center px-4"
          >
            <SearchBar />
          </div>
        )}

        {/* Foreground Content */}
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 right-4 sm:right-10 gap-6 sm:gap-20 flex flex-col sm:flex-row items-start sm:items-end ">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight sm:leading-tight">
              <span className="list-none heading">Bold Layers,</span> <br />
              <span className="list-none heading">Confident Looks.</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-10 mt-4">
              <span className="hh h-8 w-8 sm:h-5 sm:w-5 p-1 flex justify-center items-center">
                <span className="text-lg sm:text-xl text-white font-bold">
                  0{count + 1}
                </span>
              </span>
              <div className="flex gap-3 sm:gap-5 overflow-x-auto pb-2 w-full">
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    className="rounded-lg border-gray-400 border object-cover h-16 w-24 sm:h-[80px] sm:w-[120px] cursor-pointer transition-transform duration-300 hover:scale-105 flex-shrink-0"
                    src={img}
                    alt={`thumb-${idx}`}
                    height={80}
                    width={120}
                    onMouseEnter={() => setCount(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 sm:flex-row flex-col sm:flex-none text-center sm:text-left">
            <h1 className="text-white pb-3 sm:pb-4 font-light text-base sm:text-lg">
              Upgrade your wardrobe with <br className="hidden sm:block" /> 
              crisp, versatile T-shirts
            </h1>
            <button className="text-[#33383c] py-2 px-4 sm:py-2 sm:px-4 rounded-lg bg-[#e3e3e3] hover:bg-[#e3e3e399] transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Browse Collection
            </button>
          </div>
        </div>
      </section>

      {/* Component Sections */}
      <div className="">
        {/* <Categories /> */}
        <BestSeller />
        <OurStory />
        <NewProduct />
        <DiscoverCollection />
        <RefineCasual />
        <Services />
        <Blogs />
        <TrendingProductsCarousel />
        <TrustedByMarquee/>
        <Testimonilas />
        <Pictures />
      </div>
      
      <Footer />
    </div>
  );
}