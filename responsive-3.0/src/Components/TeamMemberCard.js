import React from 'react'

function TeamMemberCard({image , name , role}){
    return(
        <div className="teamCard">
            <div style={{backgroundImage : `url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    )
}

export default TeamMemberCard