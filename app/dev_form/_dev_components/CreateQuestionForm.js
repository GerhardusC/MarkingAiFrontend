"use client";
import React, { useState } from "react";
import styles from "./devComponents.module.css";

const CreateQuestionForm = () => {
  const [totalMarks, setTotalMarks] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [markingGuide, setMarkingGuide] = useState("");
  const [modelAnswer, setModelAnswer] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/question_creation/create_question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalMarks: totalMarks,
            questionText: questionText,
            questionType: questionType,
            markingGuide: markingGuide,
            modelAnswer: modelAnswer,
          }),
        }
      );
      const response = await res.json();
      alert(response.message);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <h1>Create question:</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className={styles.formItem}>
          <label>Total marks: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setTotalMarks(e.target.value)}
            placeholder="total marks"
            type="number"
            value={totalMarks}
          />
        </div>
        <div className={styles.formItem}>
          <label>Question text: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setQuestionText(e.target.value)}
            type="text"
            placeholder="question text"
            value={questionText}
          />
        </div>
        <div className={styles.formItem}>
          <label>Question type: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setQuestionType(e.target.value)}
            type="text"
            placeholder="question type"
            value={questionType}
          />
        </div>
        <div className={styles.formItem}>
          <label>Marking guide: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setMarkingGuide(e.target.value)}
            type="text"
            placeholder="marking guide"
            value={markingGuide}
          />
        </div>
        <div className={styles.formItem}>
          <label>Model answer: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setModelAnswer(e.target.value)}
            placeholder="model answer"
            value={modelAnswer}
          />
        </div>
        <button type="submit">Add question</button>
      </form>
    </>
  );
};

export default CreateQuestionForm;
