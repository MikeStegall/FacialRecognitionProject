import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 175,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles' 
                params={particlesOptions}
      />
      <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRegognition /> */}
    </div>
  );
}

export default App;
