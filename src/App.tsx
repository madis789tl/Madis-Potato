import "./App.css";
//import MyContainer from "./layout/MyContainer";
//import Login from "./components/Login";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
