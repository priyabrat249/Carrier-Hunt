// import NavBar from "../components/NavBar/NavBar";
import Job from "../components/JobDiv/Job";
import Search from "../components/SearchDiv/Search";
import Value from "../components/ValueDiv/Value";
// import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Search/>
      <Job/>
      <Value/>
    </div>
    
    
  )
}

export default App;