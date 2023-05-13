import { useState } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Grid from './component/Grid'
import Footer from './component/Footer'



const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Grid heading='Trending' category='trending' />
        <Grid heading='Latest' category='latest' />
        <Grid heading='General' category='general' />
        <Grid heading='Health' category='health' />
        <Grid heading='Sports' category='sports' />
        <Grid heading='Business' category='busines' />

      </main>
      <Footer />
    </>
  )

}
const Sports = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Grid heading='Sports' category='sports' />
      </main>
      <Footer />

    </>
  )

}
const Business = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Grid heading='Business' category='business' />
      </main>
      <Footer />
    </>
  )

}
const Treading = () => {
  return (
    <>
      <Header />
      <main>

        <Main />
        <Grid heading='Treading' category='treading' />
      </main>
      <Footer />
    </>
  )
}
const Health = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Grid heading='Health' category='health' />
      </main>
      <Footer />

    </>
  )

}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/sports' Component={Sports} />
          <Route path='/business' Component={Business} />
          <Route path='/health' Component={Health} />
          <Route path='/treading' Component={Treading} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
