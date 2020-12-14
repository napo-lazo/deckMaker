import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

// Falta un detalle de la adaptacion horizontal
// Falta ajustar el espaciado de los elementos
// Falta tweakear el tama;o del menu

const resizedLargeFont = {
  fontSize: '2rem'
};

const resizedMediumFont = {
  fontSize: '1.5rem'
};

const resizedSmallFont = {
  fontSize: '1.25rem'
};

const test = {
  maxHeight: '20rem'
}

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

  handleCreateNewDeck = () => {
    
    this.props.handleCreateNewDeck(this.state);
    
    this.setState(() => {
      return {
        game: '',
        format: '',
        hClass: ''
      }
    });
  };

  render() {
    return (
      <Grid className='addDeck' container item direction='column' justify='space-between' alignItems='center' wrap='nowrap'>
        <Grid item className='addDeck__Title'>
          <Typography variant='h1' align='center'>Add new deck</Typography>
        </Grid>
        <Grid container item direction='column' justify='center' alignItems='center' className='addDeck__Selects' spacing='10'>
          <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel style={resizedLargeFont}>Game</InputLabel>
              <Select value={this.state.game} onChange={this.handleGameSelect} style={resizedLargeFont}>
                <MenuItem value={'hearthstone'} style={resizedMediumFont}>Hearthstone</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel style={resizedLargeFont}>Format</InputLabel>
              <Select value={this.state.format} onChange={this.handleFormatSelect} style={resizedLargeFont}>
                <MenuItem value={'standard'} style={resizedMediumFont}>Standard</MenuItem>
                <MenuItem value={'wild'} style={resizedMediumFont}>Wild</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid container item className='addDeck__OptionsContainer' justify='center' wrap='nowrap'>
            <FormControl className='addDeck__OptionsContainer__Option'>
              <InputLabel style={resizedLargeFont}>Class</InputLabel>
              <Select value={this.state.hClass} onChange={this.handleHClassSelect} style={resizedLargeFont} MenuProps={{PaperProps: {style: test}}}>
                {
                  this.hearthstoneClasses.map((hClass) => 
                    <MenuItem value={hClass.toLowerCase()} style={resizedMediumFont}>{hClass}</MenuItem>
                  )
                }
              </Select>
              <FormHelperText style={resizedSmallFont}>Only available for Hearthstone decks</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item className='addDeck__Button'>
          <Button variant="contained" style={resizedSmallFont} onClick={this.handleCreateNewDeck}>Create new deck</Button>
        </Grid>
      </Grid>
    )
  }
}

export default AddDeck;