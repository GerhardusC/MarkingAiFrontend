"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

// Improved form

import React from "react";

const provMarkingForm = () => {
  const [questionId, setQuestionId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [fetching, setFetching] = useState(false);
  const [userFeedback, setUserFeedback] = useState({});

  const handleSubmit = async () => {
    try {
      // Returns attempt id and message
      const res1 = await fetch(
        "http://localhost:3001/question_attempts/create_attempt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: questionId,
            student: studentId,
            studentAnswer: studentAnswer,
          }),
        }
      );
      const attemptCreation = await res1.json();
      if (attemptCreation.message === "Attempt recorded.") {
        const res2 = await fetch(
          `http://localhost:3001/question_attempts/get_attempt?attemptId=${attemptCreation.attemptId}`
        );
        const attempt = await res2.json();
        console.log(attempt);

        const res3 = await fetch(
          "http://localhost:3001/grading/mark_question",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question: attempt.question.questionText,
              questionType: attempt.question.questionType,
              total: attempt.question.totalMarks,
              studentAnswer: attempt.studentAnswer,
              memo: attempt.question.markingGuide,
              modelAnswer: attempt.question.modelAnswer,
            }),
          }
        );
        const marked = await res3.json();
        setUserFeedback(() => marked);
        console.log(marked);
      } else {
        alert(attempt.message);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setFetching(() => false);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFetching(() => true);
          handleSubmit();
        }}
      >
        <div className={styles.inputContainer}>
          <label>Question ID:</label>
          <input
            value={questionId}
            onChange={(e) => setQuestionId(e.target.value)}
            type="text"
            required
          />
          <label>Student ID:</label>
          <input
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            type="text"
            required
          />
          <label>Student answer:</label>
          <input
            value={studentAnswer}
            onChange={(e) => setStudentAnswer(e.target.value)}
            type="text"
            required
          />
        </div>
        <button type="submit">Mark question</button>
      </form>
      <p>{fetching ? "Processing" : ""}</p>
      <h2>Mark:</h2>
      {userFeedback.mark !== undefined ? <p>{userFeedback.mark} marks</p> : ""}
      <h2>Feedback:</h2>
      {userFeedback.feedback !== undefined ? (
        <p>{userFeedback.feedback}</p>
      ) : (
        ""
      )}
      <h2>Justification:</h2>
      {userFeedback.justification !== undefined ? (
        <p>{userFeedback.justification}</p>
      ) : (
        ""
      )}
      <Link href="/">Home</Link>
    </div>
  );
};

export default provMarkingForm;
