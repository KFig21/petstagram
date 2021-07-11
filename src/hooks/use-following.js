import { useState, useEffect } from "react";
import { getUserByUserId, getFollowingOrFollowers } from "../services/firebase";

export default function useFollowing(user) {
  const [following, setFollowing] = useState(null);

  useEffect(() => {
    async function fetchFollowing() {
      const [{ following }] = await getUserByUserId(user.userId);
      let followingArray = [];

      if (following.length > 0) {
        followingArray = await getFollowingOrFollowers(following);
      }

      setFollowing(followingArray);
    }

    fetchFollowing();
  }, [user]);

  return { following };
}
