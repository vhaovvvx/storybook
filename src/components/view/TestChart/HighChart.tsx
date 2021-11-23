import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./HighChart.scss";
import { action, actions } from "@storybook/addon-actions";
import { getRandomNum, MONTHS } from "./TestChartJs2";
import ButtonGroup2 from "../Button/ButtonGroup/ButtonGroup2";
import RadioCheck from "../Button/Radio/RadioCheck";

interface PHighChart {
  title?: string;
  type?: string;
}

let dataObjects = [
  {
    title: "2021",
    label: "Datasets 1",
    data: [
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
    ],
  },
  {
    title: "2020",
    label: "Datasets 2",
    data: [
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
    ],
  },
  {
    title: "2019",
    label: "Datasets 3",
    data: [
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
      getRandomNum(),
    ],
  },
];

let titleMonthly = [
  {
    title: "Monthly",
  },
  {
    title: "Yearly",
  },
];

type M = {
  [name2: string]: unknown;
  years: boolean;
  month: boolean;
};

const HighChartComponent = ({ title, type, ...props }: PHighChart) => {
  const initialObj: M = {
    years: false,
    month: false,
  };

  const [titleDropdownMonth, setTitleDropdownMonth] = React.useState("Monthly");
  const [defaultOpen, setDefaultOpen] = React.useState(initialObj);
  const [dataDefault, setDataDefault] = React.useState({
    label: dataObjects[0].label,
    data: dataObjects[0].data,
    title: dataObjects[0].title,
    titleMonthly: titleMonthly[0].title,
  });

  const isOpen = (name2: string) => {
    const cloneObj = {
      ...defaultOpen,

      [name2]: !defaultOpen[name2],
    };
    setDefaultOpen(cloneObj);
    // action("openDropdown")(cloneObj);
  };

  const onChangeFunc = (value: number, name: string) => {
    let cloneObj = { ...dataDefault };

    if (name == "month") {
      cloneObj.titleMonthly = titleMonthly[value].title;
    } else {
      cloneObj.label = dataObjects[value].label;
      cloneObj.data = dataObjects[value].data;
      cloneObj.title = dataObjects[value].title;
    }

    const cloneStateObj = { ...defaultOpen, [name]: false };
    setDefaultOpen(cloneStateObj);
    setDataDefault(cloneObj);
  };
  const chartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
  const options: Highcharts.Options = {
    title: {
      text: "My chart",
      align: "left",
      x: 50,
    },
    series: [
      {
        borderColor: "transparent",
        name: "labels1",
        type: "areaspline",
        fillColor: "transparent",
        data: dataDefault.data,
        events: {
          mouseOver: function () {},
        },
        lineWidth: 5,
        cursor: "pointer",
      },
      {
        name: "labels2",
        fillColor: "transparent",
        type: "areaspline",
        data: dataDefault.data,

        events: {
          mouseOver: function () {},
        },
        lineWidth: 8,
        cursor: "pointer",
      },
      {
        name: "labels3",
        type: "areaspline",
        fillColor: "transparent",
        data: dataDefault.data,
        events: {
          mouseOver: function () {},
        },
        lineWidth: 8,
        cursor: "pointer",
      },
      {
        name: "Temperature",
        type: "areaspline",
        fillColor: "transparent",
        data: [
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
          getRandomNum(),
        ],
        lineWidth: 8,
        cursor: "pointer",
      },
    ],
    legend: {
      align: "left",
      verticalAlign: "bottom",
      padding: 20,
      x: 90,
      symbolRadius: 5,
      symbolWidth: 20,
      enabled: true,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },

    credits: {
      enabled: false,
    },
    xAxis: {
      offset: 30,
      categories: MONTHS,
    },
    yAxis: [
      {
        min: 0,
        max: 25,
        tickInterval: 5,
        opposite: true,
        gridLineColor: "transparent",
        offset: 50,
      },
      {
        offset: 50,
        min: 0,
        max: 25,
        gridLineWidth: 0,
        tickInterval: 5,
        title: {
          style: {
            color: "transparent",
          },
        },
      },
    ],
    tooltip: {
      outside: true,
      useHTML: true,
      backgroundColor: "transparent",
      shadow: false,
      borderWidth: 0,
      formatter: function () {
        const points = [] as [];
        const tooltipArray = [
          `<div class='tooltip-custom' style="background-color:${this.color}"> ${this.y}% </div>`,
        ];

        points.forEach(function (point: any, index: number) {
          tooltipArray.push(" <b>" + point.y + +"</b>");
        });

        return tooltipArray;
      },
    },
  };

  const callBackhandle = (chart: any) => {
    //callback handle custom chart
  };

  return (
    <div style={{ position: "relative" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        callback={callBackhandle}
      ></HighchartsReact>
      <ButtonGroup2
        maxWidth="95"
        className="chart-select__years"
        name="years"
        toggleDrop={isOpen}
        title={dataDefault.title}
      >
        <div
          style={{
            position: "absolute",
            width: "285px",
            top: "-150px",
            background: "#fff",
          }}
          className={
            defaultOpen.years
              ? "Drop-down-Btn noHidden"
              : "Drop-down-Btn Hidden"
          }
        >
          <h2 style={{ textAlign: "left" }}>Timeframe</h2>
          <RadioCheck
            valueData="3 Year"
            check={true}
            clickHandle={onChangeFunc}
            valueOptions={0}
            name="years"
          ></RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            valueOptions={1}
            name="years"
            valueData="5 Year"
          >
            5 Year
          </RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            valueOptions={2}
            name="years"
            valueData="10 Year"
          ></RadioCheck>
        </div>
      </ButtonGroup2>
      <ButtonGroup2
        maxWidth="120"
        className="chart-select__month"
        name="month"
        toggleDrop={isOpen}
        title={dataDefault.titleMonthly}
      >
        <div
          style={{
            position: "absolute",
            width: "285px",
            top: "-10px",
            background: "#fff",
          }}
          className={
            defaultOpen.month
              ? "Drop-down-Btn noHidden"
              : "Drop-down-Btn Hidden"
          }
        >
          <h2 style={{ textAlign: "left" }}>Timeframe</h2>
          <RadioCheck
            valueData="Monthly"
            check={true}
            name="month"
            clickHandle={onChangeFunc}
            valueOptions={0}
          ></RadioCheck>
          <RadioCheck
            clickHandle={onChangeFunc}
            name="month"
            valueOptions={1}
            valueData="Yearly"
          ></RadioCheck>
        </div>
      </ButtonGroup2>
    </div>
  );
};

export default HighChartComponent;
