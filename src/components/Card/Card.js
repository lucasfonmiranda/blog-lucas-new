import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import foto from '../../foto.jpg';


class CardExampleWithAvatar extends Component {
  render(){
    return(
        <Card style={{ alignItem: 'center', height: 800, width: 600, marginLeft: 'auto', marginRight: 'auto', paddingTop: 20, opacity: 0.8}}>

          <CardMedia
            overlay={<CardTitle title="Lucas Fonseca" subtitle="Software Developer" />}
          >
          <img src={foto}/>
          </CardMedia>

          <CardText>
           
          </CardText>
          <CardActions>
            <icon src="fa-amazon"/>
            <FlatButton label="Projetos" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
    )
  }
}


export default CardExampleWithAvatar;