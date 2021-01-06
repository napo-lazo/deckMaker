import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class DeckOptions extends React.Component {
  render() {
    return (
      <Grid container spacing='2'>
        <Grid container item>
          <TextField fullWidth label='Deck Name' variant='outlined'></TextField>
        </Grid>
        <Grid alignItems='center' container item justify='space-evenly'>
          <Grid item>
            <Button variant='contained'>Exit</Button>
          </Grid>
          <Grid item>
            <Button variant='contained'>Save Deck</Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default DeckOptions;