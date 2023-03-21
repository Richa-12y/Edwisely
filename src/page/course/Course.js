import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

import "./course.css";
// import data from "../../assest/data/data.json";
import axios from "axios";
import { Panel, Placeholder, Button } from "rsuite";

const Course = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 1023px)");
  console.log(isMobile);
  // const isMobile = useMediaQuery("(max-width: 1023px)");
  const [courseListData, setCourseListData] = useState([]);
  const [urlLink, setUrlLink] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  const params = useParams();
  console.log(params);
  //   console.log(params.courseName);
  //   console.log(data);
  const location = useLocation();

  let courseName = params.courseName;
  useEffect(() => {
    const featchData = async () => {
      try {
        const data = await axios.get("/data.json");
        // console.log(data.data[courseName]);
        console.log(data.data);
        setCourseListData(data.data[courseName].concepts);
      } catch (error) {}
    };
    featchData();
    let currentUrl = location.pathname.split("#");

    console.log(location.pathname);
    if (Array.isArray(currentUrl)) {
      setUrlLink(currentUrl[0]);
    } else {
      setUrlLink(currentUrl);
    }
  }, [courseName, location.pathname]);
  console.log(urlLink);
  console.log(courseListData);
  const convertCodeIntoHtml = (e) => {
    let result = e.split("\n");
    console.log(result);
    return result;
  };
  const naviagte = useNavigate();
  const goTo = () => {
    naviagte(`${urlLink}/skilltest`);
  };
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };
  //  <a
  //                           href={parseInt(el.id) > 2 ? "#2" : `#${el?.id}`}
  //                           style={{ color: "white", textDecoration: "none" }}
  //                         ></a>

  const getShorterName = (value) => {
    let result = "";
    if (value.length > 20) {
      result = value.substring(0, 15) + "...";
    } else {
      result = value;
    }

    return result;
  };
  return (
    <div className="main_course_container">
      {!isMobile && (
        <div className="cours_navigation">
          {courseListData.map((el, i) => {
            const completed = i <= currentQuestionIndex;
            const iconClass = completed
              ? "icon_course completed"
              : "icon_course";
            return (
              <section key={i}>
                <div className="main_course_icon_container">
                  <div
                    className={iconClass}
                    onClick={() => handleQuestionClick(i)}
                  >
                    {i + 1}
                  </div>
                  {/* <div className={iconClass}>{i + 1}</div> */}
                  <div
                    className={
                      courseListData.length - 1 === i
                        ? "course_line_last"
                        : "course_line"
                    }
                  ></div>
                </div>
                <div className="course_text_container">
                  <a
                    style={{ color: "gray", textDecoration: "none" }}
                    href={`#${i}`}
                  >
                    {getShorterName(el.name)}
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      )}

      <div className="learning_container">
        <div>
          {courseListData.map((el, i) => {
            return (
              <Panel
                style={{ fontWeight: "700", color: "black" }}
                bordered
                header={el.name}
                key={i}
                id={i}
                className="content-scroll"
              >
                <p alt="prg">{el.description}</p>
                <section className="code_container">
                  <blockquote>
                    {convertCodeIntoHtml(el.example).map((code, index) => {
                      return (
                        <div
                          key={code + index}
                          dangerouslySetInnerHTML={{
                            __html: code
                              .replace(
                                "let",
                                '<span style="color:red">let</span>'
                              )
                              .replace(
                                "const",
                                '<span style="color:red">const</span>'
                              )
                              .replace(
                                "var",
                                '<span style="color:red">var</span>'
                              )
                              .replace(
                                "(",
                                '<span style="color:Tomato">(</span>'
                              )
                              .replace(
                                ")",
                                '<span style="color:Tomato">)</span>'
                              )
                              .replace("{", '<span style="color:blue">{</span>')
                              .replace("}", '<span style="color:blue">}</span>')
                              .replace(
                                "switch",
                                '<span style="color:orange">switch</span>'
                              )
                              .replace(
                                "break",
                                '<span style="color:cyan">break</span>'
                              )
                              .replace(
                                "default",
                                '<span style="color:purple">default</span>'
                              )
                              .replace(
                                "false",
                                '<span style="color:gray">false</span>'
                              )
                              .replace(
                                "true",
                                '<span style="color:green">true</span>'
                              )
                              .replace(
                                "case",
                                '<span style="color:slateblue">case</span>'
                              )
                              .replace("[", '<span style="color:blue">[</span>')
                              .replace("]", '<span style="color:blue">]</span>')
                              .replace(
                                "do",
                                '<span style="color:cyan">do</span>'
                              )
                              .replace(
                                "null",
                                '<span style="color:blue">null</span>'
                              )
                              .replace(
                                "for",
                                '<span style="color:blue">for</span>'
                              )
                              .replace(
                                "while",
                                '<span style="color:blue">while</span>'
                              )
                              .replace(
                                "else",
                                '<span style="color:green">else</span>'
                              )
                              .replace(
                                "console.log",
                                '<span style="color:Tomato">console.log</span>'
                              )
                              .replace(
                                "PI",
                                '<span style="color:blue">PI</span>'
                              )
                              .replace(";", '<span style="color:gray">;</span>')
                              .replace(
                                "// Output:",
                                '<span style="color:gray">// Output:</span>'
                              )
                              .replace(
                                "int",
                                '<span style="color:yellow">int</span>'
                              )
                              .replace(
                                "uble",
                                '<span style="color:cyan">uble</span>'
                              )
                              .replace(
                                "char",
                                '<span style="color:blue">char</span>'
                              )
                              .replace(
                                "boolean",
                                '<span style="color:teal">boolean</span>'
                              )
                              .replace(
                                "String",
                                '<span style="color:blue">String</span>'
                              )
                              .replace(
                                "System.out",
                                '<span style="color:yellow">System.out</span>'
                              )
                              .replace(
                                "pr",
                                '<span style="color:yellow">pr</span>'
                              )
                              .replace(
                                "In",
                                '<span style="color:yellow">In</span>'
                              )
                              .replace(
                                "std",
                                '<span style="color:yellow">std</span>'
                              ),
                          }}
                        />
                      );
                    })}
                  </blockquote>
                </section>
              </Panel>
            );
          })}
        </div>
        <div className="skill_test_button_container">
          <Button
            appearance="primary"
            size="lg"
            style={{ fontWeight: 700 }}
            onClick={goTo}
          >
            Skill Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Course;
//            <div className="course_line_last"></div>
