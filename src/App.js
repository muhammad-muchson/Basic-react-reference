import React from "react";
import "./App.css";
import { app } from "./base";

function App() {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    console.log("file = ", file);
    console.log("storageRef = ", storageRef);
    console.log("fileRef = ", fileRef);
    fileRef.put(file).then((e) => {
      console.log("Uploaded a file");
      console.log("didalam e = ", e);
      e.ref.getDownloadURL().then(function (downloadURL) {
        console.log("File available at", downloadURL);
      });
    });
  };

  return <input type="file" onChange={onChange} />;
}

export default App;
