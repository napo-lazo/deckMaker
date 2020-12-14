import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import React from 'react';

class DeckMaker extends React.Component {
  state = {
    decksInfo: [
      {
        name: 'My first deck',
        game: 'hearthstone',
        hClass: 'warrior'
      },
      {
        name: 'My second deck',
        game: 'hearthstone',
        hClass: 'demonhunter'
      },
      {
        name: 'Frostmage',
        game: 'hearthstone',
        hClass: 'mage'
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