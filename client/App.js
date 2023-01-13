import React from 'react'
import { connect } from 'react-redux'
import Home from './components/Home.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Popup from './components/Popup.jsx'
import Win from './components/Win.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path="/mainpage" element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/popup' element={<Popup />}/>
            <Route path='/win' element={<Win />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(App)