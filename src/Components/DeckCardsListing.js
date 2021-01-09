import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

class DeckCardsListing extends React.Component {

  render(){
    return (
      <List>
        {this.props.deckCards.map((card) => {
          return( 
            <div>
              <ListItem>
                <ListItemText inset primary={card.name}></ListItemText>
              </ListItem>
              <ListItemSecondaryAction>
                <ListItemText primary=''></ListItemText>
              </ListItemSecondaryAction>
            </div>
          )
        })}
        
      </List>
    )
  }
}

export default DeckCardsListing;