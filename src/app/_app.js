// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';
import Trending from './pages/Trending'; // Import the Trending page
import Sidebar from './components/sidebar'; // Import Sidebar if needed
import Home from './page'; // Import the Home page

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Sidebar /> {/* If you're using a sidebar component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/trending" element={<Trending />} /> {/* Trending page */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
