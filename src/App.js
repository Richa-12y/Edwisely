import "./App.css";
import Button from "./components/button/Button";

import { IoHome } from "react-icons/io5"; //AiFillDashboard
import { AiFillDashboard } from "react-icons/ai"; //BsJournalBookmarkFill;
import { BsJournalBookmarkFill } from "react-icons/bs"; //BsJournalBookmarkFill;
import { Route, Routes, useNavigate } from "react-router-dom";
import Logo from "./components/logo/Logo";
import { useState } from "react";
import CourseModals from "./components/model/CourseModals";
import Course from "./page/course/Course";
import Quize from "./page/course/skilltest/Quize";
import Dashboard from "./page/course/dasboard/Dashboard";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Home from "./page/course/home/Home";
const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const naviagete = useNavigate();
  const gotoHome = () => {
    naviagete("/");
  };

  const gotoDashBoard = () => {
    naviagete("/dashobard");
  };
  const isMobile = useMediaQuery("only screen and (max-width: 426px)");
  console.log(open);
  return (
    <div className="App">
      <div className="sidebar_container">
        <Logo />
        <div className="sidebar_navigation">
          <Button
            text={!isMobile ? "Home" : ""}
            icon={<IoHome />}
            onClick={gotoHome}
          />
          <Button
            text={!isMobile ? "Dasboard" : ""}
            icon={<AiFillDashboard />}
            onClick={gotoDashBoard}
          />
          <CourseModals handleClose={handleClose} open={open} />
          <Button
            text={!isMobile ? "Course" : ""}
            icon={<BsJournalBookmarkFill />}
            onClick={() => handleOpen()}
          />
        </div>
      </div>
      <div className="main_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashobard" element={<Dashboard />} />
          <Route path="/course/:courseName" element={<Course />} />
          <Route path="/course/:courseName/skilltest" element={<Quize />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>

      {/* <div className="main_container">Main</div> */}
    </div>
  );
};

export default App;
