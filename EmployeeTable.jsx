import { useEffect, useState } from "react";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8500/teamapi/EmployeeAPI.cfc?method=getEmployees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Team Directory</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.ID}>
              <td>{emp.ID}</td>
              <td>{emp.FirstName}</td>
              <td>{emp.LastName}</td>
              <td>{emp.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}