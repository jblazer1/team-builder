import React, { useState } from "react";
import "./App.css";

import TeamForm from "./components/TeamForm.js";
import Member from "./components/Member.js";

import foobar from "./data";

function App() {
  const [teams, setTeams] = useState(foobar);

  const addNewMember = member => {
    setTeams([...teams, member]);
  };

  return (
    <div className="App">
      <h1>Add a new MEMBER to the team here</h1>
      <TeamForm addNewMember={addNewMember} />
      <h2>TEAM MEMBERS</h2>
      <Member memberList={teams} />
    </div>
  );
}

export default App;
