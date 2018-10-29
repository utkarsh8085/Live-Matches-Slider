import PropTypes from 'prop-types';
import React from 'react';
import Slider from "react-slick";
import LiveEvent from './live-event';

const LiveMatches = props =>  {
        const { liveMatches } = props;
        const settings = {
            dots: false,
            speed: 500,
            autoplay:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'live-match-slider',
            autoplaySpeed: 3000
        };
        if (liveMatches.length === 0) {
            return null;
        } else {
            return (
                <Slider {...settings}>
                    {liveMatches.liveEvents.map(match => {
                        return (
                        <div key={match.event.id}>
                        <LiveEvent
                            liveEvent={match.event} liveScore={match.liveData}
                        />
                        </div>)
                    })}
                </Slider>

            );
        }
    }
   
    LiveMatches.prototype = {
        liveMatches: PropTypes.shape({
            liveEvents: PropTypes.array
        })
    }   

export default LiveMatches;