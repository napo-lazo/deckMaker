import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import React from 'react';

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
        <DeckCollectionPage decksInfo={this.state.decksInfo}/>
      </Box>
    )
  }
}

export default DeckMaker;