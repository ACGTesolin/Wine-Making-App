
import {Chart} from "react-google-charts";
import styled from "styled-components";

const Gantt = ({rows}) => {

  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

//isolate array of ganttEvents from object Ids given in MongoDB

  const ganttEventIsolation = () => {

    const formattedRows = rows.map(row => row.ganttEvent);     

      return formattedRows;
    
  };

  
// format the dates for recognition by google charts

  const rowFormatting = (info) => {

    const newRows = info.map(r => [r[0], r[1], (new Date(r[2])), (new Date(r[3])), null, null, null]);
    
      return newRows
};
      const rowData = ganttEventIsolation();
      let newRowData = rowFormatting(rowData);

    const data = [columns, ...newRowData];

    const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

    return (
      <Wrapper>
      <Chart
        chartType="Gantt"
        data={data}
        options={options}
        width={"50vw"}
        height={"100%"}
      />
      </Wrapper>
    );
  };
  export default Gantt;

  const Wrapper = styled.div`
  
  
  `;