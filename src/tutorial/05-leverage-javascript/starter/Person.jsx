import avatar from "../../../assets/default-avatar.svg";
import React from "react";
export function Person({ name, nickName = "shakeAndBake", images }) {
  //   const img = images?.[0]?.small?.url || avatar;
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img src={img} style={{ width: "50px" }} alt="" />
      <h4>{name}</h4>
      <p>Nickname : {nickName || "shakeAndBake"}</p>
    </div>
  );
}
