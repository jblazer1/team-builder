import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import foobar from "./data";

function App() {
  const [team, setTeam] = useState(foobar);

  const addNewMember = member => {
    setTeam([...team, team]);
  };

  return (
    <div className="App">
      <header className="App-header">TEAM MEMBERS</header>
      <TeamForm addNewMember={addNewMember} />
      <Member memberList={team} />
    </div>
  );
}

export default App;
