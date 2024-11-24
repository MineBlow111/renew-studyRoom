import React, {useState} from 'react';
import './home.css';

import { Profiles } from '../components/home/profiles.jsx';
import { MainHub } from '../components/home/mainHub.jsx';
import { HomeMain } from '../components/home/homeMain.jsx';

export const Home = () => {

  return (
      <div className = "containdo">
        <div/>
        <Profiles/>
        <MainHub displayComponent = {<HomeMain/>}/>
      </div>
  );
}