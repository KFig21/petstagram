import React, { useState } from "react";
import useUser from "../../hooks/use-user";
import useAuthListener from "../../hooks/use-auth-listener";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Header from "../post/Header";
import { submitPost, updateUserAvatar } from "../../services/firebase";

export default function FinalizePost({
  selectedImage,
  handleFinishEditingCancel,
  fileName,
  type,
}) {
  const [caption, setCaption] = useState("");
  const [posted, setPosted] = useState(false);

  const { userInfo } = useUser();
  const { user } = useAuthListener();

  const handleInput = (e) => {
    const formValue = e.currentTarget.value;
    if (formValue.length < 2200) {
      setCaption(formValue);
    }
  };

  const handlePost = () => {
    submitPost(userInfo, selectedImage, caption, fileName);
    setTimeout(function () {
      setPosted(true);
    }, 2000);
  };

  const handleAvi = () => {
    updateUserAvatar(userInfo, selectedImage, fileName);
    setTimeout(function () {
      setPosted(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center w-full h-full justify-center ">
      {userInfo.username === user.displayName && (
        <>
          <div className="rounded col-span-4 border border-gray-primary bg-white">
            <Header userId={userInfo.userId} page="edit" />
            <div className="flex items-center justify-center outline-none h-full max-w-sm max-h-sm">
              <img
                className="w-full cursor-pointer"
                src={selectedImage}
                alt="The chosen, cropped post"
              />
            </div>
            {type === "post" && (
              <form className="flex flex-row place-items-center justify-evenly h-auto">
                <textarea
                  className="outline-none w-full p-2"
                  placeholder={"Write a caption..."}
                  onChange={handleInput}
                  ng-trim={false}
                  type="text"
                />
              </form>
            )}
          </div>
          <div className="h-16 mb-12 lg:mb-0 bg-white border-t border-b border-gray-primary fixed bottom-0 z-50 w-screen inset-x-0 justify-center">
            <div className="flex w-3/5 h-full items-center justify-around m-auto">
              <button
                className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
                onClick={handleFinishEditingCancel}
              >
                Back
              </button>
              <button
                className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
                onClick={type === "post" ? handlePost : handleAvi}
              >
                {type === "post" ? "Post" : "Confirm"}
              </button>
            </div>
          </div>
        </>
      )}
      {posted && <Redirect to={ROUTES.DASHBOARD} />}
    </div>
  );
}
