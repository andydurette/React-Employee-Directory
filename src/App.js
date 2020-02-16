import React from 'react';
import {AppProvider} from './components/AppContext';
import EmployeeTable from './components/EmployeeTable';

function App() {

  return (
    <AppProvider> 
      <div className="App">
        <EmployeeTable/>
      </div>
    </AppProvider> 
  );
}

export default App;
