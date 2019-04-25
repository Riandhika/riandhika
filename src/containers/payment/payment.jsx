import React, { Component } from 'react'
import Header from '../../components/header';

import { Jumbotron } from 'reactstrap';
import { Container } from 'reactstrap';

export default class Payment extends Component {
componentDidMount(){
    var hasil =sessionStorage.total;
    console.log(hasil);
    document.getElementById("total").innerHTML = hasil;
}
  render() {
    return (
      <div align="Centers">
        <Header name="Payment" />
        <Jumbotron fluid align="Center">
         <Container fluid>
          <h1 className="display-3">Total Harga</h1>
          <p className="lead"></p>
          <h2 id="total" />
              
          
        </Container>
      </Jumbotron>
      </div>
    )
  }
}
