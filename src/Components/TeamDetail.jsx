import React from 'react'
import { Link } from 'react-router-dom';

export const TeamDetail = () => {
     var Teams = [
    { TeamName:GT },
    { TeamName:CSK },
    { TeamName:RCB},
  ];
  return (
   <div style={{ textAlign: "center" }}>
      <h1>IPL Teams</h1>
      {
        Teams.map((Team)=>{
          return <li>
            <Link to={`/Teams/${Team.TeamName}`}>{Team.TeamName}</Link>
          </li>
        })
      }
    </div>
  )
}
