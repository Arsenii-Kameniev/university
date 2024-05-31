import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import LecturerInfo from './Department/LecturerInfo/LecturerInfo';
import { LessonsSchedule } from './Department/LessonsScedule/LessonsSchedule';
import AddPlan from './Department/Planning/AddPlan';
import Chat from './Chat/Chat';
import Tests from './Department/TeacherTesting/Tests';
import Meetings from './Department/ProtocolOfDepartmentMeetings/Meetings';
import ConnectWithAdmin from './Department/ConnectWithAdmin/ConnectWithAdmin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/lecturer-list' element={<LecturerList />}></Route>
          <Route path='/lessons-schedule' element={<LessonsSchedule />}></Route>
          <Route path='/lecturer/:LecturerId' element={<LecturerInfo />}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/teacher-tests' element={<Tests/>}></Route>
          <Route path='/planning' element={<AddPlan/>}></Route>
          <Route path='/protocol-of-department-meetings' element={<Meetings/>}></Route>
          <Route path='/connect-with-administration' element={<ConnectWithAdmin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
