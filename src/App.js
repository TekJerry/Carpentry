import './App.css';
import { Routes, Route } from 'react-router-dom';
import  ContactUs  from "./screens/ContactUs/ContactUs.js";
import  Services  from "./screens/Services/Services.js";
import  BookNow  from "./screens/BookNow/BookNow.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from './screens/Home/Home.js';


function App() {
  return (
    <div>
      
 <Navbar />
      {/* Defining my routes here */}
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/BookNow' element={<BookNow/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
