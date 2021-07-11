import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function User({ username, fullName, avatar }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          src={avatar}
          className="rounded-full h-12 w-12 flex mr-3 object-cover"
          alt="avi"
        />
      </div>
      <div className="col-span-3">
        <p className="text-sm font-bold">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}
User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
