import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Logo from '../image/varsity-coding.png';
import Amazon from '../image/1amazon-white.png';
import Ather from '../image/2ather.png';
import Boeing from '../image/3boeing.png';
import Cognizant from '../image/4cognizant.png';
import Fresh from '../image/5fresh.png';
import Freshwork from '../image/6fresh-works.png';
import Hp from '../image/7hp.png';
import Ibm from '../image/8ibm.png';
import Infoview from '../image/9infoview.png';
import Ms from '../image/10ms.png';
import Paytm from '../image/11Paytm.png';
import Tcs from '../image/12tcs.png';
import Version from '../image/13verizon.png';
import Walmart from '../image/14walmart.png';
import Walmartwhite from '../image/15walmart-white.png';
import Zoho from '../image/16Zoho.png';



function HeroSection() {
  return (
        <div className='hero-container'>
              <h1>An immersive learning platform engineered for technical growth</h1>
              <p>Become a Super-Hero with fully integrated, new age learning platform with 10x efficiency and multi- lingual programming features in a seamless code execution environment to support your Tech Career at all levels.
              <div className='hero-container-image'>
                <img  src= { Logo }  alt = "logo" />
              </div>
              </p>
          <div className='hero-btns'>
            <Button>
            <div className='btns'>GET STARTED</div> 
            </Button>
          </div>
          <div className="container">
            <table>
                <tbody>
                  <tr>
             <div className="column">
                    <td> <div  className="a">  <img src= { Amazon }/>  </div> </td>
                    <td> <div  className="b"> <img src= { Ather }/> </div></td>
                    <td> <div  className="c"> <img src= { Boeing }/>  </div></td>
                    <td> <div  className="d"> <img src= { Cognizant } /> </div></td>
                    <td> <div  className="e"> <img src= { Fresh } /> </div></td>
                    <td> <div  className="f"> <img src= { Freshwork } /> </div> </td>
                    <td> <div className="g"> <img src= { Hp } /> </div></td>\
                    <td> <div  className="h" > <img src= { Ibm } /> </div></td>
              <div  className="column">
                    <td> <div  className="i" > <img src= { Infoview } />   </div>   </td>
                    <td> <div  className="j" > <img src= { Ms } /></div>  </td>
                    <td>  <div  className="k" > <img src= { Paytm } /> </div>  </td>
                    <td>  <div  className="l" > <img src= { Tcs } /></div>   </td>
                    <td>  <div  className="m" > <img src= { Version } /></div> </td>
                    <td>  <div  className="n" > <img src= { Walmart } /></div></td>
                    <td>  <div  className="o" > <img src= { Walmartwhite } /> </div>  </td>
                    <td>  <div  className="p" > <img src= { Zoho }/> </div> </td>
                    </div>
                    </div>
                  </tr>
                </tbody>
              </table>
    </div> 
    </div>
  );
 }
export default HeroSection;
