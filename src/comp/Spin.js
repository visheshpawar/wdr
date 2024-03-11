import React from 'react'
import '../App.css';
import spi from './Walk.gif';

export default function Spin() {
  window.scroll({
    top:0,
    left:0,
    behaviour:'smooth',
});
  return (
    <div class='spin'>
        <div class='spin-div'>
            <img src={spi} className='spp'/>
        </div>
      
    </div>
  )
}
