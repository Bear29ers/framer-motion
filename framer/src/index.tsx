import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { ExpandableCard } from './components/ExpandableCard';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/expandable-card' element={<ExpandableCard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
