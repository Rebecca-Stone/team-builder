//importing React and useState to create slices of state
import React, { useState } from 'react';
//importing form to be able to carry over data
import Form from './components/Form'; 

export default function App() {

  //using this as basic state, so i don't have to write it out multiple times
  const initialState = {
  name: '',
  email: '',
  role: ','
  }
  //state to keep track of team members
  const [team, setTeamMembers] = useState([]);
  //state to keep track of values
  const [values, setValues] = useState(initialState);

  const onSubmit = () => {
    setTeamMembers({values, ...team});
    setValues(initialState);
    }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div className="App">
      <h1>Join Us!</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {team.map((team, index) => {
        return (
          <div key={index}>
            {team.name}, {team.role}, {team.email}
          </div>
        );
      })}
    </div>
  )
}