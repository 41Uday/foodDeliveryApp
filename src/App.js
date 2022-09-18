import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="title-heading">Delicious Food</h1>
        <p className="para-1">We made fresh and Healthy food</p>
        <div className="one-cont">
          <div className="img-1-cont">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png"
              alt="sea-food"
              className="img"
            />
            <div className="card-1">
              <p className="crab">Crab Ramen</p>
              <p className="card-1-quote">Spicy with garlic</p>
              <p className="crab">RS 249</p>
            </div>
          </div>
          <div className="img-1-cont">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png"
              alt="sea-food"
              className="img"
            />
            <div className="card-1">
              <p className="crab">Noodles</p>
              <p className="card-1-quote">Chinese noodles</p>
              <p className="crab">RS 149</p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div className="one-cont">
            <div>
              <p className="crab">Eggs Curry</p>
              <p className="card-1-quote">Eggs to tomato and sauce</p>
              <p className="crab">RS 239</p>
            </div>
            <img
              src="https://1.bp.blogspot.com/-LewfCHTjK4A/WHQO6tOHiuI/AAAAAAAACQg/cd8YqtPQ2f4ONMteuESb3ZsviQhjOwhsgCEw/s640/Egg%2BCurry%2BRecipe.jpg"
              alt="egg"
              className="img-2"
            />
          </div>
        </div>
        <div className="card-3">
          <div className="img-3-container-3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
              alt="1"
              className="small-img"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnVal6A0IhDQy8t2MZRLl9ejDBc4LqyRSyA&usqp=CAU"
              alt="two"
              className="small-img-2"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
