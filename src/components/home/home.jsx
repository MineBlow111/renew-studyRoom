import React, {useState} from 'react';
import './homeDes.css';
import './components/mainHub.jsx';
import './components/profiles.jsx';

import Cookies from 'universal-cookie';
import { Profiles } from './components/profiles.jsx';
import { MainHub } from './components/mainHub.jsx';
const cookies = new Cookies();

const toggle = (open, setOpen) => {
  setOpen(!open);
}

export const Home = () => {

  return (
      <div className = "containdo">
        <div/>
        <Profiles/>
        <MainHub/>
      </div>
  );
}