import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Button,
  ButtonGroup,
  Panel,
  Placeholder,
  Row,
  Col,
} from "rsuite";

const CourseModals = ({ handleClose, open }) => {
  const courseList = [
    {
      couseName: "javaScript",
      routeTo: "/course/javascript",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRei8qVS92hdULrGr9sWeRHhT537XeMq8MnJo5Enk&s",
      desc: " JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced. Start learning ...",
    },
    {
      couseName: "java",
      routeTo: "/course/java",
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1",
      desc: "java is a general-purpose programming language that is widely used in developing mobile applications, desktop applications, web applications, and games.This tutorial will teach you java from basic to advanced. Start learning ...",
    },
    {
      couseName: "python",
      routeTo: "/course/python",
      img: "https://img.freepik.com/free-icon/snakes_318-368381.jpg",
      desc: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.This tutorial will teach you java from basic to advanced. Start learning ...",
    },
    {
      couseName: "Data Structures and Algorithms",
      routeTo: "/course/datastructuresandalgorithms",
      img: "https://static.studytonight.com/css/resource.v3/icons/subject/logo-ds.svg",
      desc: "The Digital Signature Algorithm (DSA) is a public-key cryptosystem and Federal Information Processing Standard for digital signatures, based on the mathematical concept of modular exponentiation and the discrete logarithm problem.This tutorial will teach you java from basic to advanced. Start learning ...",
    },
    {
      couseName: "C++",
      routeTo: "/course/c++",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLEX0h6Mjfm0MnGZd576UKgR4LQ2F5BW42g&usqp=CAU",
      desc: "C++ is an object-oriented programming (OOP) language.C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.This tutorial will teach you java from basic to advanced. Start learning ...",
    },
  ];
  const naviagete = useNavigate();
  const goTo = (path) => {
    naviagete(path);
    handleClose();
  };
  return (
    <div>
      <Modal size={"md"} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ fontWeight: 700 }}>
            Avaliable Courses
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {courseList.map((el, i) => {
            return (
              <Panel
                style={{ fontWeight: 600 }}
                bordered
                header={el.couseName}
                onClick={() => goTo(el.routeTo)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      src={el.img}
                      alt={el.couseName}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div>{el.desc}</div>
                </div>
              </Panel>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose} text="Cancle">
            Cancel
          </Button>
          <Button onClick={handleClose} text="Ok">
            Ok
          </Button> */}
          <ButtonGroup style={{ marginTop: 12 }} justified>
            <Button onClick={handleClose} color="red" appearance="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="green" appearance="primary">
              Ok
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseModals;
