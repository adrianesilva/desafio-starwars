import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import PlanetsInfo from './PlanetsInfo';


function App() {

  return (
   <div className="div-body">
     <Jumbotron className="Jumbotron">
      <h1>Planetas de Star Wars</h1>
        <h6>Planeta Aleatório e seu Clima, Terreno e quantos Filmes da Franquia ele apareceu</h6>    
    </Jumbotron>
    <Container>
      <Card  className="Card" id="cardId" style={{ width: '50rem' }}>
        <Card.Header>Informações do Planeta</Card.Header>
        <Card.Body>
          <PlanetsInfo />
        </Card.Body>
      </Card> 
    </Container>
    
   </div>
  );
}

export default App;
