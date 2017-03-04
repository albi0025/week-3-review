
import React from 'react';


class Employee extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Boss</th>
        </tr>
        <tr>
          <td>Fred</td>
          <td>Sue</td>
        </tr>
      </table>
    );
  }
}




export default Employee;
