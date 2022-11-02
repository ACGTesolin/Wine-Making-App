import styled from "styled-components";
import {useState} from "react";


const GanttInputs = ()=> {

    const [dependencyName, setDependencyName] = useState();
    const [taskName, setTaskName] = useState();
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();
    const [scale, setScale] = useState();
    const [percentage, setPercentage] = useState();
    const [dependency, setDependency] = useState();

    const handleDependencyNameChange = (value1) =>{
        
        if(value1.length > 0){
            setDependencyName(1)
        }
        return null;
     };

     const handleTaskNameChange = (value2) =>{

        if(value2.length > 0){
            setTaskName(value2)
        }
        return null;
    };
    
    const handleStartChange = (value3) =>{
        
        if(value3.length > 0){
            let startDate = new Date(value3)
                setStart(startDate)
        }
        return null;
    };
    
    const handleFinishChange = (value4) =>{

        if(value4.length > 0){
            let finishDate = new Date(value4)
                setFinish(finishDate)
        }
        return null;
    };

    const handlePercentageChange = (value5) =>{

        if(value5 > 0){
            setPercentage(value5)
        }
        return null;
    };

    const handleDependencyChange = (value6) =>{

        if(value6 > 0){
            setDependency(value6)
        }
        return null;
    };

    let ganttArray = [];
 
   ganttArray.push(dependencyName, taskName, start, finish, scale, percentage, dependency);
console.log(ganttArray)

    const handleSubmit = ((e) =>{

        e.preventDefault();

       
        fetch("/api/add-gantt-event", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
            },
            body: JSON.stringify(ganttArray)
        })  
        .then((response) => response.json())

        // .then((data) => {
        // })

        .catch((error) =>{
            
        })
});

    

    return (

        <Wrapper>
            <form onSubmit={handleSubmit}>
                <InputWrapper>
                    <DependencyName
                    type="text"
                    id = "dependencyName"
                    name="dependencyName"
                    placeholder="Dependency Name"
                    onChange={(ev)=>handleDependencyNameChange(ev.target.value)}
                    ></DependencyName>

                    <TaskName
                    type="text"
                    id="taskName"
                    name="taskName"
                    placeholder="Task Name"
                    onChange={(ev)=>handleTaskNameChange(ev.target.value)}
                    ></TaskName>

                    <Start
                    type="date"
                    id="start"
                    name="start"
                    placeholder="Start Date"
                    onChange={(ev)=>handleStartChange(ev.target.value)}
                    ></Start>

                    <Finish
                    type="date"
                    id="finish"
                    name="finish"
                    placeholder="Finish Date"
                    onChange={(ev)=>handleFinishChange(ev.target.value)}
                    ></Finish>

                    <Scale
                    type="number"
                    id="scale"
                    placeholder="Scale"
                    ></Scale>

                    <Percentage
                    type="number"
                    id="percentage"
                    name="percentage"
                    placeholder="Percentage"
                    onChange={(ev)=>handlePercentageChange(ev.target.value)}
                    ></Percentage>

                    <Dependency
                    type="text"
                    id="dependency"
                    name="dependency"
                    placeholder="Dependency"
                    onChange={(ev)=>handleDependencyChange(ev.target.value)}                 
                    ></Dependency>

                    <Submit type="submit" >Submit</Submit>
                </InputWrapper>
            </form>
        </Wrapper>


    )
}

export default GanttInputs;

const Wrapper = styled.div``;

 const DependencyName = styled.input``;

 const TaskName = styled.input``;

 const Start = styled.input``;

 const Finish = styled.input``;

 const Scale = styled.input``;  

 const Percentage = styled.input``; 

 const Dependency = styled.input``; 

 const InputWrapper = styled.div``;

 const Submit = styled.button``; 