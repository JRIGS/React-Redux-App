import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfoCard from './InfoCard';

import { fetch } from '../actions';


const PlayerCard = props => {
    useEffect(() => {
        props.fetch();
    }, []);

    if (props.isFetching){
        return <h2>Loading Player Cards...</h2>;
    }
    console.log(props)
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.players.map(player => (
                <InfoCard key={player.id} player={player} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetch })(PlayerCard);