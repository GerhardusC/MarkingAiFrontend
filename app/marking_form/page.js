"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

const MarkingFormPage = () => {
  const [testName, setTestName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("multichoice");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [markingGuide, setMarkingGuide] = useState("");
  const [modelAnswer, setModelAnswer] = useState("");

  const handleSubmission = async () => {
    const res1 = await fetch(
      `http://localhost:3001/get_data/get_question?questionText=${questionText}`
    );
    const question = await res1.json();
    console.log(question);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmission();
        }}
      >
        <div className={styles.inputContainer}>
          <label>Name of test:</label>
          <input
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            type="text"
            maxLength={30}
          />
          <label>Name of student:</label>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            type="text"
            maxLength={30}
          />
          <label>Student email:</label>
          <input
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            type="email"
          />
          <label>Student ID:</label>
          <input
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            type="text"
          />
          <label>Total marks:</label>
          <input
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            type="number"
          />
          <label>Question text:</label>
          <input
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            type="text"
            maxLength={300}
          />

          <label>Question type:</label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="multichoice">Multiple choice</option>
            <option value="shortanswer">Short answer</option>
            <option value="longanswer">Long answer</option>
            <option value="essay">Essay</option>
          </select>

          <label>Student answer:</label>
          <input
            value={studentAnswer}
            onChange={(e) => setStudentAnswer(e.target.value)}
            type="text"
          />
          <label>Marking guide:</label>
          <input
            value={markingGuide}
            onChange={(e) => setMarkingGuide(e.target.value)}
            type="text"
          />
          <label>Model answer:</label>
          <input
            value={modelAnswer}
            onChange={(e) => setModelAnswer(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <Link href="/">Home</Link>
    </div>
  );
};

export default MarkingFormPage;
