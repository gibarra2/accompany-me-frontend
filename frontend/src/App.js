import './App.css';
import { useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Trip from './Pages/Trip';
import TripProposal from './Pages/TripProposal';
import SignInSide from './Pages/SignInSide';
import { useState } from 'react';
import Header from './Components/Header';

export const url = process.env.REACT_APP_DEV_SERVER_URL;

function App() {
  const [userData, setUserData] = useState({});
  let location = useLocation();
  return (
    <div className="main-page">
      <div className="main-container">
        {location.pathname !== '/' && location.pathname !== '/signup' && (
          <Header userData={userData} />
        )}
        <Routes>
          {['/', '/signup'].map((path, index) => {
            return (
              <Route
                path={path}
                element={<SignInSide setUserData={setUserData} />}
                key={index}
              />
            );
          })}
          <Route path="/user/:userID" element={<Home />} />
          <Route path="/user/:userID/trip/:tripID" element={<Trip />} />
          <Route path="/proposal/:id" element={<TripProposal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
