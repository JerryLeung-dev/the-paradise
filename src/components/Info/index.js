import React from 'react';

import InfoCard from './InfoCard';
import './Info.css';
import calendar_icon from '../../resources/images/icons/calendar.png';
import location_icon from '../../resources/images/icons/location.png';



const Info = () => {
    return (
        <div className="wrapper">
          <InfoCard
            icon={calendar_icon}
            title="Event starts in"
            desc="October 12, 2020 21:00:00"
            bgColor="rgb(249, 165, 246)"
          />
          <InfoCard
            icon={location_icon}
            title="Where we at"
            desc="271 Elizabeth St, Sydney NSW 2000"
            bgColor="#ffeb00"
            delayTime='200'
          />
        </div>
    );
};

export default Info;