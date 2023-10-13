import React, { Component } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Home/>
      <Cards/>
      <Footer/>
      </>
    )
  }
}
