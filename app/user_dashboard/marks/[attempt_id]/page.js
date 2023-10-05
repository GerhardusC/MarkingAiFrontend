import Link from "next/link";
import React from "react";
import styles from "./attempts.module.css";

const GradesView = ({ params }) => {
  const questions = [
    { name: "Question 1", description: "Define photosynthesis.", marks: 2 },
    {
      name: "Question 2",
      description: "Explain the process of mitosis.",
      marks: 2,
    },
    { name: "Question 3", description: "What is an enzyme?", marks: 3 },
    {
      name: "Question 4",
      description: "What is the function of the circulatory system?",
      marks: 1,
    },
    {
      name: "Question 5",
      description: "Differentiate between prokaryotic and eukaryotic cells.",
      marks: 4,
    },
    {
      name: "Question 6",
      description: "Describe the role of DNA in inheritence.",
      marks: 4,
    },
    { name: "Question 7", description: "Define protons.", marks: 6 },
  ];
  return (
    <div>
      <div className={styles.gradeViewContainer}>
        {/* Header */}
        <div className={styles.columnOneContainer}>
          <div className={styles.backbutton}>
            <Link href="/user_dashboard/marks">&#8592;</Link>
          </div>
          <h1>Aurora Gaur</h1>
        </div>
        <h1>45/50</h1>
        <div className={styles.reviewStatus}>Review complete</div>
        {/* Row 2 */}
        <div className={styles.questionsContainer}>
          <h2>Questions</h2>
          <div className={styles.searchBar}>
            <img src="/searchicon.svg" alt="icon" />
            <input type="text" placeholder="search" />
          </div>
          {/* Questions */}
          {questions.map((question, index) => {
            return (
              <div className={styles.questionContainer} key={index}>
                <div className={styles.questionNameContainer}>
                  <p className={styles.questionName}>{question.name}</p>
                  <p className={styles.questionMarks}>{question.marks} marks</p>
                </div>
                <p className={styles.questionDescription}>
                  {question.description}
                </p>
              </div>
            );
          })}
          {/* Selected question */}
          <div className={styles.questionDetailsContainer}>
            <h2>Grade 10 Biology Test Term 1</h2>
            <h5>Question 3</h5>
            <h1>What is an enzyme?</h1>
            <details>
              <summary></summary>
              <div>
                <p></p>
              </div>
            </details>
            <details>
              <summary></summary>
              <div>
                <p></p>
              </div>
            </details>
            <details>
              <summary></summary>
              <div>
                <p></p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesView;
