import "./App.css";
import { useState } from "react";

import { Home } from "./page/home";

function App() {
  const [profile, setProfile] = useState([]);

  return (
    <div className="bg-[#f0e5c0] w-screen h-screen flex items-center flex-col ">
      <Home setProfile={setProfile} profile={profile} />
    </div>
  );
}

export default App;
