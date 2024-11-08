import "./SeasonTab.css";
import { useEffect, useState } from "react";

interface FullJsonFromAPI
{
    result:{
        seasons:{
            groups:{
                table : table_Data[];
            }[];
        }[];
    }[];
}

interface table_Data
{
    draw : number;
    goals_conceded : number;
    goals_scored : number;
    loss : number;
    note : string; // ex champions league
    points : number;
    position : number;
    team:{
        id : number; 
        name: string;
    }
    win : number;

}

function   SeasonTab()
{
    const   ApiKey = import.meta.env.VITE_API_KEY;
    const   [SeasonTab, setSeasonTab] = useState<table_Data[]>([]);

    useEffect(() => {

        fetch("https://soccer-football-info.p.rapidapi.com/championships/view/?i=d621ea12d91a8473&l=en_US", 
        { 
        headers: {
            'x-rapidapi-key': `${ApiKey}`,
            'x-rapidapi-host': 'soccer-football-info.p.rapidapi.com'
        }})
        .then((response) =>{

            if(!response.ok)
                throw new Error('Error fetching data from API');

            return(response.json());
        })
        .then((data : FullJsonFromAPI) => {
            setSeasonTab(data.result[0].seasons[4].groups[0].table);
            console.log(SeasonTab);
        })
    
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

                        <span className="menuContent">{eachTeam.position}</span>
                        <span className="menuContent2">{eachTeam.team.name}</span>
                        <span className="menuContent">{eachTeam.win}</span>
                        <span className="menuContent">{eachTeam.draw}</span>
                        <span className="menuContent">{eachTeam.loss}</span>
                        <span className="menuContent">{eachTeam.points}</span>
                    </div>

                </div>

            ))}
            

        </section>
    );
}

export default SeasonTab;