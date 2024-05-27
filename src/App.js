import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import LecturerInfo from './Department/LecturerInfo/LecturerInfo';
import { LessonsSchedule } from './Department/LessonsScedule/LessonsSchedule';
import AddPlan from './Department/Planning/AddPlan';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturer-list' element={<LecturerList />}></Route>
          <Route path='/lessons-schedule' element={<LessonsSchedule />}></Route>
          <Route path='/lecturer/:lecturerId' element={<LecturerInfo />}></Route>
          <Route path='/planning' element={<AddPlan/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
