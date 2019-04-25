import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom";


const Jumbo = (props)=>{
    return (
      <div>
          <Jumbotron align="center">
           <h1 className="display-3">Selamat Datang di</h1>
            <p className="lead">Extreme Food</p>
            <hr className="my-2" />
            <p>segala makanan ekstrim</p>
            <p className="lead">
          
          <Button tag={Link} to="./dashboard" color="success" size="lg" block>Pilih Menu</Button>

          
        </p>
      </Jumbotron>
      
      </div>
      
      
    );
  };

  export default Jumbo;
