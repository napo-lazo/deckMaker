import DeckCardsListing from './DeckCardsListing';
import DeckOptions from './DeckOptions';
import EditDeckFilters from './EditDeckFilters';
import FoundCards from './FoundCards';
import Grid from '@material-ui/core/Grid';
import React from 'react';

class EditDeckPage extends React.Component {

  state = {
    filtersInfo: {},
    foundCards: [],
    deckCards: this.props.activeDeck.cards
  }

  checkForCardDuplicates = (newCard, maxAmount) => {

    const aux = Array.from(this.state.deckCards);

    while(maxAmount > 0){
      const index = aux.findIndex(card => card.name == newCard.name);
      if(index != -1){
        aux.splice(index, 1);
        maxAmount--;
      }
      else{
        return false;
      }

    }

    return true;
  }

  handleAddCardToDeck = (newCard) => {
    const aux = [newCard];

    if(!this.checkForCardDuplicates(newCard, 2)){

      this.setState((prevState) => {
        return {
          deckCards: prevState.deckCards.concat(aux)
        }
      })

    }

  };

  setFoundCards = ((cards) => {
    this.setState(() => {
      return {
        foundCards: cards
      }
    })
  }) 

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
              cardRaces: info.races,
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
            <EditDeckFilters filtersInfo={this.state.filtersInfo} format={this.props.activeDeck.format} hClass={this.props.activeDeck.hClass} setFoundCards={this.setFoundCards}/>
          </Grid>
          <Grid className='container' item style={{width: '30%'}}>
            <DeckOptions deckName={this.props.activeDeck.name} cards={this.state.deckCards} handleExitDeckEditing={this.props.handleExitDeckEditing} handleSavingActiveDeck={this.props.handleSavingActiveDeck}/>
          </Grid>
        </Grid>

        <Grid  className='lower' container item style={{width: '100%'}} wrap='nowrap'>
          <Grid className='container' item style={{width: '80%'}}>
            <FoundCards cards={this.state.foundCards} handleAddCardToDeck={this.handleAddCardToDeck}/>
          </Grid>
          <Grid className='container' item style={{width: '20%'}}>
            <DeckCardsListing deckCards={this.state.deckCards}/>
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

export default EditDeckPage;