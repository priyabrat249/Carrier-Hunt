import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import NavBar from "./components/NavBar/NavBar";
import Job from "./Pages/Job";
import Apply from './Pages/Apply';
// import Search from "./components/SearchDiv/Search";
// import Value from "./components/ValueDiv/Value";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar/>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Apply' element={<Apply/>} />
        <Route path='/Job' element={<Job />} />
        {/* <Route path='/All' element={<AllUser />} />
        <Route path='/Edit/:userId' element={<EditUser />} />
        <Route path='/login' element={<LoginUser />} /> */}
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
    
  )
}

export default App;