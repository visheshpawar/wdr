import React from 'react';
import '../App.css';
import x1 from './x1.png'
import x2 from './x2.png'
export default function About() {
    window.scroll({
        top:0,
        left:0,
        behaviour:'smooth',
    });

  return (
    <>
   <section class="abt-us" id="abt-us"> 

<div class="asu">"We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment."</div>

</section>




<div className='ftr'>
<div className='xor'>
<div className='loho'><img src={x1} className='lop'></img></div>
<div className='loho'><img src={x2} className='lop1'></img></div>

</div>
 <div className='ftr1'>© 2024 www.Wanderer.com. All rights reserved.</div> 
  
  
  </div>

    </>
  )
}
