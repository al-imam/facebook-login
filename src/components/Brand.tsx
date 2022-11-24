import React from "react";
import classes from "./brand.module.css";

const Brand: React.FunctionComponent = () => (
  <div className={classes.heading}>
    <h1 className={classes.title}>Facebook</h1>
    <span className={classes.subtitle}>
      Facebook helps you connect and share with the people in your life.
    </span>
  </div>
);

export default Brand;
