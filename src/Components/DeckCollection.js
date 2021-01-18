import Box from '@material-ui/core/Box';
import Deck from './Deck';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

class DeckCollection extends React.Component{

  render(){
    return (
      <Box style={{height:'100%', width:'100%'}}>
      {this.props.initialLoading ?
        <Grid container justify='center' alignItems='center' style={{height:'100%'}}>
          <CircularProgress size='10rem'/>
        </Grid>
        :
        <Grid container spacing={2} >
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
      }
      </Box>
    )
  }
}

export default DeckCollection;