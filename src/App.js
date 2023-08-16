

import React from 'react'
// import Navbar from './Components/Navbar'
import { BrowserRouter as Router , Routes , Route
 } from 'react-router-dom';
import Home from './Pages/Home'
// import Login from "./Pages/Signup"
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import DataProvider from './context/Dataprovider';
import Supercoin from './Pages/Supercoin';
import Productdesc from "./Pages/Productdesc"
import Navbar from './Components/Navbar';
import Productpage from './Pages/Productpage';
import Createproduct from './Pages/Createproduct';


const App = () => {
  return (
    <DataProvider>
    <Router>
     
      <Routes>
        <Route
          index
          path="/"
          element={<Home />}/>
        <Route path="/login" element={<Signup />} />
        <Route path="/register" element={<Signin />} />
        <Route path="/supercoin" element={<Supercoin />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/create" element={<Createproduct />} />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App