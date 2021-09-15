import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { Link, useHistory } from "react-router-dom";
import AddComment from "./AddComment";
import useUser from "../../hooks/use-user";
import { deleteCommentByCommentId } from "../../services/firebase";

export default function Comments({
  docId,
  comments: allComments,
  posted,
  commentInput,
  page,
}) {
  const [comments, setComments] = useState(allComments);
  const { userInfo } = useUser();
  const [deletePostButton, setDeletePostButton] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState("");
  const history = useHistory();
  let maxComments = 3;
  if (page === "post") {
    maxComments = comments.length;
  }

  // sets the comment that the user wants to delete, shows confirmation 'y n'
  function handleX(comment) {
    setCommentToDelete(comment);
    setDeletePostButton(!deletePostButton);
  }

  // deletes the comment from the database, refreshes the page
  function handleY() {
    deleteCommentByCommentId(docId, allComments, commentToDelete, userInfo);
    setDeletePostButton(!deletePostButton);
    setTimeout(function () {
      if (page === "timeline") {
        window.location.reload();
      }
      if (page === "post") {
        history.push("/");
      }
    }, 500);
  }

  // closes the delete options
  function handleN() {
    setDeletePostButton(!deletePostButton);
  }

  return (
    <>
      <div className="p-4 pt-1 pb-4 mb-14">
        {comments.length >= 3 && page === "timeline" && (
          <Link to={`/post/${docId}`}>
            <p className="text-sm text-gray-base mb-1 cursor-pointer">
              View all comments
            </p>
          </Link>
        )}
        {comments.slice(0, maxComments).map((item) => (
          <div
            key={`${item.comment}-${item.displayName}`}
            className="mb-1 flex flex-row justify-between"
          >
            <div>
              <Link to={`/p/${item.displayName}`}>
                <span className="mr-2 font-bold">{item.displayName}</span>
              </Link>
              <span>{item.comment}</span>
            </div>
            <div className="flex flex-col">
              {/* if this is the logged in users comment, show the 'x' button to start the deletion process */}
              {userInfo.userId === item.userId && !deletePostButton && (
                <p
                  className="font-bold text-xl hover:text-red-primary cursor-pointer duration-150 leading-5"
                  title={"delete your comment"}
                  onClick={() => {
                    handleX(item.commentId);
                  }}
                >
                  ×
                </p>
              )}
              {/* if the logged in use clicks 'x' allow them to confirm their deletion with 'y n' */}
              {deletePostButton && commentToDelete === item.commentId && (
                <div className="flex flex-row">
                  {/* delete comment */}
                  <p
                    className="font-bold text-xs hover:text-red-primary cursor-pointer duration-150 leading-loose mr-2"
                    onClick={handleY}
                    title={"confirm delete"}
                  >
                    y
                  </p>
                  {/* don't delete comment */}
                  <p
                    className="font-bold text-xs hover:text-green-primary cursor-pointer duration-150 leading-loose"
                    onClick={handleN}
                    title={"cancel delete"}
                  >
                    n
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <p className="text-gray-base uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
