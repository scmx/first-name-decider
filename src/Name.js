import React from "react";
import styles from "./Name.module.css";

export function Name({ ...rest }) {
  return <span className={styles.name} {...rest} />;
}

export function FullName({ children, ...rest }) {
  return (
    <h1 className={styles["full-name"]} {...rest}>
      {children}
    </h1>
  );
}
