import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Movies from "./Movies";
import Series from "./Series";
import Actors from "./Actors";
import "./App.css";


const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="App">
      <h1>Chips Movies Log</h1>
      <div className="content-box">
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Actors" className="custom-tab" />
          <Tab label="Series" className="custom-tab" />
          <Tab label="Movies" className="custom-tab"/>
      
        </Tabs>
        {activeTab === 0 && <Actors />}
        {activeTab === 1 && <Series />}        
        {activeTab === 2 && <Movies/>}
      </div>    
    </div>
  );
};
export default App;
