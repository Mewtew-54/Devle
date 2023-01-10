import React from 'react'
import { connect } from 'react-redux'
import Home from './components/Home.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(App)