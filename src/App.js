import React from "react";
import { useInterval } from "./useInterval";
import { useGenerated } from "./useGenerated";
import { nameGenerator } from "./nameGenerator";
import { Name, FullName } from "./Name";
import "./hideIdleCursor";
import "./App.css";

const query = new URLSearchParams(window.location.search);

const firstName = query.get("firstName") || "First";
const lastName = query.get("lastName") || "Last";
const middleNames = (query.get("middleNames") || "One,Two,Three").split(",");
const speed = query.get("speed") || 3000;

function App() {
  const [secondName, thirdName, nextNames] = useGenerated(
    nameGenerator,
    middleNames
  );

  useInterval(nextNames, speed);

  return (
    <div className="App">
      <header className="App-header">
        <FullName>
          <Name>{firstName}</Name>
          <Name>{secondName}</Name>
          <Name>{thirdName}</Name>
          <Name>{lastName}</Name>
        </FullName>
      </header>
    </div>
  );
}

export default App;
