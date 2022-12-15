import Input from "./Input";
import React, { useState } from "react";

const Login = () => {
  const [formdata, setformdata] = useState({
    username: "",
    name: "",
    password: "",
  });

  const handlechange = (event) => {
    setformdata((prevdata) => ({
      ...prevdata,
      [event.target.id]: event.target.value,
    }));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <Input
          type="text"
          placeholder="Enter username"
          onmutate={handlechange}
          value={formdata.username}
          id="username"
        />
        <br></br>
        <Input
          type="text"
          placeholder="Enter name"
          onmutate={handlechange}
          value={formdata.name}
          id="name"
        />
        <br></br>
        <Input
          type="password"
          placeholder="Enter password"
          onmutate={handlechange}
          value={formdata.password}
          id="password"
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Login;
