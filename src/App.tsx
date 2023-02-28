import React from 'react';
import Footer from './global/Footer';
import Header from './global/Header';
import Router from './routes/Index';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
