import React from 'react'
import '../Css/Homepage.css'

function Nav() {
    return (
             <header>
        <a id="nav-top" />
        <div id="nav-belt">
          <div className="nav-left">
            <div id="nav-logo">
              <a href="/" className="nav-logo-link" />
              <a href="/" className="nav-logo-tagline">Try Prime</a>
            </div>
          </div>
          <div className="nav-right">
            <div id="nav-holiday">
              <a href="/" />
            </div>
          </div>
          <div className="nav-fill">
            <div id="nav-search">
              <form>
                <div className="nav-left">
                  <span className="nav-search-label">All</span>
                  <i className="fa fa-caret-down" aria-hidden="true" />
                  <select id="nav-search-select">
                    <option selected="selected" value="aps">All Departments</option>
                    <option value="alexa-skills">Alexa Skills</option>
                    <option value="instant-video">Amazon Video</option>
                    <option value="warehouse-deals">Amazon Warehouse Deals</option>
                    <option value="appliances">Appliances</option>
                    <option value="mobile-apps">Apps &amp; Games</option>
                    <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
                    <option value="automotive">Automotive Parts &amp; Accessories</option>
                    <option value="baby-products">Baby</option>
                    <option value="beauty">Beauty &amp; Personal Care</option>
                    <option value="stripbooks">Books</option>
                    <option value="popular">CDs &amp; Vinyl</option>
                    <option value="mobile">Cell Phones &amp; Accessories</option>
                    <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                    <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                    <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                    <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                    <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                    <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                    <option value="collectibles">Collectibles &amp; Fine Art</option>
                    <option value="computers">Computers</option>
                    <option value="courses">Courses</option>
                    <option value="financial">Credit and Payment Cards</option>
                    <option value="digital-music">Digital Music</option>
                    <option value="electronics">Electronics</option>
                    <option value="gift-cards">Gift Cards</option>
                    <option value="grocery">Grocery &amp; Gourmet Food</option>
                    <option value="handmade">Handmade</option>
                    <option value="hpc">Health, Household &amp; Baby Care</option>
                    <option value="local-services">Home &amp; Business Services</option>
                    <option value="garden">Home &amp; Kitchen</option>
                    <option value="industrial">Industrial &amp; Scientific</option>
                    <option value="digital-text">Kindle Store</option>
                    <option value="fashion-luggage">Luggage &amp; Travel Gear</option>
                    <option value="luxury-beauty">Luxury Beauty</option>
                    <option value="magazines">Magazine Subscriptions</option>
                    <option value="movies-tv">Movies &amp; TV</option>
                    <option value="mi">Musical Instruments</option>
                    <option value="office-products">Office Products</option>
                    <option value="lawngarden">Patio, Lawn &amp; Garden</option>
                    <option value="pets">Pet Supplies</option>
                    <option value="prime-exclusive">Prime Exclusive</option>
                    <option value="pantry">Prime Pantry</option>
                    <option value="software">Software</option>
                    <option value="sporting">Sports &amp; Outdoors</option>
                    <option value="tools">Tools &amp; Home Improvement</option>
                    <option value="toys-and-games">Toys &amp; Games</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="videogames">Video Games</option>
                    <option value="wine">Wine</option>
                  </select>
                </div>
                <div className="nav-right">
                  
                  <input type="submit" />
                  <i className="fa fa-search" aria-hidden="true" />
                </div>
                <div className="nav-fill">
                  <input type="text" autoComplete="off" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <nav id="nav-main">
          <div className="nav-left">
            <div className="nav-shop">
              <a className="nav-a" href="/">
                Departments
                <i className="fa fa-caret-down" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="nav-right">
            <a className="nav-a" href="/">
              <span>EN</span>
              <i className="fa fa-globe" aria-hidden="true" />
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <a className="nav-a" href="/">
              <span>Hello. Sign in</span>
              Accounts &amp; Lists
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <a  className="nav-a" href="/">
              Orders
            </a>
            <a className="nav-a" href="/">
              Try Prime
              <i className="fa fa-caret-down" aria-hidden="true" />
            </a>
            <a className="nav-a cart" href="/">
              <span>0</span>
              Cart
            </a>
          </div>
          <div className="nav-fill">
            <ul>
              <li><a href="/">Your Amazon.com</a></li>
              <li><a href="/">Today's Deals</a></li>
              <li><a href="/">Gift Cards &amp; Registry</a></li>
              <li><a href="/">Sell</a></li>
              <li><a href="/">Help</a></li>
            </ul>
          </div>
        </nav>
      </header>

    )
}

export default Nav
