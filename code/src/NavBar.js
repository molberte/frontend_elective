import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li key={'main_key'}>
      <Link to="/">Main</Link>
    </li>
    <li key={'quiz_key'}>
      <Link to="/Quiz">Questionnaire</Link>
    </li>
    <li key={'crushes_key'}>
      <Link to="/Crushes">Our crushes</Link>
    </li>
  </div>
  );
}
export default navbar;