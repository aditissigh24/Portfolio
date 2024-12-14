import { Fragment, useState } from 'react'
import reactLogo from './assets/Images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Landing from './Landing'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
 

  return (
    <Fragment>
    <Header/>
    <Landing/>
    <About/>
    <Projects/>
    <Contact/>
    </Fragment>
        
  )
}

export default App
