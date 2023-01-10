import React from 'react'
import { connect } from 'react-redux'
import Home from './components/Home.jsx'
import SignIn from './components/SignIn.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (props) => {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signin' element={<SignIn/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App;
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(App)