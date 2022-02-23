import React from "react";

const Form = (props) => {
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        props.change(name, value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        props.submit()
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="name here"
          value={props.values.name}
          name="name"
          onChange={handleChange}
          type="text"
          maxLength="30"
        />
      </label>
      <label>
        Email
        <input
          placeholder="Email here"
          value={props.values.email}
          name="email"
          onChange={handleChange}
          type="email"
        />
      </label>
      <label>
        Role
        <select value={props.values.role} name="role" onChange={handleChange}>
          <option value="">---Select---</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Alumni">Alumni</option>
        </select>
      </label>
      <input type="submit" value="Join our Team!" />
    </form>
  );
};

export default Form;
