import React from 'react'
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

function hobbies() {
  return (
    <div>
        <h2>Hobbies</h2>
        <SportsCricketOutlinedIcon className='icon' />
        <SportsSoccerIcon className='icon' />
        <SportsMartialArtsIcon className='icon' />
        <FlightTakeoffIcon className='icon' />
    </div>
  )
}

export default hobbies