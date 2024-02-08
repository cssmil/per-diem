import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  console.log('JournalRoutes -> Page(JournalPage) o / ');
  return (
    <>
      <Routes>

        <Route path='/' element={<JournalPage />} />
        <Route path='/*' element={ <Navigate to="/" /> } />

      </Routes>

    </>
  )
}
