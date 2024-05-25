import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturerList' element={<LecturerList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
