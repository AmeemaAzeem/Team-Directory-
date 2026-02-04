import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const employees = [
    { id: 1, firstName: "Ali", lastName: "Khan", role: "Software Intern" },
    { id: 2, firstName: "Ali", lastName: "Ahmed", role: "Backend Developer" },
    { id: 3, firstName: "Sara", lastName: "Iqbal", role: "Frontend Developer" },
    { id: 4, firstName: "Usman", lastName: "Raza", role: "Project Manager" },
    { id: 5, firstName: "Hina", lastName: "Shah", role: "QA Engineer" }
  ];

  const filtered = employees.filter(e =>
    (e.firstName + " " + e.lastName)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Team Directory</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id}>
              <td>{emp.firstName} {emp.lastName}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
