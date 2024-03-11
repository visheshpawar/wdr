import React, {useState} from 'react'
import '../App.css';
import dia from './logo.gif';
import {Link} from 'react-router-dom';
export default function Navbar() {


const [Flag, setFlag]  = useState(0);


  
const doiu = () =>
{
  document.getElementById('dropdown').style.height="0px";

  let navToggle = document.querySelector('.nav-toggle')
  let bars = document.querySelectorAll('.bar')
  bars.forEach(bar => bar.classList.toggle('x'))
       
  setFlag(0);


}

  
  const dropdown = () =>
  {
      if(Flag==0)
      {
          document.getElementById('dropdown').style.height="170px";
        
          setFlag(1);



          let navToggle = document.querySelector('.nav-toggle')
          let bars = document.querySelectorAll('.bar')
          bars.forEach(bar => bar.classList.toggle('x'))


          
      }
      else{
          document.getElementById('dropdown').style.height="0px";
       
          setFlag(0);
      
      
          let navToggle = document.querySelector('.nav-toggle')
          let bars = document.querySelectorAll('.bar')
          bars.forEach(bar => bar.classList.toggle('x'))

      
        }
  }






  return (
   
    <>

      <nav class="navbar" >
      <div class="l-nav">
        <ul class="nav-list">
          <li class="hov"><Link to="/" className='hha'>Home</Link></li>
          <li class="hov"><Link to="/places" className='hha'>Locations</Link></li>
          <li class="hov"><Link to="/about" className='hha'>About</Link></li>
          <li class="hov"><Link to="/contact" className='hha'>Contact us</Link></li>
        </ul>
      </div>
      <div class="r-nav">
        <img src={dia} alt="logo" class="logo" />
      </div>

      <a class="nav-toggle burger" id="burger" onClick={dropdown}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
    </nav>

    <div class="collapse-nav" id="dropdown">
      <ul class="nav-list-collapse">
        <li class="hov"><Link to="/" onClick={doiu}>Home</Link></li>
        <li class="hov"><Link to="/places" onClick={doiu}>locations</Link></li>
        <li class="hov"><Link to="/about" onClick={doiu}>About</Link></li>
        <li class="hov"><Link to="/contact" onClick={doiu}>Contact us</Link></li>
      </ul>
    </div>


    </>
  )
}
