import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Login from './pages/Login';
import Header from './components/Header';
import Register from "./pages/Register";
import Boards from "./pages/Boards";
import BoardRegister from "./pages/BoardReigster";
import { AuthProvider } from "./context/AuthContext";
import Loading from "./components/ui/Loading";
import BoardDetail from "./pages/BoardDetail";
import BoardUpdate from "./pages/BoardUpdate";


const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #F4F5F7;
`
const Main = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 592px;
    height: 100%;
`


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <Header back={false} />
          <Main>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/boards" element={<Boards />} />
              <Route path="/boards/:boardId" element={<BoardDetail/>} />
              <Route path="/boards/register" element={<BoardRegister />} />
              <Route path="/boards/update" element={<BoardUpdate />} />
              
            </Routes>
          </Main>
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
