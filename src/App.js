import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './app/Student/Main/Main';
import LecturerList from './Department/LecturerInfo/LecturerList';
import { News } from './Department/News/News';
import { LessonsSchedule } from './Department/LessonsScedule/LessonsSchedule';
import { Students } from './Department/Students/Students';
import { Chat } from './Chat/Chat';

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
          <Route path='/chat' element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
