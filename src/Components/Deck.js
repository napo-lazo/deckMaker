import Box from '@material-ui/core/Box';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Deck = (props) => {
  return (
    <Box className='deck'>
      <Box className='deck__Image'>
        <img className='deck__Image__DeckCase' src='/Images/deck-case2_darker.png'/>
        <img className ='deck__Image__ClassIcon' src={'/Images/' + props.deckInfo.hClass + '-icon.png'}/>
        <img className='deck__Image__GameIcon' src={'/Images/' + props.deckInfo.game + '-icon.png'}/>
      </Box>
      <Typography className='deck__Name' variant='h3'>{props.deckInfo.name}</Typography>
    </Box>
  )
}

export default Deck;