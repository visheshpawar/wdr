import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Foot from './comp/Foot';
import Cont from './comp/Cont';
import Places from './comp/Places';
import{
   HashRouter as Router,
   Link,
   Routes,
   Route
 } from "react-router-dom";
 



function App() {
  return (
   <>
   
   
   <Router>
   
<Navbar/>  
<Routes exact path="/">
<Route  default element = {<Cont />} />
<Route exact path="/" element = {<Cont />} />
<Route exact path="/places" element = {<Places />} />
</Routes>

<Foot/>
</Router>
   
   
   
   
   
   

</>


)}

export default App;
