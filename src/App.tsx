import classes from "./app.module.css";
import Login from "./components/Login";
import React from "react";

const App: React.FunctionComponent = () => {
  return (
    <div className={classes.body}>
     <h1>Facebook</h1>
     <span>Facebook helps you connect and share with the people in your life.</span>
      <Login />
    </div>
  );
};

export default App;
