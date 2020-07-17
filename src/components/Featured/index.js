import React from 'react';

import './Featured.css';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{position:'relative',height:'100vh'}}>
            <Carrousel />
            
            <div className="event-moments">
                
                <div className="event-moments__wrapper">
                    Color Your Life 
                </div>
                
            </div>
            <Countdown />
        </div>
    );
};

export default Featured;