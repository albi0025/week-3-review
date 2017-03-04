import React from 'react';


class EmployeeList extends React.Component {

  constructor() {
    super();
  }

  render() {
    var empList = this.props.employees.map(function(employee) {
      return (
        <tr>
          <td>{employee.name}</td>
          <td>{employee.boss}</td>
        </tr>
      )
    })
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Boss</th>
          </tr>
          {empList}
        </table>
      </div>
    );
  }
}




export default EmployeeList;
