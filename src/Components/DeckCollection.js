import Deck from './Deck';
import Grid from '@material-ui/core/Grid';
import React from 'react';

class DeckCollection extends React.Component{

  render(){
    return (
      <Grid container item spacing={2}>
      {
        this.props.decksInfo.map((deck, index) => {
          return(
            <Grid item key={deck.name} xs='auto'>
              <Deck deckInfo={{...deck, index}} handleSettingActiveDeck={this.props.handleSettingActiveDeck}/>
            </Grid>
          )
        })
      }
      </Grid>
    )
  }
}

export default DeckCollection;