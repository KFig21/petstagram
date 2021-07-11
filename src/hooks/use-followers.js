import { useState, useEffect } from "react";
import { getUserByUserId, getFollowingOrFollowers } from "../services/firebase";

export default function useFollowers(user) {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    async function fetchFollowers() {
      const [{ followers }] = await getUserByUserId(user.userId);
      let followersArray = [];

      if (followers === undefined) {
        followersArray = [];
      } else if (followers.length > 0) {
        followersArray = await getFollowingOrFollowers(followers);
      }

      setFollowers(followersArray);
    }

    fetchFollowers();
  }, [user]);

  return { followers };
}
