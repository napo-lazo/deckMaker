import Box from '@material-ui/core/Box'
import React from 'react';

class Card extends React.Component {

  onCardClicked = () => {
    //console.log(this.props.cardInfo);

    this.props.handleAddCardToDeck(this.props.cardInfo);

  }

  isElectron = () => { 
    return (typeof process !== "undefined") && process.versions && (process.versions.electron !== undefined); 
  }

  render(){
    return(
      <Box>
        <img onClick={this.onCardClicked} src={this.isElectron() ? "./../public/Images/card assets/" + this.props.cardInfo.cardId + ".png" : "./Images/card assets/" + this.props.cardInfo.cardId + ".png"} />
      </Box>
    )
  }
}

export default Card;