import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import iPhonePic from "../assets/iphone-with-profile.png";
import logo from "../assets/logo.png";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      {/* left side */}
      <div className="flex w-1/2 justify-end">
        {/* iphone image */}
        <img src={iPhonePic} className="max-h-96" alt="iphone with ig app" />
      </div>
      {/* right side */}
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          {/* logo header */}
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="igLogo" className="mt-2 w-6/12 mb-4" />
          </h1>
          {/* error message */}
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          {/* form */}
          <form onSubmit={handleLogin} method="POST">
            {/* email */}
            <input
              aria-label="Enter your email address"
              type="test"
              placeholder="Email address"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            {/* password */}
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* login button */}
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-primary text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Login
            </button>
          </form>
        </div>
        {/* switch to signup page */}
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-primary">
              Sign-up
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs mt-2">Wanna look around?</p>
          <p className="text-xs mt-2">
            email: <strong>TestAccount@mail.com</strong>,
          </p>
          <p className="text-xs mt-2">
            Password: <strong>TestAccount</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
