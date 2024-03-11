import logo from './logo.svg';
import './App.css';
import Sard from './comp/Sldrldr'
import Navbar from './comp/Navbar';
import dia1 from './comp/img1.gif';
import dia2 from './comp/img2.gif';
import dia3 from './comp/img3.gif';
import dia4 from './comp/img4.gif';
import dia5 from './comp/img5.gif';



import swit from './comp/swit.gif';
import dub from './comp/dubai.gif';
import par from './comp/paris.gif';
import rus from './comp/russia.gif';
import ita from './comp/italy.gif';





import Foot from './comp/Foot';
import Cont from './comp/Cont';
import Places from './comp/Places';
import About from './comp/About';
import { ReactPropTypes } from 'react';

import{

   HashRouter as Router,
   Link,
   Routes,
   Route,
   useParams,
   useLocation
 } from "react-router-dom";
import Spin from './comp/Spin';
import Details from './comp/Details';
 



function App() {



  return (
   <>
   

   
   <Router>
   
<Navbar/>  
<Routes exact path="/">
<Route  default element = {<Cont />} />
<Route exact path="/" element = {<Cont />} />
<Route exact path="/about" element = {<About />} />
<Route exact path="/contact" element = {<Foot/>} />
<Route exact path="/places" element = {<Places />} />
<Route exact path="/details/america" element = {<Details name="America" prc="$15,999" im={dia4}/>} />
<Route exact path="/details/london" element = {<Details name="London" prc="$18,999" im={dia5} />} />


<Route exact path="/details/dubai" element = {<Details name="Dubai" prc="$15,999" im={dub}/>} />
<Route exact path="/details/switzerland" element = {<Details name="Switzerland" prc="$18,999" im={swit} />} />
<Route exact path="/details/italy" element = {<Details name="Italy" prc="$15,999" im={ita}/>} />
<Route exact path="/details/paris" element = {<Details name="Paris" prc="$18,999" im={par} />} />
<Route exact path="/details/russia" element = {<Details name="Russia" prc="$15,999" im={rus}/>} />


</Routes>

</Router>
   
   
   
   
   
   

</>


)}

export default App;
