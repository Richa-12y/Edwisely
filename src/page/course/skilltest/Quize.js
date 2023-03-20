import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, Placeholder, Progress } from "rsuite";
import { Loader } from "rsuite";
import "./quize.css";

const Quize = () => {
  const [questionList, setQestionList] = useState([]);
  const [ans, setAns] = useState("");
  const params = useParams();

  console.log(params);
  //   console.log(params.courseName);
  //   console.log(data);

  let courseName = params.courseName;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [selectedButton, setSelectedButton] = useState(undefined);
  const [marks, setMarks] = useState({});
  const naviagete = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    naviagete("/");
  };

  const style = {
    width: 120,
    display: "inline-block",
    marginRight: 10,
  };
  useEffect(() => {
    const featchData = async () => {
      try {
        const data = await axios.get("/data.json");
        // console.log(data.data[courseName].questions);
        setQestionList(data.data[courseName].questions);
      } catch (error) {}
    };
    featchData();
  }, [courseName]);

  const goToNextquestion = () => {
    if (selectedButton === undefined) {
      return;
    }

    if (questionList[questionNumber]?.answer == ans) {
      setCorrectAnsCount((p) => p + 1);
    }

    setQuestionNumber((p) => p + 1);
    setSelectedButton(undefined);
    if (questionNumber === questionList.length - 1) {
      if (questionList[questionNumber]?.answer == ans) {
        submitTest(true);
      } else {
        submitTest(false);
      }
    }
  };
  const submitTest = (value) => {
    console.log("submit");
    if (selectedButton === undefined) {
      return;
    }

    let count = correctAnsCount;
    if (value) {
      count = count + 1;
    }

    console.log(correctAnsCount);
    localStorage.setItem(
      `${courseName}`,
      JSON.stringify({
        totalMarksObtain: count * 4,
        totalMark: questionList.length * 4,
      })
    );
    setMarks({
      totalMarksObtain: count * 4,
      totalMark: questionList.length * 4,
    });
    handleOpen();
  };
  const selectedAns = (value, index) => {
    setAns(value);
    setSelectedButton(index);
  };
  console.log(correctAnsCount);
  console.log(marks);
  return (
    <div className="quize_container">
      {questionList.length === 0 ? (
        <Loader size="lg" content="Loading..." />
      ) : (
        <>
          <Modal open={open} onClose={handleClose}>
            <Modal.Header>
              <Modal.Title>Total marks </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="progress_container">
                <div style={style}>
                  <Progress.Circle
                    percent={(
                      (marks.totalMarksObtain / marks.totalMark) *
                      100
                    ).toFixed(2)}
                    strokeColor={
                      (marks.totalMarksObtain / marks.totalMark) * 100 < 40
                        ? "red"
                        : "green"
                    }
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} appearance="primary">
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
          <div>
            <p>{questionList[questionNumber]?.question}</p>
            <div className="quize_container_option">
              {questionList[questionNumber]?.choices.map((el, i) => {
                return (
                  <Button
                    color={i === selectedButton ? "green" : "yellow"}
                    appearance="primary"
                    block
                    onClick={() => selectedAns(el, i)}
                    key={i}
                  >
                    {el}
                  </Button>
                );
              })}
            </div>

            {questionList.length !== 0 && (
              <Button block appearance="primary" onClick={goToNextquestion}>
                {questionNumber === questionList.length - 1 ? "Submit" : "Next"}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quize;
