import React from 'react'
import FriendsListContainer from './pages/FriendsListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Friends' element={<FriendsListContainer/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
