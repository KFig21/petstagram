import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const history = useHistory();

  return (
    <header className="h-12 bg-white border-b border-gray-primary sticky top-0 z-50 mobile-header relative">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-end h-full pr-5 pl-5">
          <div className="text-gray-700 text-center flex  items-center align-items cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="instagram header">
                <img src={logo} alt="instagram header" className="mt-2 w-28" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex flex-none items-center align-items">
            {user ? (
              <>
                <button
                  type="button"
                  title="Sign-out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "enter") {
                      history.push("/login");
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <svg
                    className="w-8  text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Login
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="bg-white font-bold text-sm rounded text-blue-primary w-20 h-8"
                  >
                    Sign-up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
