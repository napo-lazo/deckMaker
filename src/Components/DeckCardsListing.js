import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Typography from '@material-ui/core/Typography';

class DeckCardsListing extends React.Component {

  render(){
    return (
      <Grid container direction='column'>
        <Grid item>
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
        </Grid>
        <Grid item>
          <Typography variant='h4'>Cards: {this.props.calculateAmountOfCards(this.props.deckCards)}/30</Typography>
        </Grid>
      </Grid>
    )
  }
}

export default DeckCardsListing;