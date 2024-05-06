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
const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  height: 100vh;
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
          </Routes>
        </Main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
