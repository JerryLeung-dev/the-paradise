import React, { Component } from "react";

import "./Highlights.css";
import Button from '../UI/MyButton';

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

class Discount extends Component {
  state = {
    startPoint: 0,
    endPoint: 30,
  };

  getPercentage = () => {
    if (this.state.startPoint < this.state.endPoint) {
      this.setState({ startPoint: this.state.startPoint + 1 });
    }
  };
  componentDidUpdate() {
    setTimeout(() =>{
        this.getPercentage()
    },40);
  }
  render() {
    return (
      <div className="center-wrapper">
        <div className="highlight-discount">
          <Fade
            onReveal={()=>this.getPercentage()}
          >
            <div className="highlight-discount__percentage">
              <span>{this.state.startPoint}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="highlight-discount__description">
              <h3>Purchase our premium package before 20th Sep</h3>
              <ul>
                <li>
                  24 color packets, 4 bright liquid colors, 4 easy fill squirt
                  guns (size may vary) and 4 refillable color balls – the
                  ultimate color party.
                </li>
                <li>
                  Chameleon’s authentic COLOR has been enjoyed my MILLIONS all
                  around the world, people LOVE our color, you and your kids
                  will too.
                </li>
                <li>
                  Made in local Australia, in a modern facility, using the best
                  ingredients, delivering the highest quality.
                </li>
                <li>
                  Packets are easy to open, just add water to color bottles,
                  shake, and you’re ready to play.
                </li>
              </ul>
              <Button
                    name="Buy now"
                    icon={<ShoppingCartOutlinedIcon />}
                    link="#"
                    text="BUY NOW"
                />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
