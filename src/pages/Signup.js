import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignup = async (e) => {
    e.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });
        var newDocRef = await firebase.firestore().collection("users").doc();
        newDocRef.set({
          avatar: `https://firebasestorage.googleapis.com/v0/b/instagram-clone-fb42d.appspot.com/o/no-img.png?alt=media`,
          userId: createdUserResult.user.uid,
          username: username,
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
          docId: newDocRef.id,
        });
        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("That username is already taken");
    }
  };

  useEffect(() => {
    document.title = "Sign-up - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      {/* left side */}
      <div className="flex w-1/2 justify-end">
        {/* iphone image */}
        <img
          src="/images/iphone-with-profile.png"
          className="max-h-96"
          alt="iphone with ig app"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          {/* logo header */}
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="igLogo"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {/* error message */}
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          {/* form */}
          <form onSubmit={handleSignup} method="POST">
            {/* username */}
            <input
              aria-label="Enter your username"
              type="test"
              placeholder="Username"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            {/* full name */}
            <input
              aria-label="Enter your full name"
              type="test"
              placeholder="Full name"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            {/* email */}
            <input
              aria-label="Enter your email address"
              type="test"
              placeholder="Email address"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            {/* password */}
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            {/* login button */}
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-primary text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign-up
            </button>
          </form>
        </div>
        {/* switch to signup page */}
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Already have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
