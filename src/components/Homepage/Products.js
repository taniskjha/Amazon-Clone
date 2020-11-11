import React from 'react'
import '../Css/Homepage.css'
import { useHistory } from 'react-router-dom'


function Products() {
  const history = useHistory()
  const onClick = () => {
   history.push('/login')
  }
    return (
        <div>
            <section id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-3">
                <div className="col text-center" id="welcome">
                  <h2>Welcome</h2>
                  <p>Sign in for the best experience</p>
                  <button onClick={onClick} className="btn">Sign in securely</button>
                  <div className="footer">
                    New to Amazon? <a href="#">Start here</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="col" id="amazon-basics">
                  <h2>Explore AmazonBasics</h2>
                  <a href="#" className="thumbnail text-center">
                    <img src="img/product_1.jpg" alt="Product 1" />
                    <span className="caption">Home</span>
                  </a>
                  <a href="#" className="thumbnail text-center">
                    <img src="img/product_2.jpg" alt="Product 2" />
                    <span className="caption">Bluetooth</span>
                  </a>
                  <a href="#" className="thumbnail text-center">
                    <img src="img/product_3.jpg" alt="Product 3" />
                    <span className="caption">Pets</span>
                  </a>
                  <a href="#" className="thumbnail text-center">
                    <img src="img/product_4.jpg" alt="Product 4" />
                    <span className="caption">Computer</span>
                  </a>
                  <div className="footer">
                    <a href="#">Shop all AmazonBasics</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="col" id="dress">
                  <h2>The dress shop</h2>
                  <div className="row text-center">
                    <a href="#"><img src="img/dress.png" /></a>
                  </div>
                  <div className="footer">
                    <a href="#">Shop women's dresses</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div>
                  <a href="#"><img style={{minWidth:'90%'}} src="img/product_5.jpg" alt="Product 5" /></a>
                </div>
                <div className="col" id="deal-day">
                  <h2>Deal of the day</h2>
                  <h3>₹75,000.99</h3>
                  <small>List: <s>₹1,40,025.00</s> (53% off)</small>
                  <a href="#"><img src="https://www.transparentpng.com/thumb/apple-iphone/QiuIOk-apple-iphone-x-64gb-picture.png" alt="Product 6" /></a>
                  <div className="footer">
                    <a href="#">Shop all deals</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Products
