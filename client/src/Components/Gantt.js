import {Chart} from "react-google-charts";
import styled from "styled-components";

const Gantt = () => {

  function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];
  const rows = [
    [
      "Research",
      "Find sources",
      new Date(2015, 0, 4),
      new Date(2015, 0, 20),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      new Date(2015, 0, 9),
      new Date(2015, 10, 9),
      null,
      25,
      null,
    ],
    [
      "Cite",
      "Create bibliography",
      new Date(2015, 0, 7),
      new Date(2015, 10, 7),
      daysToMilliseconds(7),
      20,
      "Research",
    ],
    [
      null,
      "Hand in paper",
      null,
      new Date(2016, 0, 10),
      daysToMilliseconds(1),
      0,
      "Cite,Write",
    ],
    [
      "Outline",
      "Outline paper",
      null,
      new Date(2015, 0, 6),
      daysToMilliseconds(1),
      100,
      "Research",
    ],
  ];

    const data = [columns, ...rows];

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
        width={"100%"}
        height={"400px"}
      />
      </Wrapper>
    );
  };
  export default Gantt;

  const Wrapper = styled.div`
  
  
  `;