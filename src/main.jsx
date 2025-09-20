import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ViewDetailes from './ViewDetailes.jsx'
import PageNotFound from './PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/view/:imdbID' element={<ViewDetailes />} />
        <Route path='/view/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
