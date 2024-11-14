import "./SeasonTab.css";
import { useEffect, useState } from "react";

interface TableData {

    table_data: Data[];

}
    
interface Data {

    overall_league_position : string;
    overall_league_PTS : string; 
    team_name : string; 
    team_badge : string; 
    overall_league_D : string; // draw 
    overall_league_W : string; 
    overall_league_L : string; // defeat

} 


function   SeasonTab()
{
    const   ApiKey = import.meta.env.VITE_CLIENT_API_KEY;
    const   [SeasonTab, setSeasonTab] = useState<TableData[]>([]);

    useEffect(() => {

        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${ApiKey}`)
        .then((response)=> {
            if(!response.ok)
            {
                throw new Error('Error fetching data from API');
            }
            return(response.json());
        })
        .then((data) => {
            setSeasonTab(data);
        })
        .catch((error) => {
            console.error(error);
        });

    }, []); 

    function    displayQualifacation(index :number) 
    {
        if(index === 0)
            return (<span className="dislayQualiciation">Champions League</span>);
                else if(index === 4)
                    return (<span className="dislayQualiciation">Conference League Qualification</span>);
                        else if(index === 17)
                            return(<span className="dislayQualiciation">Relegation</span>);
    }

    return (
        <section className="WrappingTab">
         
            <div className="tabTittle">

                <div>
                    <img  className="LeagueLogo" src="LiguaLogo.png" alt="logo_league" />
                </div>

                <div className="wrapTittles">
                    <p className="tabLMainTittle">Ligua</p>
                    <p className="tabLSubTittle">Spain</p>
                </div>
              
            </div>
             
            <div className="wrapOptions">

                <span className="menuCard">Position</span>
                <span className="menuCard2">Team</span>
                <span className="menuCard">W</span>
                <span className="menuCard">D</span>
                <span className="menuCard">L</span>
                <span className="menuCard">Pts</span> 

            </div>


            {SeasonTab.map((eachTeam, index)=> (

                <div key={index}>
                    {displayQualifacation(index)}
                    < div className="wrapContent">

                        <span className="menuContent">{eachTeam.overall_league_position}</span>
                        <span className="menuContent2"> <img className="TeamLogoInMenu" src={eachTeam.team_badge} alt="team logo" />{eachTeam.team_name}</span>
                        <span className="menuContent">{eachTeam.overall_league_W}</span>
                        <span className="menuContent">{eachTeam.overall_league_D}</span>
                        <span className="menuContent">{eachTeam.overall_league_L}</span>
                        <span className="menuContent">{eachTeam.overall_league_PTS}</span>
                    </div>

                </div>

            ))}
            
        </section>
    );
}

export default SeasonTab;