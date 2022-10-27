import styled from "styled-components";
import Gantt from "../Components/Gantt.js";
import GanttInputs from "../Components/GanttInputs.js";


const Chart = () => {

    return (

        <Wrapper>
            <Title>Wine Making Timeline </Title>
            <Gantt/>
            <GanttInputs/>


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