import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import EditDeckPage from './EditDeckPage';
import React from 'react';

class DeckMaker extends React.Component {
  state = {
    activeDeck: null,
    decksInfo: [
      {
        name: 'My first deck',
        game: 'hearthstone',
        hClass: 'warrior',
        format: 'standard',
        cards: []
      },
      {
        name: 'My second deck',
        game: 'hearthstone',
        hClass: 'demonhunter',
        format: 'standard',
        cards: []
      },
      {
        name: 'Frostmage',
        game: 'hearthstone',
        hClass: 'mage',
        format: 'standard',
        cards: []
      }
    ]
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

  handleSettingActiveDeck = (index) => {
    
    this.setState(() => {
      return {
        activeDeck: this.state.decksInfo[index]
      }
    })

  }

  render() {
    return(
      <Box className='appContainer'>
      {(!this.state.activeDeck) 
        ?
        <DeckCollectionPage decksInfo={this.state.decksInfo} handleCreateNewDeck={this.handleCreateNewDeck} handleSettingActiveDeck={this.handleSettingActiveDeck}/>
        :
        <EditDeckPage activeDeck={this.state.activeDeck} handleExitDeckEditing={this.handleExitDeckEditing} handleSavingDeck={this.handleSavingDeck}/>
      }
      </Box>
    )
  }
}

export default DeckMaker;