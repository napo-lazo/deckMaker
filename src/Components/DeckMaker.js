import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import EditDeckPage from './EditDeckPage';
import React from 'react';

class DeckMaker extends React.Component {
  state = {
    activeDeck: {
      name: 'My first deck',
      game: 'hearthstone',
      hClass: 'warrior',
      format: 'standard',
      cards: []
    },
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

  handleExitDeckEditing = () => {

    console.log('exiting')

    this.setState(() => {
      return {
        activeDeck: null
      }
    })
  }

  handleSavingDeck = (newCards) => {

    this.setState((prevState) => {
      return {
        activeDeck: {...prevState.activeDeck, cards: newCards}
      }
    })

  }

  handleCreateNewDeck = (addDeckState) => {

    const aux = [addDeckState];
    // console.log(addDeckState);

    this.setState((prevState) => {
      return {
        activeDeck: addDeckState,
        decksInfo: prevState.decksInfo.concat(aux)
      }
    })
  };

  render() {
    return(
      <Box className='appContainer'>
      {(!this.state.activeDeck) 
        ?
        <DeckCollectionPage decksInfo={this.state.decksInfo} handleCreateNewDeck={this.handleCreateNewDeck}/>
        :
        <EditDeckPage activeDeck={this.state.activeDeck} handleExitDeckEditing={this.handleExitDeckEditing} handleSavingDeck={this.handleSavingDeck}/>
      }
      </Box>
    )
  }
}

export default DeckMaker;