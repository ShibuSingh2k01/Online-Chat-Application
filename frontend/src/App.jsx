import React from "react";
import { Button } from "@material-tailwind/react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Chatpage from "./pages/Chatpage.jsx";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chats" element={<Chatpage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
