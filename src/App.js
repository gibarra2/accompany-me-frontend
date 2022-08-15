import { useState, Suspense, lazy } from 'react';
import { useLocation } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import SignInSide from './Pages/SignInSide';
import Header from './Components/Header';
import LinearProgress from '@mui/material/LinearProgress';
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Trip = lazy(() => import('./Pages/Trip'));

export const url = process.env.REACT_APP_URL;

function App() {
  const [userData, setUserData] = useState({});
  let location = useLocation();
  return (
    <div className="main-page">
      <div className="main-container">
        {location.pathname !== '/' && location.pathname !== '/signup' && (
          <Header userData={userData} />
        )}
        <Suspense fallback={<LinearProgress />}>
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
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
