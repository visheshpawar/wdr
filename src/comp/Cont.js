import React from 'react'
import '../App.css';
import Sldrldr from './Sldrldr';
import About from './About';
export default function Cont() {

  window.scroll({
    top:0,
    left:0,
    behaviour:'smooth',
});
  return (


    <>
   



  <div class="b-text">Wanderer</div>







  





<section class="abt">Revamp your bucket list and give wings to your dreamy destinations. Liberating in the delightful international travel destinations is no more a task. Give yourself a break from the monotonous life, explore the breath-taking beauty through international tourism guide.</section>


<section class="abt"> The majestic alps in Europe to soothing oceans of Mauritius, crazy carnivals of America to inheriting inner peace in Asia; there's more to life than the robotic lifestyle we all live these days. From a never-ending list to choose from, you can select your go-to trip trail and customize it according to your preferences.</section>
<hr/>
 <div className='y-name'> We offer tours to</div>

<Sldrldr/>





















</>
  )
}
