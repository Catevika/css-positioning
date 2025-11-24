import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Fixed from './Fixed.tsx';
import { AppLayout } from './AppLayout.tsx';
import Absolute from './Absolute.tsx';
import Relative from './Relative.tsx';
import Sticky from './Sticky.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path="/relative" element={<Relative />} />
          <Route path="/fixed" element={<Fixed />} />
          <Route path="/absolute" element={<Absolute />} />
          <Route path="/sticky" element={<Sticky />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
