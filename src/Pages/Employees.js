import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bale",
      role: "Developer",
      img: "https://www.indiewire.com/wp-content/uploads/2018/10/the-dark-knight-christian-bale.jpg?w=1000&h=563&crop=1",
    },
    {
      id: 2,
      name: "Pitt",
      role: "manager",
      img: "https://cdn.pixabay.com/photo/2013/07/18/20/24/brad-pitt-164880_640.jpg",
    },
    {
      id: 3,
      name: "Tom",
      role: "senior-Developer",
      img: "https://scontent.fcok10-2.fna.fbcdn.net/v/t39.30808-6/299994173_393140792963548_5442589336740739932_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DjXpHnwQbf8Q7kNvgEbPePd&_nc_ht=scontent.fcok10-2.fna&_nc_gid=AJY9ei3e095wx8MwFTE1KR0&oh=00_AYAj0Zs3ozp9WTcxfLr8JSvabrMOuNmZUzo8BhyBqkzkkw&oe=66F4EF86",
    },
    {
      id: 4,
      name: "Cavill",
      role: "officer",
      img: "https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/top-10-hollywood-actors7.png",
    },
    {
      id: 5,
      name: "Keanu",
      role: "CEO",
      img: "https://media.gettyimages.com/id/491757630/photo/premiere-of-lionsgate-premieres-knock-knock-arrivals.jpg?s=2048x2048&w=gi&k=20&c=hfgBjWYZBNxFZLzklj2-1OKtOsnM1kkVy9PSgH110cQ=",
    },
    {
      id: 6,
      name: "Anne",
      role: "CMO",
      img: "https://media.gettyimages.com/id/1831035541/photo/the-fashion-awards-2023-presented-by-pandora-arrivals.jpg?s=2048x2048&w=gi&k=20&c=g82nMACYDOyilkDHm8WdacyPbeukS5Guc_1fukG4xVw= ",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div class="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>you cannot see the Employees</p>
      )}
    </div>
  );
}
export default Employees;
