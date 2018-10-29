import PropTypes from 'prop-types';
import React from 'react';
import { sportsIcons } from '../constants';
import { formatEventDate } from '../utils';

const LiveEvent = props => {
    const { liveEvent, liveScore } = props
    let isScoreAvailable = liveScore.score ? true : false;

    const iconType = sportsIcons.includes(liveEvent.sport) ?
        `icon-${liveEvent.sport.toLowerCase()}` : 'icon-default';


    return (
        <div key={liveEvent.id} className='live-event-wrapper'>
            <div className='live-score'>
                {
                    isScoreAvailable ? `${liveScore.score.away} - ${liveScore.score.home}` : 'Score Not Available'
                }
            </div>
            <div className='live-teams'>
                <span className={`icon ${iconType}`}></span>
                <span className='teams-name'>{liveEvent.name}</span>
            </div>
            <div className='event-date'>
                {formatEventDate(liveEvent.start)}
            </div>
            <div>
                <a className='bet-button' href={`https://www.unibet.com/betting#event/live/${liveEvent.id}`} rel="noopener noreferrer" target="_blank" role='button'>Place a bet</a>
            </div>
        </div>
    );
}

LiveEvent.prototype = {
    liveEvent: PropTypes.shape({
        sport: PropTypes.string,
        id: PropTypes.number,
        start: PropTypes.string,
        name: PropTypes.string
    }),
    liveScore: PropTypes.shape({
        score: PropTypes.object
    })
};




export default LiveEvent;