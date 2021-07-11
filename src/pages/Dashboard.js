import React, { useEffect } from "react";
import Timeline from "../components/Timeline";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";

export default function Dashboard() {
  useEffect(() => {
    document.title = "instagram";
  }, []);
  return (
    <div className="bg-brown-light">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify between mx-auto max-w-screen-md">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
