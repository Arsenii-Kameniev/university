import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import LecturerInfo from './Department/LecturerInfo/LecturerInfo';
import { LessonsSchedule } from './Department/LessonsScedule/LessonsSchedule';
import AddPlan from './Department/Planning/AddPlan';
import Chat from './Chat/Chat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturer-list' element={<LecturerList />}></Route>
          <Route path='/lessons-schedule' element={<LessonsSchedule />}></Route>
          <Route path='/lecturer/:lecturerId' element={<LecturerInfo />}></Route>
<<<<<<< HEAD
          <Route path='/planning' element={<Planning/>}></Route>
          <Route path='/planning/add-plan' element={<AddPlan/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
=======
          <Route path='/planning' element={<AddPlan/>}></Route>
>>>>>>> 8f37deb1b4368ec2f750d528a7c627e267f491fa
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
