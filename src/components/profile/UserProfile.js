import React, { useReducer, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import Photos from "./Photos";
import Follows from "./Follows";
import { getUserPhotosByUsername } from "../../services/firebase";
import useFollowing from "../../hooks/use-following";
import useFollowers from "../../hooks/use-followers";

export default function UserProfile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [showPhotos, setShowPhotos] = useState(true);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const { following } = useFollowing(user);
  const { followers } = useFollowers(user);

  const handleShowPhotos = () => {
    setShowPhotos(true);
    setShowFollowers(false);
    setShowFollowing(false);
  };

  useEffect(() => {
    handleShowPhotos();
  }, [user]);

  const handleShowFollowers = () => {
    setShowPhotos(false);
    setShowFollowers(true);
    setShowFollowing(false);
  };

  const handleShowFollowing = () => {
    setShowPhotos(false);
    setShowFollowers(false);
    setShowFollowing(true);
  };

  const initialState = {
    profile: {},
    photosCollection: null,
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username);
      let followersCount = 0;
      if (user.followers === undefined) {
      } else {
        followersCount = user.followers.length;
      }

      dispatch({
        profile: user,
        photosCollection: photos.sort((a, b) => b.dateCreated - a.dateCreated),
        followerCount: followersCount,
      });
    }

    if (user.username) {
      getProfileInfoAndPhotos();
    }
  }, [user]);

  return (
    <>
      <ProfileHeader
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
        handleShowFollowers={handleShowFollowers}
        handleShowFollowing={handleShowFollowing}
        handleShowPhotos={handleShowPhotos}
      />
      {showPhotos && <Photos photos={photosCollection} />}
      {showFollowers && <Follows follows={followers} title={"Followers"} />}
      {showFollowing && <Follows follows={following} title={"Following"} />}
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    fullName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};
