import React from 'react'
import '../App.css';

import { Link } from 'react-router-dom';
import dia1 from './img4.gif'
import dia2 from './img5.gif'
import dia3 from './img1.gif'
import dia4 from './img2.gif'
import dia5 from './img3.gif'

import swit from './swit.gif';
import dub from './dubai.gif';
import par from './paris.gif';
import rus from './russia.gif';
import ita from './italy.gif';



import iu1 from './i1.jpg';
import iu2 from './i1.jpg';
export default function Sldrldr() {



  return (

<>



<div className='slidar'>

<div className='slders' ><img src={dia1} className='iges'></img>
<div className='c-text'><Link to="/details/america" className='lk'>America</Link></div>
</div>

<div className='slders' ><img src={dia2} className='iges'></img>
<div className='c-text'><Link to="/details/london" className='lk'>London</Link></div>
</div>

<div className='slders' ><img src={rus} className='iges'></img>
<div className='c-text'><Link to="/details/russia" className='lk'>Russia</Link></div>
</div>

<div className='slders' ><img src={ita} className='iges'></img>
<div className='c-text'><Link to="/details/italy" className='lk'>Italy</Link></div>
</div>

<div className='slders' ><img src={par} className='iges'></img>
<div className='c-text'><Link to="/details/paris" className='lk'>Paris</Link></div>
</div>

<div className='slders' ><img src={swit} className='iges'></img>
<div className='c-text'><Link to="/details/switzerland" className='lk'>Switzerland</Link></div>
</div>

<div className='slders' ><img src={dub} className='iges'></img>
<div className='c-text'><Link to="/details/dubai" className='lk'>Dubai</Link></div>
</div>





















</div>






    </>
  )
}
