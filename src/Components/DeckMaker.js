import Box from '@material-ui/core/Box';
import DeckCollectionPage from './DeckCollectionPage';
import EditDeckPage from './EditDeckPage';
import React from 'react';

let ipcRenderer;

const isElectron = () => { 
  return (typeof process !== "undefined") && process.versions && (process.versions.electron !== undefined); 
}

if(isElectron()){ 
  ({ ipcRenderer } = window.require('electron'));
}

class DeckMaker extends React.Component {
  state = {
    activeDeck: null,
    decksInfo: [] //[
    //   {
    //     name: 'My first deck',
    //     game: 'hearthstone',
    //     hClass: 'Warrior',
    //     format: 'standard',
    //     cards: []
    //   },
    //   {
    //     name: 'My second deck',
    //     game: 'hearthstone',
    //     hClass: 'Demon Hunter',
    //     format: 'standard',
    //     cards: []
    //   },
    //   {
    //     name: 'Frostmage',
    //     game: 'hearthstone',
    //     hClass: 'Mage',
    //     format: 'standard',
    //     cards: []
    //   }
    // ]
    ,
    initialLoading: true
  }

  handleCreateNewDeck = (addDeckState) => {
    const aux = {...addDeckState, index: this.state.decksInfo.length, cards: []};

    this.setState((prevState) => {
      return {
        activeDeck: aux,
        decksInfo: prevState.decksInfo.concat([aux])
      }
    })
  };

  handleChangingDeckName = (event) => {
    const deck = this.state.activeDeck;
    deck.name = event.target.value;

    this.setState(() => {
      return {
        activeDeck: deck
      }
    })
  }

  handleExitDeckEditing = () => {
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
      this.handleSavingActiveDeckName
    )

  }

  handleSavingActiveDeckName = () => {

    const updatedDeck = this.state.activeDeck;
    const auxList = Array.from(this.state.decksInfo)
    const i = updatedDeck.index;
    let finalName = updatedDeck.name;
    let index = auxList.findIndex(deck => deck.name == updatedDeck.name);

    if (index != -1 && index != i) {
      
      let x = 0;

      while(index != -1){
        
        x++;
        const newName = updatedDeck.name + ' (' + x +')';
        index = auxList.findIndex(deck => deck.name ==  newName);

      }

      finalName += ' (' + x + ')';

    }

    this.setState(
      (prevState) => {
        return {
          activeDeck: {...prevState.activeDeck, name: finalName}
        }
      },
      this.handleSavingDeck
    )
  }

  handleSavingDeck = () => {

    let updatedDeck = Object.assign({}, this.state.activeDeck);
    const auxList = Array.from(this.state.decksInfo)
    const i = updatedDeck.index;
    delete updatedDeck.index;

    this.setState(
      (prevState) => {
        
        prevState.decksInfo.splice(i, 1, updatedDeck)
        ipcRenderer.invoke('saveDecks', JSON.stringify( {decks: prevState.decksInfo }))

        return {
          decksInfo: prevState.decksInfo
        }
      });
  }

  handleSettingActiveDeck = (index) => {
    
    this.setState(() => {
      return {
        activeDeck: {...this.state.decksInfo[index], index}
      }
    })

  }
  
  finishInitialLoading = (decks) => {
    this.setState(() => {
      return {
        decksInfo: decks,
        initialLoading: false
      }
    })
  }

  componentDidMount() {

    if (ipcRenderer) {
      ipcRenderer.on('finish-loading', (e, data) => {
        const aux = JSON.parse(data);
        this.finishInitialLoading(aux.decks);
      })

      ipcRenderer.invoke('initialDeckLoad');
    }
    else {
      this.finishInitialLoading([]);
    }

  }
  
  render() {
    return(
      <Box className='appContainer'>
      {(!this.state.activeDeck) 
        ?
        <DeckCollectionPage decksInfo={this.state.decksInfo} handleCreateNewDeck={this.handleCreateNewDeck} handleSettingActiveDeck={this.handleSettingActiveDeck} initialLoading={this.state.initialLoading}/>
        :
        <EditDeckPage activeDeck={this.state.activeDeck} handleChangingDeckName={this.handleChangingDeckName} handleExitDeckEditing={this.handleExitDeckEditing} handleSavingActiveDeck={this.handleSavingActiveDeck}/>
      }
      </Box>
    )
  }
}

export default DeckMaker;