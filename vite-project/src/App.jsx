import React from "react";
import { Home } from "./pages/Home";
import { Mariners } from "./pages/Mariners";
import { NBA } from "./pages/NBA";
import { Seahawks } from "./pages/Seahawks";
import { Tottenham } from "./pages/Tottenham";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <div>
       <Routes>
          <Route path ="/" element={<Home />}  />
          <Route path ="/mariners" element ={<Mariners />} />
          <Route path ="/nba" element ={<NBA />} />
          <Route path ="/seahawks" element ={<Seahawks />} />
          <Route path ="/tottenham" element ={<Tottenham />} />
        </Routes>
        </div>
    </>
  );
}

export default App;
