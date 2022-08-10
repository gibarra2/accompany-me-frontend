import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './Pages/Home';
import Trip from './Pages/Trip';
import TripProposal from './Pages/TripProposal';
import { useState } from 'react';
import axios from 'axios';
import SignInSide from './Pages/SignInSide';

export const url = process.env.REACT_APP_DEV_SERVER_URL;

function App() {
  const [tripList, setTripList] = useState([]);

  const getTrips = (userID) => {
    axios
      .get(`${url}/users/${userID}/trips/`)
      .then((response) => {
        setTripList(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitTrip = (userID, tripData) => {
    axios
      .post(`${url}/users/${userID}/trips/`, tripData)
      .then((response) => {
        setTripList(response.data.trips);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <Router>
      {/* Components added within Router component will be displayed on every page */}
      <div className="main-page">
        <div className="main-container">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route
              path="/user/:userID"
              element={
                <Home
                  getTrips={getTrips}
                  tripList={tripList}
                  submitTrip={submitTrip}
                />
              }
            />
            <Route path="/user/:userID/trip/:tripID" element={<Trip />} />
            <Route path="/proposal/:id" element={<TripProposal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
