import React from 'react'

const infoCard = props => {
    return (
        <div key={props.player.id}>
            <h3>{`${props.player.first_name} ${props.player.last_name}`}</h3>
            <p><span>Position</span>: {props.player.position}</p>
            <p><span>Division</span>: {props.player.team.division}</p>
            <p><span>Team</span>: {props.player.team.full_name}</p>
            <p><span>City</span>: {props.player.team.abbreviation} - {props.player.team.city}</p>
            <p><span>Conference</span>: {props.player.team.conference}</p>
        </div>
    )

}

export default infoCard;