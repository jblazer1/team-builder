import React, { useState } from "react";

const TeamForm = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form className="some-form">
      <label className="some-label" htmlFor="name">
        Enter Team Member NAME
      </label>
      <input
        className="some-input"
        type="text"
        name="name"
        placeholder="Name"
        value={member.name}
        onChange={changeHandler}
      />
      <label className="some-label" htmlFor="email">
        Enter Team Member EMAIL
      </label>
      <input
        className="some-input"
        type="email"
        name="email"
        placeholder="email"
        value={member.email}
        onChange={changeHandler}
      />
      <label className="some-label" htmlFor="role">
        Enter Team Member ROLE
      </label>
      <input
        className="some-input"
        type="text"
        name="role"
        placeholder="Role"
        value={member.role}
        onChange={changeHandler}
      />
      <button className="some-button" type="submit" onClick={submitHandler}>
        SUBMIT
      </button>
    </form>
  );
};

export default TeamForm;
