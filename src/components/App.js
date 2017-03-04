import React from 'react';
import EmployeeList from './EmployeeList';

const list = [
  {name: "Fred", boss: "Sue"},
  {name: "Jennifer", boss: "Joanna"},
  {name: "Bob", boss: "Joe"},
  {name: "Harold", boss: "John"}
];

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <EmployeeList employees={list} />
      </div>
    );
  }
}

export default App;
