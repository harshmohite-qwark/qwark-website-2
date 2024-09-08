import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Qwark | Personalized, Intelligent Investment Journeys",

  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <Features />
      {/*<Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
      <ToastContainer
        position={"top-center"}
        theme="dark"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeButton={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        rtl={false}
      />
    </>
  );
}
