import logo from "./logo.svg";
import { useState, useEffect } from "react";

import "./App.css";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Cookies from "universal-cookie";

const GetTodo = gql`
  query MyQuery {
    auth(limit: 1) {
      id
      level
      name
      password
      url
      username
    }
  }
`;

const GetTodoListByUserId = gql`
  query MyQuery($_eq: String, $_eq1: String) {
    auth(where: { name: { _eq: $_eq }, password: { _eq: $_eq1 } }, limit: 1) {
      id
      level
      name
      password
      url
      username
    }
  }
`;

export default function Login() {
  const cookies = new Cookies();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const { data, loading, error } = useQuery(GetTodo);
  const [getTodo, { data, loading, error }] = useLazyQuery(GetTodoListByUserId);
  let navigate = useNavigate();
  useEffect(() => {
    if (data?.auth.length === 1) {
      console.log("data", data);
      cookies.set("auth", true, { path: "/" });
      return navigate("/home");
    }
  }, [data]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    // console.log();
    setPassword(e.target.value);
  };
  const login = () => {
    getTodo({ variables: { _eq: name, _eq1: password } });

    console.log(data?.auth.length);
  };
  if (loading) {
    return <h1>Loading</h1>;
  }
  // console.log(name);
  console.log(data?.auth.length);
  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" onChange={handleChangeName} />
      <input type="text" onChange={handleChangePassword} />
      {data && <h4>gagal</h4>}
      <button onClick={login}> Submit </button>
    </div>
  );
}
