import React from 'react';
import { AvailOffers } from '../components/AvailOffers';
import { GiftCards } from '../components/GiftCards';
import { Rewards } from '../components/Rewards';
import Header from '../components/Header';

export default class Offers extends React.Component {
  render(){
    return (
      <div>
      <div><Header></Header></div>
      <div>
          <AvailOffers/>
          <br/>
          {/* <GiftCards/> */}
          <br/>
          {/* <Rewards/> */}
      </div>
      </div>
     );
  }
  
}

