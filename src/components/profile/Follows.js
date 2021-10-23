import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export default function Followers({ follows, title }) {
  return (
    <div className="flex flex-col justify-center m-auto items-center mb-20">
      <p className="text-center text-2xl m-3">{title}</p>
      {!follows ? (
        <>
          <div className="flex items-center justify-start w-64">
            <Skeleton count={12} width={256} height={64} className="m-1" />
          </div>
        </>
      ) : follows.length > 0 ? (
        follows.map((user) => (
          <div key={user.userId}>
            <Link to={`/p/${user.username}`}>
              <div className="flex items-center justify-start w-64 hover:bg-gray-primary bg-gray-light p-2 m-1 rounded">
                <img
                  src={user.avatar}
                  className="rounded-full h-12 w-12 flex mr-3 object-cover"
                  alt={`${user.username} avi`}
                />
                <div className="col-span-3">
                  <p className="text-sm font-bold">{user.username}</p>
                  <p className="text-sm text-gray-dark">{user.fullName}</p>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : null}
      {!follows ||
        (follows.length === 0 && <p className="text-center text-2xl">...</p>)}
    </div>
  );
}
