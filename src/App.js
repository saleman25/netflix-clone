import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request'

function App() {
  return (
    <div className="App">
      <h1>Hi front end :3</h1>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;
