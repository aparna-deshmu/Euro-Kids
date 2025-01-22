import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdmissionMasterForm from './pages/Adminssion/AdmissionMasterForm';

function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
 <>
  <AdmissionMasterForm/>
 </>
  );
}

export default App;
