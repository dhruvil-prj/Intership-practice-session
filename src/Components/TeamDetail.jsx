import React from 'react'
import { Link } from 'react-router-dom';

export const TeamDetail = () => {
     const Teams = [
    { teamName:"GT"},
    { teamName:"CSK"},
    { teamName:"RCB"},
    { teamName:"RR"},
    { teamName:"MI"},
    { teamName:"KKR"},
    { teamName:"SRH"},
    { teamName:"LSG"},
    { teamName:"PBSK"},
    { teamName:"DC"},
  ];
  return (
   <div style={{ textAlign: "center" }}>
      <h1>Team Details</h1>
      <ul>
      {
        Teams.map((team, index)=>{
          return <li key={index}>
            <Link to={`/playing/${team.teamName}`}>{team.teamName}</Link>
          </li>
        })
      }
      </ul>
    </div>
  )
}
