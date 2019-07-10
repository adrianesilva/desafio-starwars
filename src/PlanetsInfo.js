import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default class PlanetsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { planets: [], planets2: [], planets3: [], planets4: [], planets5:[], planets6: [], planets7: [], isClicked: false};  
      }

      randomValue(){
        let value = Math.floor(Math.random() * 60 + 1);

        return value;
        
      }

      componentDidMount(){

       Promise.all([fetch('https://swapi.co/api/planets/'),fetch('https://swapi.co/api/planets/?page=2'),fetch('https://swapi.co/api/planets/?page=3'),
        fetch('https://swapi.co/api/planets/?page=4'),fetch('https://swapi.co/api/planets/?page=5'),fetch('https://swapi.co/api/planets/?page=6'),
        fetch('https://swapi.co/api/planets/?page=7')])
        .then(([res, res2, res3, res4, res5, res6, res7]) => Promise.all([res.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()]))
        .then(
          ([result, result2, result3, result4, result5,result6, result7]) => {  this.setState({
            
              planets: result.results, planets2: result2.results, 
              planets3: result3.results, planets4: result4.results, 
              planets5: result5.results, planets6: result6.results, 
              planets7: result7.results
            });
            
          }
        ).catch(err =>{
          console.log(err);
        });
      }


      onBtnClicked(){

        this.setState(state => ({
          isClicked: true
        }));

      }
      

      render(){

        let planet = this.state.planets.concat(this.state.planets2, this.state.planets3, this.state.planets4, this.state.planets5, this.state.planets6, this.state.planets7);
        let value = this.randomValue();
        

            return (
              <div>
                    
                    {!this.state.isClicked ? (<ListGroup><ListGroup.Item as="li">Nome:</ListGroup.Item>
                      <ListGroup.Item as="li">População: </ListGroup.Item>
                      <ListGroup.Item as="li">Clima: </ListGroup.Item>
                      <ListGroup.Item as="li">Terreno:</ListGroup.Item>
                      <ListGroup.Item as="li">Filmes que Apareceu:</ListGroup.Item></ListGroup>) : 
                     (<ListGroup as="ul">
                      <ListGroup.Item as="li">Nome: {planet[value].name}</ListGroup.Item>
                      <ListGroup.Item as="li">População: {planet[value].population}</ListGroup.Item>
                      <ListGroup.Item as="li">Clima: {planet[value].climate}</ListGroup.Item>
                      <ListGroup.Item as="li">Terreno: {planet[value].terrain}</ListGroup.Item>
                      <ListGroup.Item as="li">Qunatos Filmes que Apareceu: {planet[value].films.length}</ListGroup.Item>
                      </ListGroup>)} 
                      <Button variant="dark" className="cardBtn" size="sm" onClick={this.onBtnClicked.bind(this)}>Next</Button>
              </div>  
            
            );  
      
    }

}