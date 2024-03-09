import React, {useState} from 'react'
import '../App.css';
export default function Foot() {




    const [Val, setVal]  = useState("");


    const  hoc = (event) =>
    {
        setVal(event.target.value);
    }



    const  btmhide = () =>
    {
      
       if(Val!="")
        {
    
          
        document.getElementById('hid1').style.opacity="0"; 
           
        document.getElementById('hid2').style.opacity="0"; 
           
        document.getElementById('hid3').style.opacity="0"; 
    
    
        document.getElementById('clp').style.height="20px";
    
        document.getElementById('btm-hide').style.display="flex";
       }
    
      
    }










  return (
  
  <>

<div id="clp">



<div class="f-head" id="hid1">Contact us</div>
<div class="sub-head" id="hid2">Submit your mail and we will contact you.</div>

<div class="sign-up" id="hid3">
<input type="email" class="inp-s " id="inp-down" placeholder="Enter your Email" value={Val}   onChange={hoc} />
<button class="btn-s" onClick={btmhide}>Submit</button>
</div>

</div>



<div class="sub-head-hide" id="btm-hide">Thanks, We will contact you soon.</div>





</>


  )
}
