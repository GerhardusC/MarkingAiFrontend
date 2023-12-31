"use client";
import React, { useState, useEffect } from "react";
import styles from "./devComponents.module.css";

const CreateAttemptForm = () => {
  const [questions, setQuestions] = useState([]);
  const [students, setStudents] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState("");
  const [serverResponse, setServerResponse] = useState({});

  const getQuestions = async () => {
    const res = await fetch("http://localhost:3001/get_data/get_questions");
    const questions = await res.json();
    setQuestions(questions);
    const res2 = await fetch("http://localhost:3001/get_data/get_students");
    const students = await res2.json();
    setStudents(students);
    const res3 = await fetch("http://localhost:3001/get_data/get_tests");
    const tests = await res3.json();
    setTests(tests);
  };

  const attemptQuestion = async () => {
    setFetching(true);
    const res = await fetch("http://localhost:3001/grading/mark_question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        test: selectedTest,
        studentAnswer: studentAnswer,
        student: selectedStudent,
        question: selectedQuestion,
      }),
    });
    const response = await res.json();
    setFetching(false);
    alert("Attempt submitted");
    setServerResponse(response);
  };

  useEffect(() => {
    if (!fetching) {
      setFetching(true);
      getQuestions();
    }
    return setFetching(false);
  }, []);

  return (
    <>
      <h1>Create attempt:</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          attemptQuestion();
        }}
      >
        <div className={styles.formItem}>
          <label>Select question:</label>
          <select
            onChange={(e) => {
              setSelectedQuestion(e.target.value);
            }}
          >
            <option value="">[Select question]</option>
            {questions.map((question, index) => {
              return (
                <option value={question._id} key={index}>
                  {question.questionText}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formItem}>
          <label>Select student: </label>
          <select
            onChange={(e) => {
              setSelectedStudent(e.target.value);
            }}
          >
            <option value="">[Select student]</option>
            {students.map((student, index) => {
              return (
                <option value={student._id} key={index}>
                  {student.studentName}: {student.studentId}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formItem}>
          <label>Select test: </label>
          <select
            onChange={(e) => {
              setSelectedTest(e.target.value);
            }}
          >
            <option value="">[Select test]</option>
            {tests.map((test, index) => {
              return (
                <option value={test._id} key={index}>
                  {test.testName}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.formItem}>
          <label>Student answer: </label>
          <textarea
            placeholder="student answer text"
            value={studentAnswer}
            onChange={(e) => {
              setStudentAnswer(e.target.value);
            }}
          />
        </div>
        <button type="submit">Create attempt</button>
      </form>
      {fetching && <div>Loading...</div>}
    </>
  );
};

export default CreateAttemptForm;
