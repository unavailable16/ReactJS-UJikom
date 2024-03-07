import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Component/Main_Page/Navbar.jsx";
import Main from "./Component/Main_Page/Main.jsx";
import About from "./Component/About/About.jsx";
import NvidiaPages from "./Component/nvidia/Nv.jsx";
import AmdPages from "./Component/amd/Amd.jsx";
import NvPage from "./Component/nvidia/NvPage.jsx";
import IntelPages from "./Component/intel/Intel.jsx";
import IntelPage from "./Component/intel/IntelPage.jsx";
import AmdPage from "./Component/amd/AmdPage.jsx";
import Create from "./Component/Create/Create.jsx";
import Search from "./Component/Search/Search.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Login/Signup.jsx";
// import { LoginProvider, useLogin } from "./Component/AuthContext.jsx"; // Import useLogin hook
import { LoginProvider, useLogin} from "./Component/LoginContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <LoginProvider>
      <Router>
  <Nav className="awok" />
  <Routes>
    <Route path="/home" element={<PrivateRoute component={<Main />} />} />
    <Route path="/about" element={<PrivateRoute component={<About />} />} />
    <Route path="/amd" element={<PrivateRoute component={<AmdPages />} />} />
    <Route path="/amd/:id" element={<PrivateRoute component={<AmdPage />} />} />
    <Route path="/nvd" element={<PrivateRoute component={<NvidiaPages />} />} />
    <Route path="/nvidia/:id" element={<PrivateRoute component={<NvPage />} />} />
    <Route path="/intel" element={<PrivateRoute component={<IntelPages />} />} />
    <Route path="/intel/:id" element={<PrivateRoute component={<IntelPage />} />} />
    <Route path="/create" element={<PrivateRoute component={<Create />} />} />
    <Route path="/search" element={<PrivateRoute component={<Search />} />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign" element={<Signup />} />
    <Route path="*" element={<Navigate to="/login" />} /> {/* Default route to login page */}
  </Routes>
</Router>

      </LoginProvider>
    </div>
  );
}


function PrivateRoute({ component }) {
  const { isLoggedIn } = useLogin(); // Remove LoginContext argument
  return isLoggedIn ? component : <Navigate to="/login" />;
}


export default App;



// // App.js
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Nav from "./Component/Main_Page/Navbar.jsx";
// import Main from "./Component/Main_Page/Main.jsx";
// import About from "./Component/About/About.jsx";
// import NvidiaPages from "./Component/nvidia/Nv.jsx";
// import AmdPages from "./Component/amd/Amd.jsx";
// import NvPage from "./Component/nvidia/NvPage.jsx";
// import IntelPages from "./Component/intel/Intel.jsx";
// import IntelPage from "./Component/intel/IntelPage.jsx";
// import AmdPage from "./Component/amd/AmdPage.jsx";
// import Create from "./Component/Create/Create.jsx";
// import Search from "./Component/Search/Search.jsx";
// import Login from "./Component/Login/Login.jsx";
// import Signup from "./Component/Login/Signup.jsx";
// import { LoginProvider, useLogin } from "./Component/AuthContext.jsx"; // Import useLogin hook
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./App.css";

// function App() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { isLoggedIn } = useLogin(LoginContext); // Use useLogin hook to access authentication state

//   // Redirect user to login page if not logged in
//   if (isLoggedIn === undefined) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="App">
//       <LoginProvider>
//         <Router>
//           <Nav className="awok" />
//           <Routes>
//             <Route path="home" element={isLoggedIn ? <Main /> : <Navigate to="/login" />} />
//             <Route path="about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
//             <Route path="amd" element={isLoggedIn ? <AmdPages /> : <Navigate to="/login" />} />
//             <Route path="amd/:id" element={isLoggedIn ? <AmdPage /> : <Navigate to="/login" />} />
//             <Route path="nvd" element={isLoggedIn ? <NvidiaPages /> : <Navigate to="/login" />} />
//             <Route path="nvidia/:id" element={isLoggedIn ? <NvPage /> : <Navigate to="/login" />} />
//             <Route path="intel" element={isLoggedIn ? <IntelPages /> : <Navigate to="/login" />} />
//             <Route path="intel/:id" element={isLoggedIn ? <IntelPage /> : <Navigate to="/login" />} />
//             <Route path="create" element={isLoggedIn ? <Create /> : <Navigate to="/login" />} />
//             <Route path="search" element={isLoggedIn ? <Search /> : <Navigate to="/login" />} />
//             <Route index element={<Login />} />
//             <Route path="sign" element={<Signup />} />
//           </Routes>
//         </Router>
//       </LoginProvider>
//     </div>
//   );
// }

// export default App;
