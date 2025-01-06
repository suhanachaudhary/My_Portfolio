
import './index.css';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Interest from './pages/Interest.jsx';
import Navbar from './pages/Navbar.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';

function App() {

  return (
    <div className="mainPage">

     <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Interest/>
    </div>
  );
}

export default App;









// function App() {

//   return (
//     <>
//     {/* <Router>
//     <Navbar/>
//       <Routes> */}
        
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/interests" element={<Interest />} />
        
//       </Routes>
//     </Router>
//       <Navbar/>
//     </>
//   );
