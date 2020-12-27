import EditDeckFilters from './EditDeckFilters';
import Grid from '@material-ui/core/Grid';
import React from 'react';

class EditDeckPage extends React.Component {

  state = {
    filtersInfo: {}
  }

  componentDidMount() {
    if(this.props.activeDeck.game == 'hearthstone') {
      fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.RAPIDAPI_HOST
        }
      })
      .then(response => response.json())
      .then(info => {
        this.setState(() => {
          return {
            filtersInfo: {
              cardQualities: info.qualities,
              cardTypes: info.types,
              standardSets: info.standard,
              wildSets: info.wild
            }
          }
        });
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  render() {
    return (
      <Grid container style={{height: '100%', width: '100%'}}>
      
        <Grid className='upper' container item style={{width: '100%'}} wrap='nowrap'>
          <Grid className='container' item style={{width: '70%'}}>
            <EditDeckFilters filtersInfo={this.state.filtersInfo} format={this.props.activeDeck.format} hClass={this.props.activeDeck.hClass}/>
          </Grid>
          <Grid className='container' item style={{width: '30%'}}></Grid>
        </Grid>

        <Grid  className='lower' container item style={{width: '100%'}} wrap='nowrap'>
          <Grid className='container' item style={{width: '80%'}}></Grid>
          <Grid className='container' item style={{width: '20%'}}></Grid>
        </Grid>

      </Grid>
    )
  }
}

export default EditDeckPage;