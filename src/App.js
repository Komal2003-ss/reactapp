
// import Navbar from './components/Navbar.js';


import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React ,{ useState } from 'react';
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";




 function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      meg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
      },2000);
    
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark mode is Enable","Success");
      document.title="TextUtils-Enable Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is Enable","Success");
    }
    
  }
  const toggleMode2=()=>{
    if(mode==='light'){
      setMode('success');
      document.body.style.backgroundColor= 'green';
      showAlert("Green mode is Enable","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode is Enable","Success");
    }
    
  }
   return (
   <>
   {/* <Router> */}
<Navbar title="Textutils"  mode={mode}  aboutText="About TextUtils" toggleMode={toggleMode} toggleMode2={toggleMode2}/>
<Alert alert={alert} />
      {/* <Routes>
          <Route exact path="/about" element={<About/>}>
            <About />
          </Route>
        
          <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert}/>}>
        
          </Route>
      </Routes> */}
<TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert}/>
    {/* <Navbar/> */}

   
    {/* </Router> */}
   </>
  );
}

export default App;
