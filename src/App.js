import React from 'react';
import logo from './logo.svg';
import './App.css';

// oluşturulan navbar componentını burda çağırcaz ki uygulamamızın içinde olsun
import Navbar from './components/navbar.js'
import Column from './components/column/Column';

function App() {
  return (
    <div className="App">

      <Column />

      {/*Burası uygulamanın başladığı yer

      Burda diğer componentları çağırcaz */}

    </div>
  );
}

export default App;
