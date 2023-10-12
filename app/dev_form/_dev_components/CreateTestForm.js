"use client";
import React, { useEffect, useState } from "react";
import styles from "./devComponents.module.css";

const CreateTestForm = () => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [testName, setTestName] = useState("");
  const [marks, setMarks] = useState(0);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const getCurrentQuestions = async () => {
      const res = await fetch("http://localhost:3001/get_data/get_questions");
      const result = await res.json();
      setCurrentQuestions(result);
    };

    if (!fetching) {
      setFetching(true);
      getCurrentQuestions();
    }
    return setFetching(false);
  }, []);
  return (
    <>
      <h1>Create test:</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const addTest = async () => {
            try {
              const res = await fetch(
                "http://localhost:3001/test_creation/create_test",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    testName: testName,
                    marks: marks,
                    questions: selectedQuestions,
                  }),
                }
              );
              const result = await res.json();
              alert(result.message);
            } catch (err) {
              alert.log(err.message);
            }
          };
          addTest();
        }}
      >
        <div className={styles.formItem}>
          <label>Test name: </label>
          <input
            className={styles.textIn}
            type="text"
            placeholder="test name"
            value={testName}
            required
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>
        <div className={styles.formItem}>
          <label>Total marks: </label>
          <input
            className={styles.textIn}
            type="number"
            placeholder="total marks"
            value={marks}
            required
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>
        <p>Select questions for test: </p>
        {currentQuestions.map((question, index) => {
          return (
            <div key={index} className={styles.checkboxOption}>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedQuestions([...selectedQuestions, question._id]);
                  } else {
                    setSelectedQuestions((prev) => [
                      ...prev.splice(
                        selectedQuestions.indexOf(question._id),
                        1
                      ),
                    ]);
                  }
                }}
              />
              <label>{question.questionText}</label>
            </div>
          );
        })}
        <button type="submit">Add test</button>
      </form>
    </>
  );
};

export default CreateTestForm;
