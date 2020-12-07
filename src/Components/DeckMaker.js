import React from 'react';
import DeckCollection from './DeckCollection';
import Box from '@material-ui/core/Box';

class DeckMaker extends React.Component {
  render() {
    return(
      <Box className='appContainer'>
        <DeckCollection />
      </Box>
    )
  }
}

export default DeckMaker;