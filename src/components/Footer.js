import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import useUser from "../hooks/use-user";
import newPostIcon from "../assets/newPost.png";
import "./components.css";

export default function Footer() {
  const { user } = useContext(UserContext);
  const { userInfo } = useUser();

  return (
    <footer className="h-12 bg-white border-b border-gray-primary fixed bottom-0 z-50 w-screen">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex h-full px-8">
          <div className="text-gray-700 text-center flex justify-between w-screen items-center align-items">
            {user ? (
              <>
                <Link
                  to={{
                    pathname: `${ROUTES.UPLOAD_POST}`,
                    state: { type: "post" },
                  }}
                  aria-label="upload post"
                >
                  <img
                    src={newPostIcon}
                    alt="add post"
                    className="w-8  lg:mr-6 cursor-pointer"
                  />
                </Link>
                <Link to={ROUTES.DASHBOARD} aria-label="timeline">
                  <svg
                    className="w-8  lg:mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                    <title>Timeline</title>
                  </svg>
                </Link>

                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${userInfo.username}`}>
                    <img
                      title={`${userInfo.username}`}
                      className="rounded-full h-8 w-8 flex object-cover"
                      src={`${userInfo.avatar}`}
                      alt={`${userInfo.username} profile`}
                    />
                  </Link>
                </div>
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
    </footer>
  );
}
