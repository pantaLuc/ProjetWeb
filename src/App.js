import './App.css';
import { Route ,Routes ,BrowserRouter} from 'react-router-dom';
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


function App() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      {/*<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#eae9f5",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />*/}
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="/HomeResp" element={<HomeResponsable />} />
          <Route path="/HomeGuest" element={<HomeGuest />} />
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


