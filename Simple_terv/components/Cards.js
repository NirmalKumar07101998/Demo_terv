import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Logo from '../image/WhatsApp Image 2021-04-07 at 3.32.44 PM.jpeg';
import Lugo from '../image/WhatsApp Image 2021-04-07 at 3.32.45 PM (1).jpeg';
import Lulo from '../image/WhatsApp Image 2021-04-07 at 3.32.45 PM (2).jpeg';
import Ludo from '../image/WhatsApp Image 2021-04-07 at 3.32.45 PM.jpeg';
import lusa from '../image/WhatsApp Image 2021-04-07 at 3.32.46 PM.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <p>LEARN FASTER, CODE BETTER AND ACE BIGGER</p>
          <p>Here’s why thousands of programmers have taken their journey with us. With Terv, learn to solve challenges & algorithms exponentially using the hints, video explanations, test cases and solutions at your convenience.</p>
            <CardItem
              src= { Logo }  alt = "logo"
              text=''
              label=''
              path=''
            />
            <p>BE THE DEVELOPER YOU WANT TO BE</p>
            <p>Being proficient in multiple languages not only enhances your chances of hiring with more opportunities but exposes your versatility to work with different tech stacks in different environments.</p>
            <CardItem
              src= { Lugo }  alt = "logo"
              text=''
              label=''
              path=''
            />
          </ul>
          <ul className='cards__items'>
           <h1> <p>LAND ON YOUR DREAM JOB</p> </h1>
            <p>Get your stunning portfolio, effective technical skills, and more with our dedicated job support team. Our Employer network includes some of the top technology companies & innovative startups.</p>
            <CardItem
              src= { Lulo }  alt = "logo"
              text=''
              label=''
              path=''
            />
            <CardItem
              src= { Ludo }  alt = "logo"
              text=''
              label=''
              path=''
            />
            <CardItem
              src= { lusa }  alt = "logo"
              text=''
              label=''
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;