import { useEffect, useState } from "react";
import "./TopScorer.css";
import leaguelogo from "../../public/LiguaLogo.png";

interface TopScorerProps {
  player_place: number;
  player_name: string;
  player_key: number;
  team_name: string;
  team_key: number;
  goals?: number;
  assists?: number;
  penalty_goals?: number;
}

const apiKey = import.meta.env.VITE_CLIENT_API_KEY_FOOT;

export default function TopScorer() {
  const [scorers, setScorers] = useState<TopScorerProps[]>([]);

  useEffect(() => {
    const getTopScorer = () => {
      fetch(
        `https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=${apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setScorers(data);
        });
    };
    getTopScorer();
  }, []);
  return (
    <section className="WrappingTab">
      <div className="tabTittle">
        <div>
          <img className="LeagueLogo" src={leaguelogo} alt="logo du tableau" />
        </div>
        <div className="wrapTittles">
          <p className="tabMainTittle">Laliga</p>
          <p className="tabSubTittle">Spain</p>
        </div>
      </div>

      <div className="wrapOptions">
        <span className="menuCard1">Rank</span>
        <span className="menuCard2">Player name</span>
        <span className="menuCard2">Team name</span>
        <span className="menuCard">Goals</span>
        <span className="menuCard">Penalty</span>
        <span className="menuCard3">Assists</span>
      </div>

      <div className="topscorerwrap">
        {scorers.map((players) => (
          <div className="wrapContent" key={players.player_key}>
            <span className="menuContent">{players.player_place}</span>
            <span className="menuContent2">{players.player_name}</span>
            <span className="menuContent2">{players.team_name}</span>
            <span className="menuContent">{players.goals}</span>
            <span className="menuContent">{players.penalty_goals}</span>
            <span className="menuContent">
              {players.assists ? players.assists : 0}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
