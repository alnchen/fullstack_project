import React from 'react';

class ListingsIndex extends React.Component {

  render() {


    return (
      <div>
        <label>ABOUT</label>
        <par>
          Paragraph about my project goes here
        </par>


        <label>AirBadnBoujie</label>
        <Link to="/about-us">About Us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/press">Press</Link>
        <Link to="/policies">Policies</Link>
        <Link to="/help">Help</Link>
        <Link to="/diversity">Diversity & Belonging</Link>

        <label>Discover</label>
        <Link to="/trust">Trust & Safety</Link>
        <Link to="/travel-credit">Travel Credit</Link>
        <Link to="/giftcards">Gift Cards</Link>
        <Link to="/business-travel">Business Travel</Link>
        <Link to="/guidebooks">Guidebooks</Link>

        <label>Social</label>
        <Link to="/why-host">Why Host</Link>
        <Link to="/hospitality">Hospitality</Link>
        <Link to="/responsible-hosting">Listings</Link>
        <Link to="/communication-center">Communication Center</Link>
        <Link to="/listings">Listings</Link>

      </div>
    );
  }
}

export default ListingsIndex;
