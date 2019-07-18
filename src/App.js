import React from 'react';
import './assets/css/style.css';
import characters from './assets/js/heroes';
import HeroTable from './components/HeroTable';

function App() {
  return (
    <div className="index">
      <h2>Fellowship of the Ring</h2>
      <div className={'container'}>
        <HeroTable arreglo={characters}/>
      </div>
    </div>
  );
}

export default App;
