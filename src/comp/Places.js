import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../App.css';

import { useParams } from 'react-router-dom';
import { ReactPropTypes } from 'react';
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


export default function Places(props) {
  window.scroll({
    top:0,
    left:0,
    behaviour:'smooth',
});



  return (
<>

 


  <div class="sec2">
    <div class="tit1">AMERICA</div>
    <div class="sec">
      <div class="img-div">
        <img src={dia1} alt="img" class="img-1" />
      </div>
      <div class="tit">AMERICA</div>
      <div class="s-text">
      The United States of America (USA or U.S.A.), commonly known as the United States (US or U.S.) or America, is a country primarily located in North America, between Canada and Mexico. It is a federation of 50 states, a federal capital district (Washington, D.C.), and 326 Indian reservations. Outside the union of states, it asserts sovereignty over five major unincorporated island territories and various uninhabited islands.[j] The country has the world's third-largest land area,[d] largest maritime exclusive economic zone, and the third-largest population, exceeding 334 million.[k]
      </div>
      
    </div>

      
<div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/america">Details</Link></button></div>
    
    
    
 




 
    


  </div>


<hr />
 



  <div class="sec2 ">
    <div class="tit1">LONDON</div>
    <div class="sec">
      <div class="img-div">
        <img src={dia2} alt="img" class="img-1" />
      </div>
      <div class="tit">LONDON</div>
      <div class="s-text">
      London is the capital and largest city of England, and the United Kingdom, with a population of around 8.8 million,[1] and the largest city in Western Europe by metropolitan area, with a population of 14.8 million.[9][note 1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for nearly two millennia.[10] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.
      </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/london">Details</Link></button></div>

  </div>
  <hr />



  <div class="sec2 ">
    <div class="tit1">Paris</div>
    <div class="sec">
      <div class="img-div">
        <img src={par} alt="img" class="img-1" />
      </div>
      <div class="tit">Paris</div>
      <div class="s-text">
      Paris (French pronunciation: [paʁi] ⓘ) is the capital and most populous city of France. With an official estimated population of 2,102,650 residents as of 1 January 2023[2] in an area of more than 105 km2 (41 sq mi),[5] Paris is the fourth-most populated city in the European Union and the 30th most densely populated city in the world in 2022.[6] Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, and gastronomy. For its leading role in the arts and sciences, as well as its early and extensive system of street lighting, in the 19th century, it became known as the City of Light.[7]

The City of Paris is the centre of the Île-de-France region, or Paris Region, with an official estimated population of 12,271,794 inhabitants on 1 January 2023, or about 19% of the population of France.[2] The Paris Region had a GDP of €765 billion (US$1.064 trillion, PPP)[8] in 2021, the highest in the European Union.[9] According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.[10]  </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/paris">Details</Link></button></div>

  </div>
  <hr />

  
  <div class="sec2 ">
    <div class="tit1">Russia</div>
    <div class="sec">
      <div class="img-div">
        <img src={rus} alt="img" class="img-1" />
      </div>
      <div class="tit">Russia</div>
      <div class="s-text">
      Internationally, Russia ranks among the lowest in measurements of democracy, human rights and freedom of the press; the country also has high levels of perceived corruption. The Russian economy ranks 11th by nominal GDP, relying heavily on its abundant natural resources, and 68th by GDP per capita. Its mineral and energy sources are the world's largest, and its figures for oil production and natural gas production rank highly globally. Russia possesses the largest stockpile of nuclear weapons and has the third-highest military expenditure. The country is a permanent member of the United Nations Security Council; a member state of the G20, SCO, BRICS, APEC, OSCE, and WTO; and the leading member state of post-Soviet organisations such as CIS, CSTO, and EAEU/EEU. Russia is home to 30 UNESCO World Heritage Sites.
      Russia (Russian: Россия, romanized: Rossiya, [rɐˈsʲijə]), or the Russian Federation,[b] is a country spanning Eastern Europe and North Asia. It is the largest country in the world by area, extending across eleven time zones. It shares land boundaries with fourteen countries. </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/russia">Details</Link></button></div>

  </div>
  <hr />

  
  <div class="sec2 ">
    <div class="tit1">Dubai</div>
    <div class="sec">
      <div class="img-div">
        <img src={dub} alt="img" class="img-1" />
      </div>
      <div class="tit">Dubai</div>
      <div class="s-text">
      Dubai (/duːˈbaɪ/, doo-BY; Arabic: دبي, romanized: Dubayy, IPA: [dʊˈbajj], Gulf Arabic pronunciation: [dəˈbaj]) is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai, the most populated of the country's seven emirates.[7][8][9]

Established in the 18th century as a small fishing village, Dubai grew into a regional trading hub in the early 20th century and grew rapidly in the late 20th and early 21st centuries with a focus on tourism and luxury.[10] It has the second-most five-star hotels in the world[11] and boasts the tallest building in the world, the Burj Khalifa, which is 828 metres (2,717 ft) tall.

In the eastern Arabian Peninsula, on the coast of the Persian Gulf,[12] it is a major global transport hub for passengers and cargo.[13] Oil revenue helped accelerate the development of the city, which was already a major mercantile hub.   </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/dubai">Details</Link></button></div>

  </div>
  <hr />

  
  <div class="sec2 ">
    <div class="tit1">Switzerland</div>
    <div class="sec">
      <div class="img-div">
        <img src={swit} alt="img" class="img-1" />
      </div>
      <div class="tit">Switzerland</div>
      <div class="s-text">
      Switzerland, officially the Swiss Confederation, is a landlocked country located in west-central Europe.[e][13] It is bordered by Italy to the south, France to the west, Germany to the north and Austria and Liechtenstein to the east. Switzerland is geographically divided among the Swiss Plateau, the Alps and the Jura; the Alps occupy the greater part of the territory, whereas most of the country's population of 9 million are concentrated on the plateau, which hosts the largest cities and economic centres, including Zürich, Geneva and Basel.[14]

Switzerland originates from the Old Swiss Confederacy established in the Late Middle Ages, following a series of military successes against Austria and Burgundy; the Federal Charter of 1291 is considered the country's founding document. Swiss independence from the Holy Roman Empire was formally recognised in the Peace of Westphalia in 1648. Switzerland has maintained a policy of armed neutrality since the 16th century and has not fought an international war since 1815. It joined the United Nations only in 2002 but pursues an active foreign policy that includes frequent involvement in peace building.[15] </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/switzerland">Details</Link></button></div>

  </div>
  <hr />


  <div class="sec2 ">
    <div class="tit1">Italy</div>
    <div class="sec">
      <div class="img-div">
        <img src={ita} alt="img" class="img-1" />
      </div>
      <div class="tit">Italy</div>
      <div class="s-text">

Italy has the eighth-largest nominal GDP in the world, the second-largest manufacturing industry in Europe (7th-largest in the world)[30] and has a significant role in regional[31][32] and global[33][34] economic, military, cultural, and diplomatic affairs. Italy is a founding and leading member of the European Union, and it is in numerous international institutions including NATO, the G7, the Mediterranean Union, and the Latin Union. The country is the source of multiple inventions and discoveries, and considered as a cultural superpower and has long been a global centre of art, music, literature, cuisine, science and technology, and fashion.[35] It has the world's largest number of World Heritage Sites (58), and is the world's fifth-most visited country
German is co-official in South Tyrol and Friuli-Venezia Giulia; French is co-official in the Aosta Valley; Slovene is co-official in the province of Trieste, the province of Gorizia, and Friuli-Venezia Giulia; Ladin is co-official in South Tyrol, in Trentino and in other northern areas; Friulian is co-official in Friuli-Venezia Giulia; Sardinian is co-official in Sardinia.[11][12]

  </div>
      
    </div>
    <div class="price"><button class="button-50" role="button"> <Link className='abut' to="/details/italy">Details</Link></button></div>

  </div>
  <hr />






 </>

  )
}
