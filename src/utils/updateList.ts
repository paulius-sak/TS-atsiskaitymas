import {Animal} from "../features/animal/animal.class"
import {Employee} from "../features/employee/Employee"



export function updateAnimalList(animals: Animal[]) {
  const animalListElement = document.getElementById("animal-list");
  if (animalListElement) {
    animalListElement.innerText = "All Animals";

    animals.forEach((animal) => {
      const animalInfo = document.createElement("li");
      animalInfo.textContent = `Name: ${animal.name}, Age: ${animal.age}`;
      animalListElement.appendChild(animalInfo);
    });
  }
}


export function updateEmployeeList(employees: Employee[]) {
    const employeeListElement = document.getElementById("employee-list");
    if (employeeListElement) {
      employeeListElement.innerText = "All Employees";
  
      employees.forEach(employee => {
        const employeeInfo = document.createElement("li");
        employeeInfo.textContent = `Name: ${employee.name}`;
        employeeListElement.appendChild(employeeInfo);
      });
    }
  }