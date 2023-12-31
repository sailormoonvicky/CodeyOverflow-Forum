import React from "react";

export function Header(props) {
  return (
    <div>
      <img src={props.profileImg} alt=''/>
      <h1>{props.username}</h1>
    </div>
  )
}
