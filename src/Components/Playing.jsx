import React from "react";
import { useParams } from "react-router-dom";

export const Playing = () => {
  
  const { teamName } = useParams();

  const teams = [
    {
      name: "GT",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
      titles: 1,
      wins: 23,
      losses: 10,
      players: ["Shubman Gill", "Rashid Khan", "David Miller"]
    },
    {
      name: "CSK",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
      titles: 5,
      wins: 131,
      losses: 91,
      players: ["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad"]
    },
    {
      name: "RCB",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Royal_Challengers_Bengaluru_Logo.svg/250px-Royal_Challengers_Bengaluru_Logo.svg.png",
      titles: 0,
      wins: 114,
      losses: 120,
      players: ["Virat Kohli", "Faf du Plessis", "Glenn Maxwell"]
    },
    {
      name: "MI",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
      titles: 5,
      wins: 138,
      losses: 109,
      players: ["Rohit Sharma", "Hardik Pandya", "Jasprit Bumrah"]
    },
    {
      name: "RR",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/250px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
      titles: 1,
      wins: 110,
      losses: 106,
      players: ["Sanju Samson", "Jos Buttler", "Yashasvi Jaiswal"]
    },
    {
      name: "KKR",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
      titles: 3,
      wins: 130,
      losses: 115,
      players: ["Shreyas Iyer", "Andre Russell", "Rinku Singh"]
    },
    {
      name: "SRH",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/250px-Sunrisers_Hyderabad_Logo.svg.png",
      titles: 1,
      wins: 80,
      losses: 80,
      players: ["Pat Cummins", "Travis Head", "Heinrich Klaasen"]
    },
    {
      name: "LSG",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/1200px-Lucknow_Super_Giants_IPL_Logo.svg.png",
      titles: 0,
      wins: 20,
      losses: 15,
      players: ["KL Rahul", "Marcus Stoinis", "Nicholas Pooran"]
    },
    {
      name: "PBSK",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png",
      titles: 0,
      wins: 100,
      losses: 120,
      players: ["Shikhar Dhawan", "Sam Curran", "Liam Livingstone"]
    },
    {
      name: "DC",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/250px-Delhi_Capitals.svg.png",
      titles: 0,
      wins: 110,
      losses: 130,
      players: ["Rishabh Pant", "David Warner", "Axar Patel"]
    }
  ];

  const team = teams.find((t) => t.name === teamName);

  return (
    <div style={{textAlign:"center"}}>
      <h1>Playing....{teamName}</h1>
      {team && (
        <div>
          <img src={team.logo} alt={team.name} height="150px" width="150px" />
          <h2>Titles Won: {team.titles}</h2>
          <h3>Wins: {team.wins} / Losses: {team.losses}</h3>
          <h3>Current Players:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {team.players.map((player, index) => <li key={index}>{player}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};