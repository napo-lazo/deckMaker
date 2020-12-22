import Grid from '@material-ui/core/Grid';
import React from 'react';

//Orden de especifico a general: quality > type > class > set > name

class EditDeckPage extends React.Component {

  render() {
    return (
      <Grid container style={{height: '100%', width: '100%'}}>
      
        <Grid className='upper' container item style={{width: '100%'}} wrap='nowrap'>
          <Grid className='container' item style={{width: '70%'}}></Grid>
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