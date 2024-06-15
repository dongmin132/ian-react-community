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


const Wrapper = styled.div`
  display:flex;


  min-height: 100vh;
  justify-content: center;
  align-items: center;

`
const Main = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const renderContent = () => {
    switch (selectedPage) {
      case 'home':
        return <div> Home Page Content </div>;
      case "noti":
        return <div>About Page Content</div>;
      case "contact":
        return <div>Contact Page Content</div>;
      default:
        return <div>Home Page Content</div>;
    }
  }


  return (
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <Navbar setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
          <Main>
            {renderContent()}
            <Routes>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/members/update" element={<MemberUpdate />} />
              <Route path="/members/password" element={<MemberPassowrdUpdate />} />
              <Route path="/boards" element={<Boards />} />
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
