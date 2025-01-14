import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CubePage from './pages/Cube';
import SphereComponent from './pages/Sphere';
import BouncingBall from './components/BouncingBall';
import RenderCube from './components/RenderCube';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CubePage />} />
        <Route path='/sphere' element={<SphereComponent />} />
        <Route path='/bouncingball' element={<BouncingBall />} />
        <Route path='/cube' element={<RenderCube/>} />
      </Routes>
    </Router>
  )
}

export default App

















// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CubePage from './pages/Cube';
// import SphereComponent from './pages/Sphere';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         {/* <Sidebar /> */}

//         {/* Main Content */}
//         <div className="flex-1 ml-64 p-4">
//           <Routes>
//             <Route path="/" element={<CubePage />} />
//             <Route path="/sphere" element={<SphereComponent />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
