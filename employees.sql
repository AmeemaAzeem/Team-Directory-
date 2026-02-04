CREATE TABLE Employees (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT,
    LastName TEXT,
    Role TEXT
);

INSERT INTO Employees (FirstName, LastName, Role) VALUES
('Ameema', 'Khan', 'Software Intern'),
('Ali', 'Ahmed', 'Backend Developer'),
('Sara', 'Iqbal', 'Frontend Developer'),
('Usman', 'Raza', 'Project Manager'),
('Hina', 'Shah', 'QA Engineer');
