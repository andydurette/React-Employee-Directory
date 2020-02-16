import React, {useState, createContext, useEffect} from 'react';

export const AppContext = createContext();

export const AppProvider = props => {

const [employees, setEmployees] = useState({}); 
const [fetching, setFetching] = useState(false); 

const fetchEmployeeData = async () => {
  let response = await fetch('https://randomuser.me/api/?results=200&nat=us');
  let data = await response.json();
  setEmployees(data.results);
  setFetching( fetching === false ? true: false);
}

useEffect(() => {
  fetchEmployeeData();
},[]);



  return(
    <AppContext.Provider value={{ employeeData: [employees, setEmployees], fetch: [fetching, setFetching]}}>
      {props.children}
    </AppContext.Provider>
  );
}
