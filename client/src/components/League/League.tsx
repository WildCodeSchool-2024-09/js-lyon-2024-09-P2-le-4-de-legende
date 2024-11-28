import { useState, useEffect } from "react";
import './League.css'

interface LeagueType {
    league_logo: string;
    league_name: string;
    league_season: string;
}

function League()
{
    const [champ , setChamp] = useState<LeagueType[]>([]);
    useEffect(() => {
        fetch("https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=302&APIkey=aec4f0534d3e6136def81d6437956ad6f296953447f6b6db94191510a064aa0e")
        .then((response) =>
        {
            if(!response.ok)
            {
                throw new Error( "impossible fetch api");
            }
            return(response.json());
        })
        .then((data) => {
            setChamp(data);
        })
        .catch((error)=>{
            console.error(error);
        });

    }, []);
    return (
        <section className="LeagueComponent">

            <div className="WrapComponentLeague">
                <h1 className="TitleLeagueComponent">VIVEZ LE MEILLEUR <br /> DE LA LIGA</h1>
                <p className="CommentLeagueComponent">Suivez vos équipes préférés, le classement, les statistiques et bien plus encore ...</p>
            </div>
            
            <div className="wrapLeagueCard">

                <div className="LeagueCard">


                    <div className="LeagueElements">
                        {champ.length === 0  ? <p>loading </p> : <img id="logo" src={champ[0].league_logo} alt="img" />}

                        <div className="wrapDescription">
                            {champ.length === 0  ? <p>loading </p> : <p className="description">{champ[0].league_name}</p>}
                            {champ.length === 0 ? <p>loading </p> : <p className="description">{champ[0].league_season}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default League;
