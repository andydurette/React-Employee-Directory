import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const EmployeeTable = () => {

  // Grab Search data to filter against
  const {search} = useContext(AppContext);
  const {employeeData} = useContext(AppContext);
  const [employeeDatas, /*setEmployeeDatas*/] =  employeeData;
  const {fetch} = useContext(AppContext);
  const [fetchings, /*setFetchings*/] =  fetch;

  return(
    <table >
      <tbody>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Location</th>
      </tr>
       {fetchings === false ?  
        <tr className="employee"></tr>
        : (
      <React.Fragment>
       {employeeDatas.filter((employee) => { 
         let name = employee.name.first + ' ' + employee.name.last;
        return name.includes(search[0])
       }).map((employee, index) => (
    <tr className="employee" key={index}>
      <td className="employee-img"><img src={employee.picture.medium}  alt=""/></td>
      <td className="employee-name">{employee.name.first + ' ' + employee.name.last }</td>
      <td className="employee-email">{employee.email}</td>
      <td className="employee-age">{employee.dob.age}</td>
      <td className="employee-location">{employee.location.state}</td>
    </tr>
))}
      </React.Fragment>
        )}
        </tbody>
    </table>
    );
  }
  
  export default EmployeeTable
