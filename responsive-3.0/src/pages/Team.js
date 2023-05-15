import React from 'react'
import { TeamList } from '../helpers/TeamList'
import TeamMemberCard from '../Components/TeamMemberCard'
import '../styles/Team.css'

function Team() {
  return (
      <div className="team">
        <div className="teamTitle">Meet our team</div>
        <div className="teamList">
            {
                TeamList.map((teamMember , key) => {
                    return(
                        <TeamMemberCard
                        key={key}
                        name={teamMember.name}
                        role = {teamMember.role}
                        image = {teamMember.image}
                        />
                    )
                })
            }
        </div>
      </div>
  )
}

export default Team
