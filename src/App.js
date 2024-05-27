import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import LecturerInfo from './Department/LecturerInfo/LecturerInfo';
import { News } from './Department/News/News';
import { LessonsSchedule } from './Department/LessonsScedule/LessonsSchedule';
import { Students } from './Department/Students/Students';
import Planning from './Department/Planning/Planning';
import AddPlan from './Department/Planning/AddPlan';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturer-list' element={<LecturerList />}></Route>
          <Route path='/lessons-schedule' element={<LessonsSchedule />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/students' element={<Students />}></Route>
          <Route path='/lecturer/:lecturerId' element={<LecturerInfo />}></Route>
          <Route path='/planning' element={<Planning/>}></Route>
          <Route path='/planning/add-plan' element={<AddPlan/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
