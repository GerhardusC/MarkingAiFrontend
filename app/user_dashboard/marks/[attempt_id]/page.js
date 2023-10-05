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
        </div>
        {/* Selected question */}
        <div className={styles.questionDetailsContainer}>
          <h2 className={styles.testName}>Grade 10 Biology Test Term 1</h2>
          <h5 className={styles.detailedQuestionName}>Question 3</h5>
          <h1 className={styles.questionText}>What is an enzyme?</h1>
          <div className={styles.summariesContainer}>
            <details>
              <summary>
                <span>Student answer</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p>
                  An enzyme is a type of protein that speeds up chemical
                  reactions in living organisms. It works by attaching to
                  specific molecules, called substrates, and helping them change
                  into different molecules. Enzymes make these reactions happen
                  faster by lowering the energy needed for them. This helps with
                  vital processes like digestion and energy production in cells.
                </p>
              </div>
            </details>
            <details>
              <summary>
                <span>Marking guide</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p></p>
              </div>
            </details>
            <details>
              <summary>
                <span>Model answer</span>
                <span className={styles.summaryDownarrow}>v</span>
              </summary>
              <div>
                <p></p>
              </div>
            </details>
          </div>
        </div>
        <div className={styles.gradeContainer}>
          <div className={styles.headingContainer}>
            <h2 className={styles.gradingColumnHeading}>Grading</h2>
            <h2 className={styles.editText}>Edit</h2>
          </div>
          <h5 className={styles.detailedQuestionName2}>Question 3</h5>
          <div className={styles.marksContainer}>
            <h1>2.0 / 3.0</h1>
            <p>Marks</p>
          </div>
          <details>
            <summary>
              <span>Feedback to student</span>
              <span>v</span>
            </summary>
            <div>
              <p>
                Great job explaining enzymes and their function! You've clearly
                described what enzymes are and how they speed up reactions in
                living organisms. Your mention of enzymes attaching to specific
                molecules (substrates) and helping them change is spot on.
              </p>
              <p>
                To make your answer even stronger and earn that extra mark,
                consider adding a bit more detail about how enzymes make
                reactions happen faster. You could talk about how they create a
                special environment that encourages chemical changes, or mention
                their role in breaking down complex substances into simpler
                ones.
              </p>
            </div>
          </details>
          <details>
            <summary>
              <span>AI Justification for mark</span>
              <span>v</span>
            </summary>
            <div></div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default GradesView;
