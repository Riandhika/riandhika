import React, { Component } from 'react'
import Header from '../../components/header';
import Jumbo from '../../components/jumbotron';
import Carousel from '../../components/carousel';
import slide from '../../components/carousel';




export default class home extends Component {
  render() {
    return (
    <div>
        <Header name="Home"/>
        {/* <Carousel /> */}
        <Jumbo title="Go-Food" judul="Pesen Panganan Saiki"/>
        
    </div>
    )
  }
}
