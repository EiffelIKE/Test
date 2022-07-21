import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Details from './pages/Details'
import FriendsListPage from './pages/FriendsListPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= '/Friends' element= {<FriendsListPage/>} />
          <Route path= '/Friends/Details' element= {<Details/>} />
          <Route path= '*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
