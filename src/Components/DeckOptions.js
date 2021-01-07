import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';

class DeckOptions extends React.Component {

  handleSavingActiveDeck = () => {
    this.props.handleSavingActiveDeck(this.props.cards);
  }

  render() {
    return (
      <Grid container spacing='2'>
        <Grid container item>
          <TextField fullWidth label='Deck Name' variant='outlined' value={this.props.deckName}></TextField>
        </Grid>
        <Grid alignItems='center' container item justify='space-evenly'>
          <Grid item>
            <Button id='Exit' onClick={this.props.handleExitDeckEditing} variant='contained'>Exit</Button>
          </Grid>
          <Grid item>
            <Button id='Save' onClick={this.handleSavingActiveDeck} variant='contained'>Save Deck</Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default DeckOptions;