import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Counter extends Component {
  state = {
    qty: 0,
    // number: 1,
    // harga: 5000,
    // biaya: 5000
  };


  //ecma script//
  // Nambah = () => {
  //   this.setState(({ number,harga, biaya }) => ({
  //     number: number + 1,
  //     harga: harga+biaya
  //   }));
  // };

  // Ngurang = () => {
  //   var number = this.state.number;
  //   if (number >1){
  //   this.setState(({ number,harga, biaya  }) => ({
  //     number: number - 1,
  //     harga: harga-biaya
  //   }));
  // }
  // };
  tambah = () => {
    this.setState({
        qty: this.state.qty + 1
    })
    this.props.tambahTotalHarga(this.props.harga)
}

kurang = () => {
    if (this.state.qty === 0){
        return;
    }
    this.setState({
        qty: this.state.qty - 1
    })
    this.props.kurangTotalHarga(this.props.harga)
}


  render() {
    return (
      <div>
      <Card style={this.props.ukuran}style={{margin: "10px" }}>
          <CardImg
            top
            width="100%"
            src={this.props.gambar}
            alt="panganan"
          />
        <CardBody>

           <CardTitle >
              <h4 align="center">{this.props.menu}</h4>
           </CardTitle>
           <h3>
             Harga : Rp {this.props.harga}
          </h3>
          <div align="center">
          <CardSubtitle align="center">
              Jumlah Pemesanan
          </CardSubtitle>

            
            <Navbar style={{backgroundColor: "white"}} color="faded" light>
            
            <Button onClick={this.tambah} className="btn btn-success m-2">+</Button>{' '}
            <h2 align="center">{this.state.qty}</h2>
            <Button onClick={this.kurang} className="btn btn-danger m-2">-</Button>{' '}
            </Navbar>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}
