import './App.css';
import React, { useState} from 'react'
import { Route ,Routes,Navigate ,BrowserRouter,} from 'react-router-dom';
import Particles from "react-tsparticles";

import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeAdmin from './Components/HomeAdmin';
import HomeGuest from './Components/HomeGuest';
import SignalerAnomalie from './Components/SignalerAnomalie';
import Home from './Components/Home';
import HomeResponsable from './Components/HomeResponsable';
import Service from './Components/Service';
import Localisation from './Components/Localisation';
import Login from './Components/Login';
import useToken from './useToken';
import axios from 'axios'
function App() {

  const [infouser, setinfouser ] = useState();
  const [roleuser, setroleuser ] = useState('guest');
  const { token, setToken } = useToken();
  console.log(token)
  if(!token) {
    return <Login setToken={setToken} />
  }else{
    console.log("logiiin")
    axios({
      method: "GET",
      url: `https://gest-maintance-univ-rouen.herokuapp.com/api/users/user/`,
      headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token ${token}`
      }
  }).then(res =>
    { console.log(res.data.role)
      setroleuser(res.data.role)
    }
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          
        {/*login ?
                    ( <Route path="/HomeAdmin" element={<HomeAdmin />} />) :
                    (<Route path="/"  element={<Home/>}/>)
        */}
         <Route path="/HomeGuest" element={<HomeGuest />} />
         <Route path="/HomeAdmin" element={<HomeAdmin />} />
         <Route path="/HomeResp" element={<HomeResponsable />} />
          <Route path="/"  element={<Home/>}/>
          <Route path="/Service" element={<Service />} />
          <Route path="/Localisation" element={<Localisation/>} />
          <Route path="/SignalerAnomalie" element={<SignalerAnomalie />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


