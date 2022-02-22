//importing React and useState to create slices of state
import React, { useState } from 'react';
//importing form to be able to carry over data
import Form from './components/Form'; 

const initialState = {
  name: '',
  email: '',
  role: ','
}

function App() {
  const [team, setTeamMembers] = useState([]);
  const [values, setValues] = useState(initialState);

  const onSubmit = () => {
    setTeamMembers({values, ...team});
    setValues(initialState);
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div className='App'>
      <h1>Join Us!</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {team.map((team, index) => {
        return (
          <div key={index}>
            {team.name}, {team.role}, {team.email}
          </div>
        )
      })}
    </div>
  )
}

export default App;