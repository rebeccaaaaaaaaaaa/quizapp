import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import InitialPage from './pages/InitialPage';
import Quiz from './pages/Quiz';
import FinalResult from './pages/FinalResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/final" element={<FinalResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


