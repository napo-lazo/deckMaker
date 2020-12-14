import AddDeck from './AddDeck';
import Box from '@material-ui/core/Box';
import DeckCollection from './DeckCollection';
import Grid from '@material-ui/core/Grid';
import React from 'react';


class DeckCollectionPage extends React.Component {

  render() {
    return (
      <Grid container className='deckCollectionPageContainer' wrap='nowrap'>
        <Box className='deckCollectionContainer'>
          <DeckCollection decksInfo={this.props.decksInfo}/>
        </Box>
        <Box className ='addDeckContainer'>
          <AddDeck />
        </Box>
      </Grid>
    )
  }
}

export default DeckCollectionPage;