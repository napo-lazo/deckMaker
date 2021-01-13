import Box from '@material-ui/core/Box';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Deck = (props) => {

  const handleDeckClick = () => {
    props.handleSettingActiveDeck(props.deckInfo.index);
  }

  const isElectron = () => { 
    return (typeof process !== "undefined") && process.versions && (process.versions.electron !== undefined); 
  }

  return (
    <Box className='deck' onClick={handleDeckClick}>
      <Box className='deck__Image'>
      {console.log(isElectron())}
        <img className='deck__Image__DeckCase' src={isElectron() ? './../public/Images/deck-case2_darker.png' : './Images/deck-case2_darker.png'}/>
        <img className ='deck__Image__ClassIcon' src={isElectron() ? './../public/Images/' + props.deckInfo.hClass + '-icon.png' : './Images/' + props.deckInfo.hClass + '-icon.png'}/>
        <img className='deck__Image__GameIcon' src={isElectron() ? './../public/Images/' + props.deckInfo.game + '-icon.png' : './Images/' + props.deckInfo.game + '-icon.png'}/>
      </Box>
      <Typography className='deck__Name' variant='h3'>{props.deckInfo.name}</Typography>
    </Box>
  )
}

export default Deck;