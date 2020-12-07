import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Deck = (props) => {
  return (
    <Box className='deck'>
      <img className='deck__DeckCase' src='/Images/deck-case1.png'/>
      <img className='deck__GameIcon' src='/Images/hearthstone-icon.png'/>
      <Typography className='deck__Name' variant='h3'>Nombre mucho mas grande que el pasado</Typography>
    </Box>
  )
}

export default Deck;