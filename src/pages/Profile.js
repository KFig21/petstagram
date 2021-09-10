import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import UserProfile from "../components/profile/UserProfile";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    document.title = `${username} - Petstagram`;
    async function checkUserExists() {
      const [doesUserExist] = await getUserByUsername(username);
      if (doesUserExist.userId) {
        setUser(doesUserExist);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, history]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <MobileHeader />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
      <Footer />
    </div>
  ) : null;
}
