import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile, toggleFollow } from "../../services/firebase";
import plusSign from "../../assets/plus-sign.png";
import { deleteProfile } from "../../services/firebase";
import * as ROUTES from "../../constants/routes";

export default function ProfileHeader({
  photosCount,
  followerCount,
  setFollowerCount,
  handleShowFollowers,
  handleShowFollowing,
  handleShowPhotos,
  profile: {
    avatar,
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    following = [],
    followers = [],
    username: profileUsername,
  },
}) {
  const { userInfo } = useUser();
  const history = useHistory();
  const [isFollowingProfile, setIsFollowingProfile] = useState(null);
  const [deletePostButton, setDeletePostButton] = useState(false);
  const activeBtnFollow =
    userInfo?.username && userInfo?.username !== profileUsername;

  const loggedInUsersProfile = userInfo?.username === profileUsername;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1,
    });

    await toggleFollow(
      isFollowingProfile,
      userInfo.docId,
      profileDocId,
      profileUserId,
      userInfo.userId
    );
  };

  const handleX = () => {
    setDeletePostButton(!deletePostButton);
  };

  const handleDelete = () => {
    deleteProfile(userInfo);
    setTimeout(function () {
      history.push("/login");
    }, 500);
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        userInfo.username,
        profileUserId
      );
      setIsFollowingProfile(!!isFollowing);
    };

    if (userInfo?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [userInfo.username, profileUserId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-6 pb-6 border-b border-gray-primary relative">
      {/* delete profile */}
      <div
        className="flex justify-center absolute h-16"
        style={{ top: "-10px", right: "5px" }}
      >
        {deletePostButton && (
          <button
            onClick={handleDelete}
            className="hover:bg-red-primary hover:text-white font-bold h-12 px-2 py-1 rounded ml-6 duration-150"
            title="confirm delete"
          >
            delete?
          </button>
        )}
        {loggedInUsersProfile &&
          userInfo.userId !==
            "i6isWMwVjqaouBIqqSERS7jCnyN2" /* test account cant be deleted */ && (
            <div
              title={deletePostButton ? "cancel delete" : "delete your profile"}
              onClick={handleX}
            >
              <p
                className={`font-bold text-4xl  hover:text-red-primary cursor-pointer duration-150 ${
                  deletePostButton
                    ? `hover:text-green-primary`
                    : `hover:text-red-primary`
                }`}
              >
                ×
              </p>
            </div>
          )}
      </div>
      <div className="container flex justify-center relative group h-28 w-28 lg:h-40 lg:w-40 m-auto ml-3 lg:ml-0">
        <img
          src={avatar}
          className="rounded-full h-28 w-28 lg:h-40 lg:w-40 flex object-cover"
          alt={`${profileUsername} avi`}
        />
        {/* if logged in user is on their own profile and hovers over their avi, add the ability to change avi */}
        {loggedInUsersProfile && (
          <Link
            to={{
              pathname: `${ROUTES.UPLOAD_POST}`,
              state: { type: "avatar" },
            }}
            aria-label="upload post"
            className="absolute justify-center"
          >
            <div className=" bottom-0 bg-gray-200 z-10 justify-evenly items-center h-28 w-28 lg:h-40 lg:w-40 bg-black-faded group-hover:flex hidden rounded-full">
              <img
                src={plusSign}
                alt="plus"
                className="flex items-center h-16 w-16 lg:h-20 lg:w-20 opacity-60 cursor-pointer"
              />
            </div>
          </Link>
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && (
            <button
              className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleToggleFollow();
                }
              }}
            >
              {isFollowingProfile ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="container flex mt-2 lg:mt-4">
          {followers === undefined || following === undefined ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p
                className="mr-5 lg:mr-10 cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3"
                onClick={handleShowPhotos}
              >
                <span className="font-bold text-black-base text-base">
                  {photosCount}
                </span>
                {` `} {photosCount === 1 ? `photo` : `photos`}
              </p>
              <p
                className="mr-5 lg:mr-10 cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3"
                onClick={handleShowFollowers}
              >
                <span className="font-bold text-black-base text-base">
                  {followerCount}
                </span>
                {` `} {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p
                className="cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3"
                onClick={handleShowFollowing}
              >
                <span className="font-bold text-black-base text-base ">
                  {following.length}
                </span>{" "}
                following
              </p>
            </>
          )}
        </div>
        <div className="container mt-3 lg:mt-4">
          <p className="text-sm lg:text-base font-medium">
            {!fullName ? <Skeleton count={1} height={24} /> : fullName}
          </p>
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
    fullName: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};
