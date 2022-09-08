import React, { useState } from 'react';import './App.css';
import Alert from './components/Alert';
//import Abcd from './components/Abcd';
import Final from './components/Final';
//import Input from './components/Input';
import Navbar from './components/Navbar';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar/>
      <Alert alert={alert}/>
      <Final/>
    </>
  );
}

export default App;
