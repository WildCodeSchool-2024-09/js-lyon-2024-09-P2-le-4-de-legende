import { useState, useEffect } from "react";
import "./TeamStats.css";
import LeagueLogo from "../../../public/LigaLogo.png";

const apiKey = import.meta.env.VITE_CLIENT_API_KEY_FOOT;

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
  const [foot, setMoveFlag] = useState<FootData[]>([]);

  useEffect(() => {
    fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setMoveFlag(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [footIndex, setFootIndex] = useState(0);
  const handleChange = (event: any) => {
    setFootIndex(event.target.value);
  };
  return (
    <>
      <div className="filtre">
        <div className="tabTittle">
          <img className="LeagueLogo" src={LeagueLogo} alt="logo du tableau" />
          <h1 id="title">Team Stats</h1>
        </div>
        <div className="back-select">
          <select onChange={handleChange} name="" id="select">
            {foot.map((team, index) => (
              <option key={index} value={index}>
                {team.team_name}
              </option>
            ))}
          </select>
        </div>
        {foot[footIndex] && (
          <div className="logo-stats">
            <div className="logo-et-stats">
              <img
                id="logoFiltre"
                src={foot[footIndex].team_badge}
                alt="logo du club"
              />
              <div className="stats">
                <div className="p-stats">
                    <p>
                      Matchs joués:
                    </p>
                    <span>{foot[footIndex].overall_league_payed}</span>
                </div>

                <div className="p-stats">
                  <p>Points:</p>
                  <span>{foot[footIndex].overall_league_PTS}</span>
                </div>

                <div className="p-stats">
                  <p>Wins:</p>
                  <span>{foot[footIndex].overall_league_W}</span>
                </div>

                <div className="p-stats">
                  <p>Defaites:</p>
                  <span>{foot[footIndex].overall_league_D}</span>
                </div>

                <div className="p-stats">
                  <p> Nul:</p>
                  <span>{foot[footIndex].overall_league_L}</span>
                </div>

                <div className="p-stats">
                  <p> Buts marqués:</p>
                  <span>{foot[footIndex].overall_league_GF}</span>
                </div>
                
                <div className="p-stats">
                  <p className="p-stats"> Buts encaissés: </p>
                  <span>{foot[footIndex].overall_league_GA}</span>
                </div>
               
                <div className="p-stats">
                  <p className="p-stats"> Classements: </p>
                  <span>{foot[footIndex].overall_league_position}</span>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TeamStats;
