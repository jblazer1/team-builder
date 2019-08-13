import React from "react";

const Member = props => {
  console.log(props);
  return (
    <div>
      {props.memberList.map(member => (
        <div key={member.id}>
          <h2>NAME: {member.name}</h2>
          <h3>EMAIL: {member.email}</h3>
          <h3>ROLE: {member.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default Member;
