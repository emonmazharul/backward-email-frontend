import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from  './pages/homePage'
import Navbar from './my-components/navbar/navbar';
import Login from './pages/loginPage';
import Profile from './pages/profilePage';
import Privacy from './pages/privacyPage';
import TermAndPolicy from './pages/termsAndPolicyPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<TermAndPolicy/>}/>

      </Routes>
    </Router>
  );
};

export default App;