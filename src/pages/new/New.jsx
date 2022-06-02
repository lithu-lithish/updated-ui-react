import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Uploadone from "./upload/Uploadone";
import Uploadtwo from "./upload/Uploadtwo";
import del from "../../svg/del.svg";
const New = ({ title }) => {
  const [viewFiles1, setViewFiles1] = useState(false);
  const [viewFiles2, setViewFiles2] = useState(false);
  // const [feeds, setFeeds] = useState({
  //   imageOne: "",
  //   imageTwo: "",
  // });

  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const reset1 = () => {
    console.log("[reset1]");
    setFile1("");
    setViewFiles1(false);
    // ref1.current.value = "";
  };
  const reset2 = () => {
    console.log("[reset2]");
    setFile2("");
    setViewFiles2(false);
  };
  function handleFileOpen() {
    document.getElementById("file").click();
  }
  return (
    <>
      <Formik
        initialValues={{ firstName: "", add: "", email: "", mob: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("*name is required"),
          add: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("*address is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("*email-id is required"),
          mob: Yup.number()
            .max(20, "Must be 20 characters or less")
            .required("*mob number is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="new">
          <Sidebar />
          <div className="newContainer">
            <Navbar />

            <div className="bottom">
              <div className="right">
                <div className="newUser">
                  <p
                    style={{
                      color: "#011627",
                      padding: "1.9% 0% 3% 35%",
                      fontFamily: "Gilroy",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "20px",
                      weigth: "462px",
                      height: "36px",
                    }}
                  >
                    Enter the details to add new user
                  </p>

                  <Form className="newUserForm">
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                        // border: "1px solid #BFC5C9",
                      }}
                    >
                      <label htmlFor="firstName">Name</label>
                      <Field
                        name="firstName"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="firstName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="mob">Mobile Number</label>
                      <Field
                        name="mob"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="mob">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Email address</label>
                      <Field
                        name="email"
                        type="email"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label htmlFor="email">Residential Address</label>
                      <Field
                        name="add"
                        type="text"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      />
                      <ErrorMessage name="add">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Gender</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>
                        <option value="one">Male</option>
                        <option value="two">Female</option>
                        <option value="three">Prefer not to say</option>
                      </select>
                    </div>

                    <div
                      className="newUserItem"
                      style={{
                        width: "525px",
                      }}
                    >
                      <label>Age</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Age
                        </option>
                        <option value="one">opt1</option>
                        <option value="two">opt2</option>
                        <option value="three">opt3</option>
                      </select>
                    </div>
                    <div
                      className="newUserItem1"
                      style={{
                        width: "525px",
                        paddingRight: "40%",
                      }}
                    >
                      <label>Select Package</label>
                      <select
                        className="newUserSelect"
                        defaultValue=""
                        name="active"
                        id="active"
                        style={{
                          borderColor: "#BFC5C9",
                        }}
                      >
                        <option value="" disabled hidden>
                          Select Package
                        </option>
                        <option value="yes">Flat</option>
                        <option value="no">Percent</option>
                      </select>
                    </div>

                    <div>
                      <p
                        style={{
                          paddingBottom: "13%",
                          fontFamily: "Gilroy",
                          fontStyle: "normal",
                          fontWeight: "600",
                          // fontSize: "24.4px",
                          lineHeight: "29px",
                        }}
                      >
                        1. Upload user profile
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          border: "1px solid #808A93",
                          borderRadius: "12px",
                          maxWidth: "200px",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            display: "flex",
                            height: "auto",
                            minHeight: "150px",
                            width: "200px",
                            justifyContent: "center",
                            flexGrow: 1,
                            alignItems: "center",
                          }}
                        >
                          <Uploadone
                            viewFiles={viewFiles1}
                            setViewFiles={setViewFiles1}
                            file={file1}
                            setFile={setFile1}
                          />
                          {/* {viewFiles1 && (
                            <button type="button" onClick={reset1}>
                              reset
                            </button>
                          )} */}
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid #808A93",
                            // borderRadius: "0px 0px 12px 12px",
                            alignItems: "center",
                            // height: "80px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              display: "block",
                              textAlign: "center",
                              padding: "5%",
                            }}
                          >
                            user profile photo
                          </p>
                          <p style={{ display: "block" }}>
                            {viewFiles1 && (
                              <button
                                type="button"
                                onClick={reset1}
                                style={{
                                  border: "none",
                                  backgroundColor: "white",
                                }}
                              >
                                <img src={del} className="buttonDel"></img>
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        paddingLeft: "5%",
                      }}
                    >
                      <p
                        style={{
                          paddingBottom: "13%",
                          fontFamily: "Gilroy",
                          fontStyle: "normal",
                          fontWeight: "600",
                          // fontSize: "24.4px",
                          lineHeight: "29px",
                        }}
                      >
                        2. Upload proof of the user
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          border: "1px solid #808A93",
                          borderRadius: "12px",
                          maxWidth: "200px",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            display: "flex",
                            height: "auto",
                            minHeight: "150px",
                            width: "200px",
                            justifyContent: "center",
                            flexGrow: 1,
                            alignItems: "center",
                          }}
                        >
                          <Uploadtwo
                            viewFiles={viewFiles2}
                            setViewFiles={setViewFiles2}
                            file={file2}
                            setFile={setFile2}
                          />
                        </div>
                        <div
                          style={{
                            borderTop: "1px solid #808A93",
                            // borderRadius: "0px 0px 12px 12px",
                            alignItems: "center",
                            // height: "80px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              padding: "5%",
                            }}
                          >
                            proof document
                          </p>
                          <p style={{ display: "block" }}>
                            {viewFiles2 && (
                              <button
                                type="button"
                                onClick={reset2}
                                style={{
                                  border: "none",
                                  backgroundColor: "white",
                                }}
                              >
                                <img src={del} className="buttonDel"></img>
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="align"
                      style={{
                        backgroundColor: "",
                        paddingLeft: "35%",
                        paddingTop: "15px",
                      }}
                    >
                      <button
                        id="cancelB"
                        className="newUserButton-cancel"
                        style={{
                          color: "black",
                          background: "white",
                          weigth: "298px",
                          height: "50px",

                          borderWidth: "2px",
                        }}
                      >
                        CANCEL
                      </button>

                      <span>
                        <button
                          className="newUserButton"
                          style={{
                            color: "black",
                            background: "#D0FD3E",
                            weigth: "298px",
                            height: "50px",
                          }}
                        >
                          NEXT
                        </button>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default New;
