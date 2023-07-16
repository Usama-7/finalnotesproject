import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UpdateNote from './components/UpdateActivity';
import Footer from './components/footer';
import Activities from './components/Activities';
import AddActivity from './components/AddActivity';
import UpdateActivity from './components/UpdateActivity';


function App() {
  return (
    <div className="App">
     
      

      <BrowserRouter>
            <Navbar />
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/activities' element={<Activities />} />
                        <Route path='/addactivity' element={<AddActivity />} />
                        <Route path='/activities/:id' element={<UpdateActivity />} />
                </Routes> 
                <Footer/>         
        </BrowserRouter>
      
    </div>
  );
}

export default App;
