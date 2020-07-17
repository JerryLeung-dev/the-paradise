import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide-one.jpg';
import slide_two from '../../resources/images/slide-two.jpg';
import slide_three from '../../resources/images/slide-three.jpg';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite:true,
        autoplay:true,
        speed: 500,
    }
    return (
        <div 
            className="carrousel"
            style={{
                overflow:'hidden',
                height:'100vh'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel__image"
                        style={{
                            backgroundImage: `url(${slide_one})`,
                            height:'100vh',
                            width:'100%'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel__image"
                        style={{
                            backgroundImage: `url(${slide_two})`,
                            height:'100vh',
                            width:'100%'
                        }}
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel__image"
                        style={{
                            backgroundImage: `url(${slide_three})`,
                            height:'100vh',
                            width:'100%'
                        }}
                    ></div>
                </div>
                
               
            </Slider>
        </div>
    );
};

export default Carousel;