import React, { Component } from 'react';

import './Highlights.css';
import Description from './Description';
import Discount from './Discount';

class Highlights extends Component {
    render() {
        return (
            <div className="highlights">

                <Description />
                <Discount />
            </div>
        );
    }
}

export default Highlights;