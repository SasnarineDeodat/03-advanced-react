import React from "react";
export function Person({ name, nickName, images }) {
  const img = images[0].small.url;
  return (
    <div>
      <img src={img} style={{ width: "50px" }} alt="" />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
