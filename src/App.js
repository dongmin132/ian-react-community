import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Login from './pages/Login';
import Header from './components/header/Header';
import Register from "./pages/Register";
import Boards from "./pages/Boards";
import BoardRegister from "./pages/BoardReigster";
import { AuthProvider } from "./context/AuthContext";
import BoardDetail from "./pages/BoardDetail";
import BoardUpdate from "./pages/BoardUpdate";
import MemberUpdate from "./pages/MemberUpdate";
import MemberPassowrdUpdate from "./pages/MemberPasswordUpdate";
import Navbar from "./components/navBar/NavBar";
import ImageSlider from "./components/boards-form/ImageSlider";
import ProfileChange from "./components/profile/ProfileChange";


const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-end;

`
const Main = styled.div`
    width: 85%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`
const BoardsWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <Navbar/>
          <Main>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/members/update" element={<MemberUpdate />} />
              <Route path="/members/password" element={<MemberPassowrdUpdate />} />
              <Route path="/boards" element={
              <BoardsWrapper>
                <Boards />
              </BoardsWrapper>
            } />
              <Route path="/boards/:boardId" element={<BoardDetail />} />
              <Route path="/boards/register" element={<BoardRegister />} />
              <Route path="/boards/update" element={<BoardUpdate />} />
              <Route path="test" element={<ImageSlider />} />
            </Routes>
          </Main>
          
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
