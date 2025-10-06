import React from "react";
import { useParams } from "react-router-dom";

function UserInfo() {
  const param = useParams()
  return (
    <div>
      <h2 className="text-center text-3xl">User Info :{param.userId} </h2>
    </div>
  );
}

export default UserInfo;

