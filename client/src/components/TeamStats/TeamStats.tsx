import { useState,useEffect } from 'react';
import "./TeamStats.css"









function TeamStats() {
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
        <div className='filtre'>
            <h1>Team Stats</h1>
          <select onChange={handleChange} name="" id="">
            {foot.map((team,index) => 
            <option key={index} value={index}>{team.team_name}</option>
            )}
          </select>
          {foot[footIndex] && (
          <div className='logo-stats'>
          <img id='logoFiltre' src={foot[footIndex].team_badge} alt="logo du club" />
            <div className='stats'>
                <p className='p-stats' >Matchs joués:<span>{foot[footIndex].overall_league_payed}</span></p>
                <p className='p-stats'>Points:<span>{foot[footIndex].overall_league_PTS}</span></p>
                <p className='p-stats'>Wins:<span>{foot[footIndex].overall_league_W}</span></p>
                <p className='p-stats'>Defaites:<span>{foot[footIndex].overall_league_D}</span></p>
                <p className='p-stats'>Nul:<span>{foot[footIndex].overall_league_L}</span></p>
                <p className='p-stats'>Buts marqués:<span>{foot[footIndex].overall_league_GF}</span></p>
                <p className='p-stats'>Buts encaissés:<span>{foot[footIndex].overall_league_GA}</span></p>
                <p className='p-stats'>Classements:<span>{foot[footIndex].overall_league_position}</span></p>
            </div>
          </div>
        )}
          </div>
  
          
      </>
    )
  }

export default TeamStats