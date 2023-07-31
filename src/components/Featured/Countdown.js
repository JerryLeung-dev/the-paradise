import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
    state={
        eventDate: "October 12, 2024 21:00:00",
        days: "0",
        hours:"0",
        minutes:"0",
        seconds: "0"
    }

    getCountdown = deadline => {
        const eventDate = new Date(deadline);
        const currentDate = new Date();
        //get time
        const eventTime = eventDate.getTime();
        const currentTime = currentDate.getTime();
        const remainTime = eventTime - currentTime;
        if(remainTime < 0){
            console.log('Event passed');
        }
        //Calculate remaining time in sec, mins, hours and days
        let secs = Math.floor(remainTime/1000);
        let mins = Math.floor(secs/60);
        let hrs = Math.floor(mins/60);
        let days = Math.floor(hrs/24);
        //return to 0 when the time reaches its upper limit
        secs%=60;
        mins%=60;
        hrs%=24;

        this.setState({
            days: days,
            minutes: mins,
            seconds: secs,
            hours: hrs,
        })

    }

    componentDidMount () {
        setInterval(()=>this.getCountdown(this.state.eventDate),1000)
    }
    render() {
        return (
          <Slide left delay={2000}>
            <div className="countdown">
              <div className="countdown__top">Event starts in:</div>
              <div className="countdown__bottom">
                <div className="countdown__item">
                  <div className="countdown__time">{this.state.days}</div>
                  <div className="countdown__tag">Day</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{this.state.hours}</div>
                  <div className="countdown__tag">Hrs</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{this.state.minutes}</div>
                  <div className="countdown__tag">mins</div>
                </div>
                <div className="countdown__item">
                  <div className="countdown__time">{this.state.seconds}</div>
                  <div className="countdown__tag">secs</div>
                </div>
              </div>
            </div>
          </Slide>
        );
    }
}

export default Countdown;
