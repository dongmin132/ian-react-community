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
const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
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
      <Wrapper>
        <Header isLoggedIn={false} back={false} />
        <Main>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/boards" element={<Boards />} />
          </Routes>
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
