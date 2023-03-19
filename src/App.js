import './App.css';
import Todo from './pages/todo';
import Calculator from './pages/calculator';
import Courses from './pages/courses';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Todo /> */}
      {/* <Calculator /> */}

      <Router>
        <div className="header">
          <div>
            {/* <img src={logo} height="60px" width="auto" alt="logo" /> */}
          </div>
          <ul>
            <li>
              <Link to="/crud">CRUD</Link>
            </li>

            <li>
              <Link to="/calculator">Calculator</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>

            <li>
              <Link to="/addnew">Add Course</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li>
              <Link to="/page">Page</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/crud" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/page" element={<Page />} />
          <Route path="/addnew" element={<AddnewCourse />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// import Register from "./components/Register";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Login from "./components/Login";
// import "./App.css";
// import Welcome from "./components/Welcome";
// import Home from "./Pages/Home";
// import Gallery from "./Pages/Gallery";
// import Contact from "./Pages/Contact";
// import AddnewCourse from './Pages/AddnewCourse';
// import About from "./Pages/About";
// import Page from "./Pages/Page";
// import logo from "./assets/logo.png";
// function App() {
//   return (
//     <div>
//       <Router>
//         <div className="header">
//           <div>
//             <img src={logo} height="60px" width="auto" alt="logo" />
//           </div>
//           <ul>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>

//             <li>
//               <Link to="/about">About</Link>
//             </li>

//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>

//             <li>
//               <Link to="/addnew">Add Course</Link>
//             </li>

//             <li>
//               <Link to="/gallery">Gallery</Link>
//             </li>

//             <li>
//               <Link to="/page">Page</Link>
//             </li>

//             <li>
//               <Link
//                 style={{
//                   border: "2px solid black",
//                   borderRadius: "20px",
//                   padding: "5px",
//                   backgroundColor: "aquamarine",
//                 }}
//                 to="/joinclass"
//               >
//                 Join Class
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/welcome" element={<Welcome />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/page" element={<Page />} />
//           <Route path="/addnew" element={<AddnewCourse />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

