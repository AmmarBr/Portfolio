import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { Toaster } from './Components/ui/toaster'

export default function App() {
  return (
    <>
    <Toaster/>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      
    </>
  )
}
