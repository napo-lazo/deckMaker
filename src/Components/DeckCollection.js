import React from 'react';
import Deck from './Deck';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

class DeckCollection extends React.Component {
  render() {
    return (
      <Box className='collectionContainer'>
        <Grid container spacing={2}>
          {
            this.props.decksInfo.map((deck) => {
              return(
                <Grid item xs='auto'>
                  <Deck deckInfo={deck}/>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    )
  }
}

export default DeckCollection;