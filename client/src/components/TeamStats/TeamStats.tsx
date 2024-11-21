import { useState,useEffect } from 'react';
import "./TeamStats.css"

const apiKey = import.meta.env.VITE_CLIENT_API_KEY;

interface FootData {
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

function TeamStats() {
    const [foot,setMoveFlag] = useState<FootData[]>([]);

    useEffect (() =>{
      fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setMoveFlag(data))
        .catch((error)=>{
          console.error(error);
        });
    },[]);
    
  const [footIndex,setFootIndex] = useState(0)
  const handleChange = (event:any) => { 
    setFootIndex(event.target.value)}
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