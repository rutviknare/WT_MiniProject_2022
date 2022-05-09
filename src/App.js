import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar  from './Components/Pages/layout/Navbar';
import Teammembers from './Components/Pages/Teammembers';
import Notfound from './Components/Pages/Notfound';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUsers from './Components/Pages/users/AddUsers';
import EditUser from './Components/Pages/users/EditUser';
import Users from './Components/Pages/users/Users';

function App() {
  
  return (
    
      <Router>
    <Navbar/>
    <div className="App" >
      <Routes>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/firstpage" element={<Notfound/>}/>
        <Route exact path="/teammembers" element={<Teammembers/>}/>
        <Route exact path="/users/Add" element={<AddUsers/>}/>
        <Route exact path="/users/Edit/:id" element={<EditUser/>}/>
        <Route exact path="/users/:id" element={<Users/>}/>
        <Route  element={<Notfound/>}/>
      </Routes>
      </div>

      </Router>
    
  );
}

export default App;
