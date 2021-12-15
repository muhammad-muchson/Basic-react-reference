import React from "react";
import "./App.css";
import { app } from "./base";
import { Base64 } from "js-base64";
import Cookies from "universal-cookie";
function App() {
  const cookies = new Cookies();
  let JWT_Token = "dankogai";
  cookies.set("JWT", Base64.encode(JWT_Token), { path: "/" });
  cookies.set("cat", "Pacman", { path: "/" });
  console.log(cookies.get("myCat")); // Pacman
  let jwtEncode = Base64.encode("dankogai");
  let jwtDecode = Base64.decode(jwtEncode);
  return (
    <>
      <h1>{JSON.stringify(cookies.get("JWT"))}</h1>
      <h1>{JSON.stringify(jwtDecode)}</h1>
    </>
  );
}

export default App;
