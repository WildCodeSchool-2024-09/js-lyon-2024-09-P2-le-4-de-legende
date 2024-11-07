import "./SeasonTab.css" 
import { useEffect, useState } from "react";


//https://v3.football.api-sports.io/fixtures?season=2023&league=39

interface FullJsonFromAPI{

    result:{
        seasons:{
            groups:{
                table : table_Data[];
            }[];
        }[];
    }[];

}

interface table_Data {

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
    /*const   ApiKey = import.meta.env.VITE_API_KEY;
    const   [SeasonTab, setSeasonTab] = useState<table_Data>([]);

    useEffect(() => {

        fetch( "https://soccer-football-info.p.rapidapi.com/championships/view/?i=d621ea12d91a8473&l=en_US", 
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
        .then((data) => {
            setSeasonTab(data.result[0].seasons[4].groups[0].table);
            console.log(SeasonTab);
        })
    
    }, []); */

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

                <span className="menuCard1">Team</span>
                <span className="menuCard2">position</span>
                <span className="menuCard3">win</span>
                <span className="menuCard4">draw</span>
                <span className="menuCard5">loss</span>

            </div>


            {[...SeasonTab].map((eachTeam , index)=> (

                <div key={index} className="wrapContent">

                    <span className="menuContent1">{eachTeam.team.name}</span>
                    <span className="menuContent2">{index}</span>
                    <span className="menuContent3">{eachTeam.win}</span>
                    <span className="menuContent4">{eachTeam.draw}</span>
                    <span className="menuContent5">{eachTeam.loss}</span>

                </div>
            ))}
            

        </section>
    );
}

export default SeasonTab;