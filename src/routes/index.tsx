import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
