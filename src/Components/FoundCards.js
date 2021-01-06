import Card from './Card';
import Grid from '@material-ui/core/Grid';
import React from 'react';

class FoundCards extends React.Component {

  render(){
    return (
      <Grid container>
        {this.props.cards &&
          this.props.cards.map((card) => {
          return (
            <Grid item>
              <Card cardInfo={card} handleAddCardToDeck={this.props.handleAddCardToDeck}/>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default FoundCards;