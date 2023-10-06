"use client";
import React, { useEffect, useState } from "react";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(selectedQuestions);
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
            console.log(result);
          } catch (err) {
            console.log(err);
          }
        };
        addTest();
      }}
    >
      <input
        type="text"
        placeholder="test name"
        value={testName}
        required
        onChange={(e) => setTestName(e.target.value)}
      />
      <input
        type="number"
        placeholder="test name"
        value={marks}
        required
        onChange={(e) => setMarks(e.target.value)}
      />

      {currentQuestions.map((question, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  console.log("Checked...");
                  setSelectedQuestions([...selectedQuestions, question._id]);
                } else {
                  setSelectedQuestions((prev) => [
                    ...prev.splice(selectedQuestions.indexOf(question._id), 1),
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
  );
};

export default CreateTestForm;
