import React from "react";
import useUser from "../../hooks/use-user";
import User from "./User";
import Suggestions from "./Suggestions";

export default function Sidebar() {
  // user info for further development
  const { userInfo } = useUser();

  // use destructuring the user to make further coding easier
  // const {
  //   user: { fullName, username, userId, following, avatar, docId },
  // } = useUser();

  return (
    <div className="p-4 relative">
      <div className="fixed">
        <User
          username={userInfo.username}
          fullName={userInfo.fullName}
          avatar={userInfo.avatar}
        />
        <Suggestions
          userId={userInfo.userId}
          following={userInfo.following}
          loggedInUserDocId={userInfo.docId}
        />
      </div>
    </div>
  );
}
