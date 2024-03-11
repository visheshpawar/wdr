import React, { ReactPropTypes } from 'react';
import bg from './bag.png';
import {Link, useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import dia1 from './img4.gif'
import dia2 from './img5.gif'
import dia3 from './img1.gif'
import dia4 from './img2.gif'
import dia5 from './img3.gif'




export default function Details(props) {

    window.scroll({
        top:0,
        left:0,
        behaviour:'smooth',
    });



  return (
    <>


<div className='ovn'>

<Link  to="/places">  <div className='g-b' >
   <img src={bg} className='b-g'></img>
    </div></Link> 
    <div className='nb'>
<div className='tit'>{props.name}</div>
<div className='tit1'>{props.name}</div>
</div>
<div className='in-c'>
<div className='sup-img'><img src={props.im} className='sub-img'></img></div>
<div className='cl-t'>





<div class="list">
  <h2>Tour Details</h2>
  <ul>
    <li><span>3 days and 4 nights package</span></li>
    <li><span>Stay in 5 star hotels</span></li>
    <li><span>Personal guide</span></li>
    <li><span>Free breakfast, lunch and dinner</span></li>
    <li><span>Tour bus included</span></li>
    
  </ul>
</div>



</div>

</div>
<div className='bt-9'>
<button class="button-57" role="button"><span class="text">Purchase</span><span>{props.prc}</span></button>

</div>
</div>
</>
  )
}
