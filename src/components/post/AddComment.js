import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import uniqid from "uniqid";
import useUser from "../../hooks/use-user";

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState("");
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  const { userInfo } = useUser();

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    setComments([{ displayName: user.displayName, comment }, ...comments]);
    setComment("");

    const commentId = uniqid();

    // add comment to user collection
    firebase
      .firestore()
      .collection("users")
      .doc(userInfo.docId)
      .update({
        comments: FieldValue.arrayUnion({
          photoDocId: docId,
          comment,
          commentId,
        }),
      });

    // add comment to photo collection
    return firebase
      .firestore()
      .collection("photos")
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({
          displayName: user.displayName,
          comment,
          userId: user.uid,
          commentId,
          userDocId: userInfo.docId,
        }),
      });
  };

  return (
    <div className="border-t border-gray-primary bg-white absolute inset-x-0 bottom-0 justify-center ">
      <form
        className="flex justify-between pl-0"
        method="post"
        onSubmit={(e) =>
          comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-primary px-5 ${
            !comment && "opacity-25"
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object.isRequired,
};
