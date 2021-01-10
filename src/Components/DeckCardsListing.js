import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

class DeckCardsListing extends React.Component {

  render(){
    return (
      <List>
        {this.props.deckCards.map((card) => {
          return( 
            <ListItem button key={card.cardData.name} onClick={() => this.props.handleRemoveCardFromDeck(card.cardData.name)}>
              <Grid container justify='space-between'>
                <Grid item>
                  <ListItemText primary={card.cardData.name}></ListItemText>
                </Grid>
                <Grid item>
                  <ListItemText primary={card.quantity}></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default DeckCardsListing;