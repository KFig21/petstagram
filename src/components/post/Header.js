import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getUserByUserId, deletePostById } from "../../services/firebase";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/use-user";

export default function Header({ userId, docId, photoStorageName, page }) {
  const [postUser, setPostUser] = useState("");
  const [deletePostButton, setDeletePostButton] = useState(false);
  const { userInfo } = useUser();
  const history = useHistory();

  useEffect(() => {
    async function checkUserExists() {
      const [doesUserExist] = await getUserByUserId(userId);
      if (doesUserExist.userId) {
        setPostUser(doesUserExist);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [userId, history]);

  const handleX = () => {
    setDeletePostButton(!deletePostButton);
  };

  const handleDelete = () => {
    console.log(docId);
    deletePostById(docId, photoStorageName);
    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center justify-between w-full">
        <Link to={`/p/${postUser.username}`} className="flex items-center">
          <img
            src={postUser.avatar}
            className="rounded-full h-8 w-8 flex mr-3 object-cover"
            alt={`${postUser.username} avi`}
          />
          <p className="font-bold">{postUser.username}</p>
        </Link>
        <div className="flex justify-center items-center">
          {deletePostButton && (
            <button
              onClick={handleDelete}
              className="hover:bg-red-primary hover:text-white font-bold h-5/6 px-2 py-1 rounded mr-6 duration-150"
              title="confirm delete"
            >
              delete?
            </button>
          )}
          {userInfo.userId === postUser.userId && page === "post" && (
            <p
              className={`font-bold text-4xl hover:text-red-primary mb-2 cursor-pointer duration-150 ${
                deletePostButton
                  ? `hover:text-green-primary`
                  : `hover:text-red-primary`
              }`}
              onClick={handleX}
              title={deletePostButton ? "cancel delete" : "delete your post"}
            >
              ×
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string,
  docId: PropTypes.string,
  photoStorageName: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
