import { authService } from "myBase";
import React from "react";
import { useHistory } from "react-router";
import Home from "./Home";

export default () => {
  let history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}; // function component
