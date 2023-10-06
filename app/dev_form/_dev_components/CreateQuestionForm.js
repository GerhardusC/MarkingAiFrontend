"use client";
import React, { useState } from "react";

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
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        onChange={(e) => setTotalMarks(e.target.value)}
        placeholder="total marks"
        type="number"
        value={totalMarks}
      />
      <input
        onChange={(e) => setQuestionText(e.target.value)}
        type="text"
        placeholder="question text"
        value={questionText}
      />
      <input
        onChange={(e) => setQuestionType(e.target.value)}
        type="text"
        placeholder="question type"
        value={questionType}
      />
      <input
        onChange={(e) => setMarkingGuide(e.target.value)}
        type="text"
        placeholder="marking guide"
        value={markingGuide}
      />
      <input
        onChange={(e) => setModelAnswer(e.target.value)}
        placeholder="model answer"
        value={modelAnswer}
      />
      <button type="submit">Add question</button>
    </form>
  );
};

export default CreateQuestionForm;
