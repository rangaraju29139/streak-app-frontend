import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
// import Home from "../Home";

export default function SecuredRouter(props) {
  return (
    <>
      <Routes>
        {/**  <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
