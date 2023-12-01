import React from 'react';
import Landing from '../components/Home/Landing/Landing';
import Promotion from '../components/Home/Promotion/Promotion';
import Card from '../components/Home/Card/Card';
import Welcome from '../components/Home/Welcome/Welcome';
import Footer from '../components/Home/Footer/Footer';
import BgTop from '../components/Home/Bg/BgTop';
import Bg2 from '../components/Home/Bg/Bg2';
import Faqs from '../components/Home/Faqs/Faqs';
function Home(props) {
  return (
    <>
      <Landing />
      <Promotion />
      <Card />
      <Welcome />
      <Faqs />
      <Footer />
      <Bg2 />
      <BgTop />
    </>
  );
}

export default Home;
