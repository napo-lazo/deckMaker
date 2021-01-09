import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import EditDeckPage from './EditDeckPage';
import React from 'react';

class DeckMaker extends React.Component {
  state = {
    activeDeck: {
      name: 'My first deck',
      game: 'hearthstone',
      hClass: 'Warrior',
      format: 'standard',
      cards: []
    },
    decksInfo: [
      {
        name: 'My first deck',
        game: 'hearthstone',
        hClass: 'Warrior',
        format: 'standard',
        cards: []
      },
      {
        name: 'My second deck',
        game: 'hearthstone',
        hClass: 'Demon Hunter',
        format: 'standard',
        cards: []
      },
      {
        name: 'Frostmage',
        game: 'hearthstone',
        hClass: 'Mage',
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

  handleSavingActiveDeck = (newCards) => {

    this.setState(
      (prevState) => {
        return {
          activeDeck: {...prevState.activeDeck, cards: newCards}
        }
      },
      this.handleSavingDeck
    )

  }

  handleSavingDeck = () => {

    console.log(this.state.activeDeck)

    const updatedDeck = this.state.activeDeck;
    const i = updatedDeck.index;
    delete updatedDeck.index;

    this.setState((prevState) => {

      prevState.decksInfo.splice(i, 1, updatedDeck)

      return {
        decksInfo: prevState.decksInfo
      }
    })

  }

  handleSettingActiveDeck = (index) => {
    
    this.setState(() => {
      return {
        activeDeck: {...this.state.decksInfo[index], index}
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
        <EditDeckPage activeDeck={this.state.activeDeck} handleExitDeckEditing={this.handleExitDeckEditing} handleSavingActiveDeck={this.handleSavingActiveDeck}/>
      }
      </Box>
    )
  }
}

export default DeckMaker;