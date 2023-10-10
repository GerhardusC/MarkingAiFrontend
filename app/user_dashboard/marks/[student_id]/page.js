"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./attempts.module.css";
import EditMarkModal from "../_components/EditMarkModal";

const GradesView = ({ params, searchParams }) => {
  const [editingQuestion, setEditingQuestion] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [testAttempt, setTestAttempt] = useState([]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [studentMarks, setStudentMarks] = useState(0);

  const getTestAttempt = async () => {
    const res = await fetch(
      `http://localhost:3001/get_data/get_test_attempt/?studentId=${params.student_id}&testId=${searchParams.testId}`
    );
    const attempts = await res.json();
    setTestAttempt(attempts);
    let totalMarks = 0;
    let studentMarks = 0;
    for (let i = 0; i < attempts.length; i++) {
      totalMarks += attempts[i].question.totalMarks;
      studentMarks += attempts[i].mark;
    }
    setTotalMarks(totalMarks);
    setStudentMarks(studentMarks);
    console.log(attempts);
  };

  useEffect(() => {
    if (!fetching) {
      setFetching(true);
      getTestAttempt();
    }
    return setFetching(false);
  }, []);

  return (
    <div>
      <div className={styles.gradeViewContainer}>
        {/* Header */}
        <div className={styles.columnOneContainer}>
          <div className={styles.backbutton}>
            <Link href="/user_dashboard/marks">&#8592;</Link>
          </div>
          <h1>{testAttempt[0]?.student.studentName}</h1>
        </div>
        <h1>
          {studentMarks}/{totalMarks}
        </h1>
        <div className={styles.reviewStatus}>Review complete</div>
        {/* Row 2 */}
        <div className={styles.questionsContainer}>
          <h2>Questions</h2>
          <div className={styles.searchBar}>
            <img src="/searchicon.svg" alt="icon" />
            <input type="text" placeholder="search" />
          </div>
          {/* Questions */}
          {testAttempt.map((attempt, index) => {
            return (
              <div
                className={
                  selectedQuestionIndex === index
                    ? styles.questionContainerSelected
                    : styles.questionContainer
                }
                key={index}
                onClick={() => setSelectedQuestionIndex(index)}
              >
                <div className={styles.questionNameContainer}>
                  <p className={styles.questionName}>Question {index + 1}</p>
                  <p className={styles.questionMarks}>
                    {attempt.question.totalMarks} marks
                  </p>
                </div>
                <p className={styles.questionDescription}>
                  {attempt.question.questionText}
                </p>
              </div>
            );
          })}
        </div>
        {/* Selected question */}
        <div className={styles.questionDetailsContainer}>
          <h2 className={styles.testName}>
            {testAttempt[selectedQuestionIndex]?.test.testName}
          </h2>
          <h5 className={styles.detailedQuestionName}>
            Question {selectedQuestionIndex + 1}
          </h5>
          <h1 className={styles.questionText}>
            {testAttempt[selectedQuestionIndex]?.question.questionText}
          </h1>
          <div className={styles.summariesContainer}>
            <details>
              <summary>
                <span>Student answer</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p>{testAttempt[selectedQuestionIndex]?.studentAnswer}</p>
              </div>
            </details>
            <details>
              <summary>
                <span>Marking guide</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p>
                  {testAttempt[selectedQuestionIndex]?.question.markingGuide}
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span>Model answer</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p>
                  {testAttempt[selectedQuestionIndex]?.question.modelAnswer}
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className={styles.gradeContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.gradingColumnHeading}>Grading</h2>
            <h2
              className={styles.editText}
              onClick={() => setEditingQuestion((prev) => !prev)}
            >
              Edit
            </h2>
          </div>
          <h5 className={styles.detailedQuestionName2}>
            Question {selectedQuestionIndex + 1}
          </h5>
          <div className={styles.marksContainer}>
            <h1>
              {testAttempt[selectedQuestionIndex]?.mark} /{" "}
              {testAttempt[selectedQuestionIndex]?.question.totalMarks}
            </h1>
            <p>Marks</p>
          </div>
          <details>
            <summary>
              <span>Feedback to student</span>
              <span>v</span>
            </summary>
            <div>
              <p>{testAttempt[selectedQuestionIndex]?.feedback}</p>
            </div>
          </details>
          <details>
            <summary>
              <span>AI Justification for mark</span>
              <span>v</span>
            </summary>
            <div>{testAttempt[selectedQuestionIndex]?.justification}</div>
          </details>
        </div>
      </div>
      {editingQuestion ? (
        <EditMarkModal
          editingQuestion={editingQuestion}
          setEditingQuestion={setEditingQuestion}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default GradesView;
