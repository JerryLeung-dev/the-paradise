import React, { Component } from "react";

import "./Pricing.css";

import PriceCard from "./PriceCard";

class Pricing extends Component {
    state={
        prices: ['100','180','250'],
        packages: ['Standard', 'Premium','Superb'],
        desc: [
            'Essential color powder package',
            'Powder package + color spray gun + 2 times free-loaded armo',
            'All from Premium package + 2 color bombs + secret hide place'
        ],
        link: ['#', '#','#'],
        delay: [500,0,600]
    }

    showBoxes = () =>(
        this.state.prices.map((box,i) => (
            <PriceCard 
                key={i}
                price={this.state.prices[i]}
                package={this.state.packages[i]}
                description={this.state.desc[i]}
                link={this.state.link[i]}
                delay={this.state.delay[i]}
            />

        ))
    )
    render() {
    return (
      <div className="pricing">
        <div className="pricing__title">Pricing</div>
        <div className="pricing__card-wrapper">
          {this.showBoxes()}
        </div>
      </div>
    );
  }
}

export default Pricing;
