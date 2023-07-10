// import React from 'react';
// // import LoginForm from './Components/LoginForm';
// // import SignUpForm from './Components/SignUpForm';
// // import Header from './Components/Header';
// import MyBody from './Components/MyBody'
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Footer from './Components/Footer'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// // import { LoginForm, SignUpForm } from './Components'; why single line is not accepting


// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <MyBody/>
//       <Sidebar/>
//       <Footer/>
    
//     </div>
//   );
// }

// export default App;

// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Footer from './Components/Footer'

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/about">
//           <Header/>
//         </Route>
//         <Route path="/contact">
//           <Sidebar/>
//         </Route>
//         <Route path="/">
//           <Footer/>
//         </Route>
//       </div>
//     </Router>
//   );
// }

// export default App;


// Example 2

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Footer from './Components/Footer'

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about" element={<Header />} />
//           <Route path="/contact" element={<Sidebar />} />
//           <Route path="/" element={<Footer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// export default App;

// Example 3


// App.js

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Footer from './Components/Footer'

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/about">
//             <Header/>
//           </Route>
//           <Route path="/contact">
//             <Sidebar/>
//           </Route>
//           <Route path="/">
//             <Footer/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



// Routing Concept 1 Starts 

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Footer from './Components/Footer'

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Header</Link>
//             </li>
//             <li>
//               <Link to="/footer">Footer</Link>
//             </li>
//             <li>
//               <Link to="/sidebar">Sidebar</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Header />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//           <Route path="/footer" element={<Footer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// Routing Concept 1 Ends



// Props Concept 1


// import React from 'react'
// import ParentComponent from './Components/ParentComponent'


// const App = () => {
//   return (
//     <div>
//       <ParentComponent/>
      
//     </div>
//   );
// }

// export default App;

// Props Concept 1 Ends 






import React from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

const ParentComponent = () => {
  const name = 'John Doe';

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <ChildComponentA name={name} onClick={handleClick} />
      <ChildComponentB name={name} />
    </div>
  );
};

export default ParentComponent;
    