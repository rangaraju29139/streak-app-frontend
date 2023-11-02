import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Home from "../Dashboard";

export default function SecuredRouter(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />\
      </Routes>
    </>
  );
}
