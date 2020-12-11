import React from 'react';
import DeckCollection from './DeckCollection';
import Box from '@material-ui/core/Box';

class DeckMaker extends React.Component {
  state = {
    decksInfo: [
      {
        name: 'My first deck',
        game: 'hearthstone'
      },
      {
        name: 'My second deck',
        game: 'hearthstone'
      },
      {
        name: 'Frostmage',
        game: 'hearthstone'
      }
    ]
  }

  render() {
    return(
      <Box className='appContainer'>
        <DeckCollection decksInfo={this.state.decksInfo}/>
      </Box>
    )
  }
}

export default DeckMaker;