import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Trip from './Pages/Trip';
import TripProposal from './Pages/TripProposal';
import SignInSide from './Pages/SignInSide';
import { useState } from 'react';
import Header from './Components/Header';

export const url = process.env.REACT_APP_DEV_SERVER_URL;

function App() {
  const [userData, setUserData] = useState({});
  return (
    <Router>
      {/* Components added within Router component will be displayed on every page */}
      <div className="main-page">
        <div className="main-container">
          {userData.id && <Header />}
          <Routes>
            <Route
              path="/"
              element={<SignInSide setUserData={setUserData} />}
            />
            <Route path="/user/:userID" element={<Home />} />
            <Route path="/user/:userID/trip/:tripID" element={<Trip />} />
            <Route path="/proposal/:id" element={<TripProposal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
