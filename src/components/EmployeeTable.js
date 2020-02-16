import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const EmployeeTable = () => {

  const {employeeData} = useContext(AppContext);
  const [employeeDatas, /*setEmployeeDatas*/] =  employeeData;
  const {fetch} = useContext(AppContext);
  const [fetchings, /*setFetchings*/] =  fetch;

  console.log(fetchings);

  return(
    <section id="employeeTable">
       {fetchings === false ?  
        <div id="loadingScreen">
      
        </div>
        : (
      <React.Fragment>
       {employeeDatas.map((employee, index) => (
    <div className="employee" key={index}>
       <img src={employee.picture.thumbnail}  alt=""/>
      <p className="EmployeeName">{employee.gender}</p>
    </div>
))}
      </React.Fragment>
        )}
    </section>
    );
  }
  
  export default EmployeeTable

  /*
  {employeeDatas.map((employee, index) => (
    <div key={index}>
      <p>{employee.gender}</p>
    </div>
))}*/
