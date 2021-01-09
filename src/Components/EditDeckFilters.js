import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//Orden de especifico a general: quality > type > class > set > name

class EditDeckFilters extends React.Component {

  state = {
    checkedClass: true,
    checkedNeutral: true,
    name: '',
    quality: '',
    race: '',
    set: '',
    type: ''
    
  }
  
  buildApiEndpoint = () => {

    const baseURL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/";

    if (this.state.name){
      return baseURL + 'search/'  + this.state.name + "?collectible=1";  
    }
    else if (this.state.set){
      return baseURL + 'sets/'  + this.state.set + "?collectible=1";
    }
    else if (this.state.type){
      return baseURL + 'types/'  + this.state.type + "?collectible=1";
    }
    else if (this.state.race){
      return baseURL + 'races/'  + this.state.race + "?collectible=1";
    }
    else if (this.state.quality){
      return baseURL + 'qualities/'  + this.state.quality + "?collectible=1";
    }
  } 

  clearFilters = () => {
    this.setState((prevState) => {
      return {
        ...prevState, name:'', quality:'', race:'', set:'', type:''
      }
    })
  }

  filterCardsByClass = (cards) => {

    let classCards = [];
    let neutralCards = [];

    if(this.state.checkedClass){
      classCards = cards.filter(card => card.playerClass == this.props.hClass);
    }

    if(this.state.checkedNeutral){
      neutralCards = cards.filter(card => card.playerClass == 'Neutral');
    }

    return classCards.concat(neutralCards);
  }

  filterCardsBySearchFilters = (cards) => {

    if(this.state.set){
      cards = cards.filter(card => card.cardSet == this.state.set);
    }
    if(this.state.type){
      cards = cards.filter(card => card.type == this.state.type);
    }
    if(this.state.race){
      cards = cards.filter(card => card.race == this.state.race);
    }
    if(this.state.quality){
      cards = cards.filter(card => card.rarity == this.state.quality);
    }

    return cards.filter(card => (card.type == 'Hero' && card.cardSet != 'Hero Skins' && card.cardSet != 'Basic') || card.type != 'Hero');

  }

  onCheckChange = (event) => {
    
    const key = event.target.name;
    const value = event.target.checked; 

    this.setState(() => {
      return {
        [key]: value
      }
    })
  }

  onNameChange = (event) => {

    const val = event.target.value;

    this.setState(() => {
      return {
        name: val
      }
    })
  }

  onSelectChange = (event) => {

    const key = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [key]: value
      }
    })
  }

  onSearchPressed = (event) => {

    fetch(this.buildApiEndpoint(), {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.RAPIDAPI_HOST
        }
      })
      .then(response => response.json())
      .then(cards => {
        console.log(this.filterCardsByClass(cards));
        cards = this.filterCardsByClass(cards)

        this.props.setFoundCards(this.filterCardsBySearchFilters(cards));
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
            <TextField fullWidth label='Name Search' onChange={this.onNameChange} value={this.state.name} variant='outlined'></TextField>
          </Grid>
        </Grid>
        <Grid container item justify='space-around' spacing='2' wrap='nowrap'>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Quality</InputLabel>
              <Select name='quality' onChange={this.onSelectChange} value={this.state.quality}>
                <MenuItem value=''>None</MenuItem>
                {
                  this.props.filtersInfo.cardQualities &&
                    this.props.filtersInfo.cardQualities.map((quality) => {
                      return <MenuItem value={quality}>{quality}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Set</InputLabel>
              <Select name='set' onChange={this.onSelectChange} value={this.state.set}>
                <MenuItem value=''>None</MenuItem>
                {
                  this.props.filtersInfo.standardSets &&
                    (
                      this.props.format == 'standard'
                      ?
                      this.props.filtersInfo.standardSets.map((set) => {
                        return <MenuItem value={set}>{set}</MenuItem>
                      })
                      :
                      this.props.filtersInfo.wildSets.map((set) => {
                        return <MenuItem value={set}>{set}</MenuItem>
                      })
                    )
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Type</InputLabel>
              <Select name='type' onChange={this.onSelectChange} value={this.state.type}>
                <MenuItem value=''>None</MenuItem>
                {
                  this.props.filtersInfo.cardTypes &&
                    this.props.filtersInfo.cardTypes.map((type) => {
                      return <MenuItem value={type}>{type}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid container item>
            <FormControl fullWidth>
              <InputLabel>Card Race</InputLabel>
              <Select name='race' onChange={this.onSelectChange} value={this.state.race}>
                <MenuItem value=''>None</MenuItem>
                {
                  this.props.filtersInfo.cardRaces &&
                    this.props.filtersInfo.cardRaces.map((race) => {
                      return <MenuItem value={race}>{race}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item justify='center'>
          <FormGroup row>
            <FormControlLabel control={<Checkbox checked={this.state.checkedClass} name='checkedClass' onChange={this.onCheckChange}/>} label='Show Class Cards'/>
            <FormControlLabel control={<Checkbox checked={this.state.checkedNeutral} name='checkedNeutral' onChange={this.onCheckChange} />} label='Show Neutral Cards'/>
          </FormGroup>
        </Grid>
        <Grid alignItems='center' container item justify='center' spacing={2}>
          <Grid item>
            <Button onClick={this.clearFilters} variant='contained'>Clear Filters</Button>
          </Grid>
          <Grid item>
            <Button onClick={this.onSearchPressed} variant='contained'>Search</Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default EditDeckFilters;