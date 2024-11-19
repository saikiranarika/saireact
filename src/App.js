import React from 'react'
import Login from'./Pages/Login'
import Signup from './Pages/Signup'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Dashboard  from './Pages/Dashboard'
import Sidenav from './Pages/Sidenav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ='/' exact element={<Login/>}/>
          <Route path ='/sign-up' exact element={<Signup/>}/>
          <Route path ='/dashboard' exact element={<Dashboard/>}/>
          <Route path ='/sidenav' exact element={<Sidenav/>}/>
        </Routes>
      </Router>
     
    </div>
  )
}
export default App
