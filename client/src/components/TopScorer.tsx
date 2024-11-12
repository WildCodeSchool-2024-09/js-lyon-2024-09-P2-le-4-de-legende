import { useEffect, useState } from "react";
import "./TopScorer.css";

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

export default function TopScorer() {
  const [scorers, setScorers] = useState<TopScorerProps[]>([]);

  useEffect(() => {
    const getTopScorer = () => {
      fetch(
        "https://apiv3.apifootball.com/?action=get_topscorers&league_id=302&APIkey=aec4f0534d3e6136def81d6437956ad6f296953447f6b6db94191510a064aa0e"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setScorers(data);
        });
    };
    getTopScorer();
  }, [scorers]);
  return (
    <div className="topscorerwrap">
      {scorers.map((players) => (
        <div className="infos" key={players.player_key}>
          <p>{players.player_name}</p>
          <p>{players.team_name}</p>
          <p>Goals : {players.goals}</p>
          <p>Assists : {players.assists}</p>
          <p>Penalty goals : {players.penalty_goals}</p>
        </div>
      ))}
    </div>
  );
}
