import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

class AddDeck extends React.Component {

  hearthstoneClasses = [
    'Demon Hunter',
    'Druid',
    'Hunter',
    'Mage',
    'Paladin',
    'Priest',
    'Rogue',
    'Shaman',
    'Warlock',
    'Warrior'
  ];

  state = {
    game: '',
    format: '',
    hClass: ''
  };

  handleGameSelect = (event) => {
    this.setState(() => {
      return {
        game: event.target.value
      }
    })
  };

  handleFormatSelect = (event) => {
    this.setState(() => {
      return {
        format: event.target.value
      }
    })
  };

  handleHClassSelect = (event) => {
    this.setState(() => {
      return {
        hClass: event.target.value
      }
    })
  };

  render() {
    return (
      <Grid className='addDeck' container item direction='column' justify='space-around' alignItems='center'>
        <Grid item>
          <Typography variant='h2'>Add new deck</Typography>
        </Grid>
        <Grid container item direction='column' justify='center' alignItems='center' spacing='10'>
          <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel>Game</InputLabel>
              <Select value={this.state.game} onChange={this.handleGameSelect}>
                <MenuItem value={'hearthstone'}>Hearthstone</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel>Format</InputLabel>
              <Select value={this.state.format} onChange={this.handleFormatSelect}>
                <MenuItem value={'standard'}>Standard</MenuItem>
                <MenuItem value={'wild'}>Wild</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel>Class</InputLabel>
              <Select value={this.state.hClass} onChange={this.handleHClassSelect}>
                {
                  this.hearthstoneClasses.map((hClass) => 
                    <MenuItem value={hClass.toLowerCase()}>{hClass}</MenuItem>
                  )
                }
              </Select>
              <FormHelperText>Only available for Hearthstone decks</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained">Create new deck</Button>
        </Grid>
      </Grid>
    )
  }
}

export default AddDeck;