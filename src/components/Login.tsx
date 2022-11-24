import React, { useReducer } from "react";
import classes from "./login.module.css";

interface State {
  username: string;
  password: string;
}

const init: State = {
  username: "",
  password: "",
};

interface Action {
  type: "password" | "username";
  payload: string;
}

type RF = (state: State, action: Action) => State;

const reduce: RF = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "password":
      return {
        ...state,
        password: payload,
      };
    case "username":
      return {
        ...state,
        username: payload,
      };
    default:
      throw new Error("invalid action");
  }
};

const Login: React.FunctionComponent = () => {
  const [{ username, password }, dispatch] = useReducer(reduce, init);
  return (
    <form className={classes.form}>
      <input
        className={classes.inputs}
        type="text"
        onChange={(evt) =>
          dispatch({ type: "username", payload: evt.target.value })
        }
        value={username}
        placeholder="Email address or phone number"
        required
      />
      <input
        className={classes.inputs}
        type="password"
        onChange={(evt) =>
          dispatch({ type: "password", payload: evt.target.value })
        }
        value={password}
        placeholder="Password"
        required
      />
      <button className={classes.log} type="submit">
        Log in
      </button>
      <a href="https://www.facebook.com/help" className={classes.forget}>
        Forget password?
      </a>
      <hr className={classes.line} />
      <button className={classes.newAccount} type="button">
        Create New Account
      </button>
    </form>
  );
};

export default Login;
