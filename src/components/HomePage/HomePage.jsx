import './HomePage.css';

import React from 'react';

import text from '../../source/home';

export default function HomePage() {
  return (
    <div className="HomePage">
        <div className="row mt-5">
          <h3 className="homePageTitle mb-3">About blog</h3>
          <div className="TextAbout">{ text.text }</div>
        </div>
    </div>
  )
}