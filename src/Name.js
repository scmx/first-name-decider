import React from "react";
import styles from "./Name.module.css";

export function Name({ ...rest }) {
  return <span className={styles.name} {...rest} />;
}

export function FullName({
  children,
  firstName,
  secondName,
  thirdName,
  lastName,
  ...rest
}) {
  return (
    <h1 className={styles["full-name"]} {...rest}>
      {[firstName, secondName, thirdName, lastName]
        .filter(Boolean)
        .map((name) => (
          <Name key={name}>{name}</Name>
        ))}
    </h1>
  );
}

export function FullNameLastNameFirst({
  children,
  firstName,
  secondName,
  thirdName,
  lastName,
  ...rest
}) {
  return (
    <h2 className={styles["full-name"]} {...rest}>
      <Name>{lastName}</Name>
      {", "}
      {[firstName, secondName, thirdName].filter(Boolean).map((name) => (
        <Name key={name}>{name}</Name>
      ))}
    </h2>
  );
}

export function LastNameFirst({
  children,
  firstName,
  secondName,
  thirdName,
  lastName,
  ...rest
}) {
  return (
    <h2 className={styles["full-name"]} {...rest}>
      <Name>{lastName}</Name>
      {", "}
      <Name>{firstName}</Name>
    </h2>
  );
}

export function Initials({
  children,
  firstName,
  secondName,
  thirdName,
  lastName,
  ...rest
}) {
  return (
    <h2 className={styles["full-name"]} {...rest}>
      <Name>
        {[firstName, secondName, thirdName, lastName]
          .filter(Boolean)
          .flatMap((name) => name.split(" "))
          .map((name) => name[0])
          .join(".")}
      </Name>
    </h2>
  );
}
