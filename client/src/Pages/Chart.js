import styled from "styled-components";
import Gantt from "../Components/Gantt.js";
import GanttInputs from "../Components/GanttInputs.js";
import {useEffect, useState} from "react";


const Chart = () => {

    const [rows, setRows] = useState(null);

    useEffect(()=>{
        
          fetchGanttEvents();
        },[]);
    
        const fetchGanttEvents = async () => {

          try {
                const data = await fetch('/api/ganttEvents');
                const json = await data.json();
            
                if(json.status === 200){
                setRows(json.data);
                }  
        }
          catch (error){
            console.log("Error Message Caught", error);
          }
        }

      

       

          
    return (

        <Wrapper>
            {rows  &&
            <>
            <Title>Wine Making Timeline </Title>
            <Gantt rows={rows}/>
            <GanttInputs/>
            </>
            }


        </Wrapper>

    )


}

const Wrapper = styled.div`
 min-height:100vh;
min-width:100vw; 
display:flex;
justify-content:space-around;
background-color: var(--color-Wine); 
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
color: var(--color-offWhite); 
font-family: "Righteous"
`

export default Chart;