import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";
import { useHistory } from "react-router";

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(user.uid);
      let followedUserPhotos = [];

      if (following === undefined) {
        followedUserPhotos = [];
      } else if (following.length > 0) {
        followedUserPhotos = await getPhotos(
          user.uid,
          following,
          user.displayName
        );
      }

      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    if (user !== null) {
      getTimelinePhotos();
    } else {
      history.push("/login");
    }
  }, [user, history]);

  return { photos };
}
