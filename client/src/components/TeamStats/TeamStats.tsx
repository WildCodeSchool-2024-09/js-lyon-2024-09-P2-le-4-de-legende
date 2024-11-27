import { useState, useEffect } from "react";
import "./TeamStats.css";
import leaguelogo from "../../../public/LigaLogo.png";

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
          <img className="LeagueLogo" src={leaguelogo} alt="logo du tableau" />
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
                <p className="p-stats">
                  Matchs joués:
                  <span>{foot[footIndex].overall_league_payed}</span>
                </p>
                <p className="p-stats">
                  Points:<span>{foot[footIndex].overall_league_PTS}</span>
                </p>
                <p className="p-stats">
                  Wins:<span>{foot[footIndex].overall_league_W}</span>
                </p>
                <p className="p-stats">
                  Defaites:<span>{foot[footIndex].overall_league_D}</span>
                </p>
                <p className="p-stats">
                  Nul:<span>{foot[footIndex].overall_league_L}</span>
                </p>
                <p className="p-stats">
                  Buts marqués:<span>{foot[footIndex].overall_league_GF}</span>
                </p>
                <p className="p-stats">
                  Buts encaissés:
                  <span>{foot[footIndex].overall_league_GA}</span>
                </p>
                <p className="p-stats">
                  Classements:
                  <span>{foot[footIndex].overall_league_position}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TeamStats;
