import React from 'react'
import FriendsListContainer from './pages/FriendsListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Details from './pages/Details'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/Friends' element= {<FriendsListContainer/>} />
          <Route path= '/Friends/Details' element= {<Details/>} />
          <Route path= '*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
