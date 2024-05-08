// App.js
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Elements/Navbar";
import Textform from "./Elements/Textform";
// import About from "./Elements/About";
import Alert from "./Elements/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");

    // Toggle background and text color here
    if (mode === "light") {
      document.body.style.background = "black";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
      setText("Enable Light Mode");
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
      setText("Enable Dark Mode");
    }
  };

  return (
    // <Router>
      <div className="App">
        <Navbar title="Textutils" Text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
         <Textform showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} />
          
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
