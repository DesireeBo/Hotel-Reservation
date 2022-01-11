import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import First from "./first";
import AcccessibleTable from "./second";
import Desc from "./description";

function Test() {
  return (
      <Container style={{marginLeft:"10px", marginRight:"20px"}}>

        <center><Desc /></center> <br></br>
          <Row>
            <Col sm={4} >
              <div style={{marginRight:"20px"}}> <First/></div>
            </Col>

            <Col sm={5} style={{marginLeft:"50px", marginRight:"20px"}} >
              < AcccessibleTable/>
            </Col>
          </Row>

      </Container>
  )
}

export default Test;