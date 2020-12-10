import React from 'react';
import Deck from './Deck';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class DeckCollection extends React.Component {
  render() {
    return (
      <Grid container className='deckCollectionContainer' wrap='nowrap'>
        <Box className='collectionContainer'>
          <Grid container item spacing={2}>
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
        <Box className ='addDeckContainer'>
          <Grid className='addDeckContainer__Grid' container item direction='column' justify='space-around' alignItems='center'>
            <Typography variant='h2'>Add new deck</Typography>
            <InputLabel>Game</InputLabel>
            <Select>
              <MenuItem>Hearthstone</MenuItem>
            </Select>
            <InputLabel>Format</InputLabel>
            <Select>
              <MenuItem>Standard</MenuItem>
              <MenuItem>Wild</MenuItem>
            </Select>
            <Grid item>
              <Button variant="contained">Create new deck</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    )
  }
}

export default DeckCollection;