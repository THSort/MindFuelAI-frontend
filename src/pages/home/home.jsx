
import React from 'react';
import LogoTagline from './components/logo-tagline-box/logo-tagline-box';
import VideoBox from './components/video-box/video-box';
import BenefitsBox from './components/benefits-box/benefits-box';
import GifBox from './components/gif_box/gif-box';
import Footer from '../../footer';
import Navbar from '../../navbar';

  
function Home() {
    return (
        <div className="App">
            <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <LogoTagline />
            <VideoBox />
            <BenefitsBox />
            <GifBox />
            <Footer pagename="Home"/>
        </div>
    );
}
  
export default Home;