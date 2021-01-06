import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//Orden de especifico a general: quality > type > class > set > name

class EditDeckFilters extends React.Component {

  state = {
    name: ''
  }
  
  onNameChange = (event) => {

    const val = event.target.value;

    this.setState(() => {
      return {
        name: val
      }
    })
  }

  onSearchPressed = (event) => {

    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/" + this.state.name + "?collectible=1", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.RAPIDAPI_HOST
        }
      })
      .then(response => response.json())
      .then(cards => {
        console.log(cards);
        this.props.setFoundCards(cards);
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return(
      <Grid container spacing='2'>
        <Grid container item>
          <Grid container item>
            <TextField fullWidth label='Name Search' onChange={this.onNameChange} variant='outlined'></TextField>
          </Grid>
        </Grid>
        <Grid container item justify='space-around' spacing='2' wrap='nowrap'>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Quality</InputLabel>
              <Select>
                {
                  this.props.filtersInfo.cardQualities &&
                    this.props.filtersInfo.cardQualities.map((quality) => {
                      return <MenuItem value={quality.toLowerCase()}>{quality}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Set</InputLabel>
              <Select>
                {
                  this.props.filtersInfo.standardSets &&
                    (
                      this.props.format == 'standard'
                      ?
                      this.props.filtersInfo.standardSets.map((set) => {
                        return <MenuItem value={set.toLowerCase()}>{set}</MenuItem>
                      })
                      :
                      this.props.filtersInfo.wildSets.map((set) => {
                        return <MenuItem value={set.toLowerCase()}>{set}</MenuItem>
                      })
                    )
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Type</InputLabel>
              <Select>
                {
                  this.props.filtersInfo.cardTypes &&
                    this.props.filtersInfo.cardTypes.map((type) => {
                      return <MenuItem value={type.toLowerCase()}>{type}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid alignItems='center' container item justify='center'>
          <Button onClick={this.onSearchPressed} variant='contained'>Search</Button>
        </Grid>
      </Grid>
    )
  }
}

export default EditDeckFilters;