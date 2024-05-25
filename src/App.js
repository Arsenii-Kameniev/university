import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import LecturerInfo from './Department/LecturerInfo/LecturerInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturerList' element={<LecturerList />}></Route>
          <Route path='/lecturer/:lecturerId' element={<LecturerInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
