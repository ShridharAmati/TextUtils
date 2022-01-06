import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const toggleMode = () => {
    console.log("Toggle Mode is clicked ");
    // switch (color) {
    //   case 'primary': setMode('light');
    //     document.body.style.backgroundColor = 'white';
    //     break;
    //   case 'primary': setMode('secondary');
    //     document.body.style.backgroundColor = 'grey';
    //     break;
    // }
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert("Enabled Dark mode", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title="TextUtils - Dark Mode"
      // },2000);
      // setInterval(() => {
      //   document.title="Install textUtils app"
      // },1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Enabled Light mode", "success")
      document.title = "TextUtils - Light Mode"
    }
  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutApp="About"/> */}
      {/* <Navbar></Navbar> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <hr style={{ color: 'white' }} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode} toggleMode={toggleMode} />} />               
          {/*  with out exact th path mat redirct
                     /users-->component-1
                     /users/home-->component-1    
           it will always direct to component-1 if we write /user/home also  */}
  
        </Routes>
      </div>
    </Router>
     
    </>
  );
}

export default App;
