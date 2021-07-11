import React, { useEffect } from "react";
import Header from "../components/Header";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found! - Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-authmax-w-screen-lg">
        <p className="text-center text-2xl">Not Found :(</p>
      </div>
    </div>
  );
}
