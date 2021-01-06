import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

class DeckCardsListing extends React.Component {
  render(){
    return (
      <List>
        {this.props.deckCards.map((card) => {
          return(
            <ListItem>
              <ListItemText primary={card.name}></ListItemText>
            </ListItem>
          )
        })}
        
      </List>
    )
  }
}

export default DeckCardsListing;