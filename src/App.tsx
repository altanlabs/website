import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FootballResults from './pages/FootballResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FootballResults />} />
      </Routes>
    </Router>
  );
}

export default App;
