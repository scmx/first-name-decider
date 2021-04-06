import React from "react";
import { useInterval } from "./useInterval";
import { useGenerated } from "./useGenerated";
import { nameGenerator } from "./nameGenerator";
import {
  FullName,
  FullNameLastNameFirst,
  LastNameFirst,
  Initials,
} from "./Name";
import "./hideIdleCursor";
import "./App.css";

const query = new URLSearchParams(window.location.search);

const nameCount = Math.max(1, Math.min(3, Number(query.get("nameCount") || 3)));
const firstName = query.get("firstName");
const lastName = query.get("lastName") || "Last";
const middleNames = (query.get("middleNames") || "One,Two,Three").split(",");
const speed = Number(query.get("speed") || 3000);

function App() {
  const [fullName, nextNames] = useGenerated(nameGenerator, {
    nameCount,
    firstName,
    middleNames,
    lastName,
  });

  useInterval(nextNames, speed);

  return (
    <div className="App">
      <header className="App-header">
        <FullName {...fullName} />
        <FullNameLastNameFirst {...fullName} />
        <LastNameFirst {...fullName} />
        <Initials {...fullName} />
      </header>
    </div>
  );
}

export default App;
