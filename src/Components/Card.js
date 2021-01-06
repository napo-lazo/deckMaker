import Box from '@material-ui/core/Box'
import React from 'react';

class Card extends React.Component {
  render(){
    return(
      <Box>
        <img src={"/Images/card assets/" + this.props.cardInfo.cardId + ".png"} />
      </Box>
    )
  }
}

export default Card;