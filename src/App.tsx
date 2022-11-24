import React from "react";
import Login from "./components/Login";
import Brand from "./components/Brand";
import classes from "./app.module.css";

const App: React.FunctionComponent = () => {
  return (
    <div className={classes.body}>
      <Brand />
      <Login />
    </div>
  );
};

export default App;
