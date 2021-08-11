import React, { useEffect } from "react";
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar/Sidebar";

export default function Dashboard() {
  useEffect(() => {
    document.title = "instagram";
  }, []);
  return (
    <div className="bg-gray-background ">
      <Header />
      <MobileHeader />
      <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 justify between mx-auto max-w-screen-md">
        <Timeline />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
