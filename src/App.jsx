import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
