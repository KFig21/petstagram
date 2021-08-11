import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import PostHeader from "../components/post/Header";
import Actions from "../components/post/Actions";
import Footer from "../components/post/Footer";
import Comments from "../components/post/Comments";
import { useParams, useHistory } from "react-router-dom";
import { getPostInfoByDocId } from "../services/firebase";
import usePhotos from "../hooks/use-photos";
import useUser from "../hooks/use-user";
import "./pages.css";

export default function Post() {
  const { userInfo } = useUser(); // this is needed for the logged in users id. With it we can find out whether or not the liked the photo using usePhotos
  const { photos } = usePhotos(); // usePhotos retrieves the correct values('content') that we need, including info based on thelogged in user
  const { docId } = useParams(); // retrieves the docId from the url params
  const [post, setPost] = useState(null);
  const history = useHistory();
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  useEffect(() => {
    async function checkUserExists() {
      // replaces a filter that I was unable to use with asynchronus functions
      const [doesPostExist] = await getPostInfoByDocId(docId, userInfo.userId);
      if (doesPostExist) {
        setPost(doesPostExist);
      } else {
        history.push("/not-found");
      }
    }

    checkUserExists();
  }, [docId, history, photos, userInfo.userId]);

  return post?.docId ? (
    <div>
      <Header />
      {/* desktop */}
      <div className="post-desktop">
        <div className="flex">
          <div
            className="h-full mt-6 w-min mx-auto items-center justify-center flex"
            style={{ zIndex: "5" }}
          >
            <div className="flex flex-col lg:flex-row lg:flex-col-2 border border-gray-primary m-auto w-max">
              <div className="">
                <img
                  src={post.imageSrc}
                  alt="post"
                  className="border-r border-gray-primary"
                  style={{ width: "80vh" }}
                />
              </div>
              <div className="relative bg-white" style={{ width: "60vh" }}>
                <PostHeader
                  userId={post.userId}
                  docId={docId}
                  page="post"
                  photoStorageName={post.photoStorageName}
                />
                <Actions
                  docId={post.docId}
                  totalLikes={post.likes.length}
                  likedPhoto={post.userLikedPhoto}
                  handleFocus={handleFocus}
                />
                <Footer username={post.username} caption={post.caption} />
                <Comments
                  docId={post.docId}
                  comments={post.comments}
                  posted={post.dateCreated}
                  commentInput={commentInput}
                  page="post"
                />
              </div>
            </div>
          </div>
          <div
            className="w-screen bg-black-light opacity-40 absolute cursor-pointer"
            style={{ zIndex: "1", height: "calc(100vh - 4rem)" }}
            onClick={() => history.goBack()}
          ></div>
        </div>
      </div>

      {/* mobile */}
      <div className="post-mobile">
        <div className="rounded col-span-4 border border-gray-primary bg-white mt-4 mb-2 relative">
          <PostHeader
            userId={post.userId}
            docId={post.docId}
            photoStorageName={post.photoStorageName}
            page="post"
          />
          <div className="">
            <img
              src={post.imageSrc}
              alt="post"
              className="border-r border-gray-primary"
            />
          </div>

          <Actions
            docId={post.docId}
            totalLikes={post.likes.length}
            likedPhoto={post.userLikedPhoto}
            handleFocus={handleFocus}
          />
          <Footer username={post.username} caption={post.caption} />
          <Comments
            docId={post.docId}
            comments={post.comments}
            posted={post.dateCreated}
            commentInput={commentInput}
            page="post"
          />
        </div>
        <div className="flex justify-center align-center my-5">
          <button
            className="bg-blue-primary font-bold text-sm rounded text-white w-20 h-8"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
