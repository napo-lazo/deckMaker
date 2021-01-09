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
    hClass: '',
    hClassDisabled: true,
    gameError: false,
    formatError: false,
    hClassError: false
  };

  handleGameSelect = (event) => {

    let disabled = true;

    if (event.target.value == 'hearthstone'){
      disabled = false;
    }

    this.setState(() => {
      return {
        game: event.target.value,
        gameError: false,
        hClassDisabled: disabled
      }
    })
  };

  handleFormatSelect = (event) => {
    this.setState(() => {
      return {
        format: event.target.value,
        formatError: false
      }
    })
  };

  handleHClassSelect = (event) => {
    this.setState(() => {
      return {
        hClass: event.target.value,
        hClassError: false
      }
    })
  };

  handleCreateNewDeck = () => {
    
    let stop = false;
    let gameError;
    let formatError;
    let hClassError;

    if (this.state.game == '') {
      gameError = true;
      stop = true;
    }
    if (this.state.format == '') {
      formatError = true;
      stop = true;
    }
    if (this.state.hClass == '' && !this.state.hClassDisabled) {
      hClassError = true;
      stop = true;
    }

    if (stop) {
      this.setState(() => {
        return {
          gameError: gameError,
          formatError: formatError,
          hClassError: hClassError
        }
      })
      return;
    }

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

        <Grid container item direction='column' justify='space-between' alignItems='center' className='addDeck__Selects' spacing='1' style={{height: '43.7rem'}}>

          <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option' error={this.state.gameError}>
              <InputLabel style={resizedLargeFont}>Game</InputLabel>
              <Select value={this.state.game} onChange={this.handleGameSelect} style={resizedLargeFont}>
                <MenuItem value={'hearthstone'} style={resizedMediumFont}>Hearthstone</MenuItem>
              </Select>
              {this.state.gameError && <FormHelperText style={resizedSmallFont}>Field cannot be empty</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container item className='addDeck__OptionsContainer' justify='center'>
            <FormControl className='addDeck__OptionsContainer__Option' error={this.state.formatError}>
              <InputLabel style={resizedLargeFont}>Format</InputLabel>
              <Select value={this.state.format} onChange={this.handleFormatSelect} style={resizedLargeFont}>
                <MenuItem value={'standard'} style={resizedMediumFont}>Standard</MenuItem>
                <MenuItem value={'wild'} style={resizedMediumFont}>Wild</MenuItem>
              </Select>
              {this.state.formatError && <FormHelperText style={resizedSmallFont}>Field cannot be empty</FormHelperText>}
            </FormControl>
          </Grid>

          <Grid container item className='addDeck__OptionsContainer' justify='center' wrap='nowrap'>
            <FormControl className='addDeck__OptionsContainer__Option' disabled={this.state.hClassDisabled} error={this.state.hClassError}>
              <InputLabel style={resizedLargeFont}>Class</InputLabel>
              <Select value={this.state.hClass} onChange={this.handleHClassSelect} style={resizedLargeFont} MenuProps={{PaperProps: {style: test}}}>
                {
                  this.hearthstoneClasses.map((hClass) => 
                    <MenuItem value={hClass} style={resizedMediumFont}>{hClass}</MenuItem>
                  )
                }
              </Select>
              {this.state.hClassDisabled && <FormHelperText style={resizedSmallFont}>Only available for Hearthstone decks</FormHelperText>}
              {this.state.hClassError && <FormHelperText style={resizedSmallFont}>Field cannot be empty</FormHelperText>}
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