import React from 'react'
import Card from './components/Card'

const App = () => {
  const data = {
    id: 1,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg',
    first_name: 'Jeremy',
    last_name: 'Davis',
    status: 'At workasdasdadsd ',
    available: true
  }
  return (
    <div >
      <Card data= {data}/>
    </div>
  )
}

export default App
