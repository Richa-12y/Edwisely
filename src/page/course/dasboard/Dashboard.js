import React from "react";
import { Progress } from "rsuite";
import "./dashboard.css";

const Dashboard = () => {
  const javaScriptdata = JSON.parse(localStorage.getItem("javascript"));
  const java = JSON.parse(localStorage.getItem("java"));
  const python = JSON.parse(localStorage.getItem("python"));
  const datastructuresandalgorithms = JSON.parse(
    localStorage.getItem("datastructuresandalgorithms")
  );
  const cPlus = JSON.parse(localStorage.getItem("c++"));

  const style = {
    width: 100,
    display: "inline-block",
    marginRight: 100,
  };
  const style1 = {
    width: 300,
    display: "inline-block",
    marginRight: 10,
  };
  console.log(java);
  const marksData = [
    {
      name: "javascript",
      marks: (
        (javaScriptdata?.totalMarksObtain / javaScriptdata?.totalMark) *
        100
      ).toFixed(2),
    },
    {
      name: "java",
      marks: ((java?.totalMarksObtain / java?.totalMark) * 100).toFixed(2),
    },
    {
      name: "python",
      marks: ((python?.totalMarksObtain / python?.totalMark) * 100).toFixed(2),
    },
    {
      name: "datastructuresandalgorithms",
      marks: (
        (datastructuresandalgorithms?.totalMarksObtain /
          datastructuresandalgorithms?.totalMark) *
        100
      ).toFixed(2),
    },
    {
      name: "c++",
      marks: ((cPlus?.totalMarksObtain / cPlus?.totalMark) * 100).toFixed(2),
    },
  ];
  console.log(marksData);
  let totalPersentage = 100 * marksData?.length;
  let result = marksData?.map((el) => {
    return +el?.marks;
  });
  console.log(result);
  let totalOpetainePerstange = result?.reduce((acc, val) => acc + val);
  console.log(totalOpetainePerstange);
  return (
    <div className="dashboard-container">
      <div>indivial data</div>
      <div className="dashboard-container_inside">
        {marksData.map((el, i) => {
          return (
            <section>
              <div key={i} style={style}>
                <h6>{el.name}</h6>
                {el.marks === "NaN" ? (
                  <h6>Test is not Done</h6>
                ) : (
                  <Progress.Circle
                    percent={el.marks}
                    strokeColor={el.marks < 40 ? "red" : "green"}
                  />
                )}
              </div>
            </section>
          );
        })}
      </div>
      <div>
        {typeof totalOpetainePerstange === "object" ? (
          <h6>All Test is Not Done.</h6>
        ) : (
          <div style={style1}>
            <div>overall</div>
            <Progress.Line
              percent={(
                (totalOpetainePerstange / totalPersentage) *
                100
              ).toFixed(2)}
              strokeColor={
                (totalOpetainePerstange / totalPersentage) * 100 < 40
                  ? "red"
                  : "green"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
