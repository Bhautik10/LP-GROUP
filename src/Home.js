import React, { useState } from 'react'

import SliderApp from './components/client/SliderApp'
import OurAbout from './components/client/OurAbout'
import Choosing from './components/client/Choosing'
import OurServices from './components/client/OurServices'
import OurProject from './components/client/OurProject'
import OurTeam from './components/client/OurTeam'
import TestiMonials from './components/client/TestiMonials'
import Footer from './components/client/Footer'


import { Circles } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect } from 'react';

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulating an API call or some asynchronous operation
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);

  return (

    <div>
    
    <>
    <SliderApp />
     <OurAbout />
     <Choosing />
     <OurServices />
     <OurProject />
     <OurTeam />
     <TestiMonials />
     <Footer />
    </>

    </div>
  )
}

export default Home;