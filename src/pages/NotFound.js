import React, { useEffect } from "react";
import Header from "../components/Header";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function NotFound({ user }) {
  useEffect(() => {
    document.title = "Not Found! - Instagram";
  }, []);
  return (
    <div>
      {user ? (
        <div className="bg-gray-background">
          <Header />
          <div className="mx-authmax-w-screen-lg">
            <p className="text-center text-2xl">Not Found!</p>
          </div>
        </div>
      ) : (
        <Redirect to={ROUTES.LOGIN} />
      )}
    </div>
  );
}
