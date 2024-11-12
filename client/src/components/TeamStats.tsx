import { useState,useEffect } from 'react';


interface TeamStatsProps {
    Data:{
    team_name: string;
    team_badge: string;
    overall_league_payed: string;
    overall_league_PTS: string;
    overall_league_W: string;
    overall_league_D: string;
    overall_league_L: string;
    overall_league_GF: string;
    overall_league_GA: string;
    overall_league_position: string;
    }
}






function TeamStats({Data}:TeamStatsProps) {
    const [foot,setMoveFlag] = useState([]);
    useEffect (() =>{
      fetch("https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=aec4f0534d3e6136def81d6437956ad6f296953447f6b6db94191510a064aa0e")
        .then((response) => response.json())
        .then((data) => setMoveFlag(data));
    },[]);
  const [footIndex,setFootIndex] = useState(0)
  const handleChange = (event) => {setFootIndex(event.target.value)}
   
   
    
    
  
    return (
      <>
        <div>
          <select onChange={handleChange} name="" id="">
            {foot.map((team,index) => 
            <option key={index} value={index}>{team.team_name}</option>
            )}
          </select>
          {foot[footIndex] && (
          <div>
          <img src={foot[footIndex].team_badge} alt="" />
          <p>Match joués:{foot[footIndex].overall_league_payed}</p>
          <p>Points:{foot[footIndex].overall_league_PTS}</p>
          <p>Wins:{foot[footIndex].overall_league_W}</p>
          <p>Defaites:{foot[footIndex].overall_league_D}</p>
          <p>Nul:{foot[footIndex].overall_league_L}</p>
          <p>Buts marqués:{foot[footIndex].overall_league_GF}</p>
          <p>Buts encaissés:{foot[footIndex].overall_league_GA}</p>
          <p>Classements:{foot[footIndex].overall_league_position}</p>
          </div>
        )}
          </div>
  
          
      </>
    )
  }

export default TeamStats