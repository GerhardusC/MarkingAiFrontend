"use client";
import React from "react";
import styles from "./components.module.css";

const EditMarkModal = ({
  questionName,
  questionText,
  mark,
  feedback,
  editingQuestion,
  setEditingQuestion,
}) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <h1>Change mark & feedback</h1>
        <h2>
          <span>Question 3: </span>
          <span>What is an enzyme?</span>
        </h2>
        <div>
          <h2>Mark</h2>
          <input type="text" placeholder="2.0" />
          <h3>Feedback</h3>
          <textarea
            placeholder={`Great job explaining enzymes and their function! You've clearly described what enzymes are and how they speed up reactions in living organisms. Your mention of enzymes attaching to specific molecules (substrates) and helping them change is spot on. \n
To make your answer even stronger and earn that extra mark, consider adding a bit more detail about how enzymes make reactions happen faster. You could talk about how they create a special environment that encourages chemical changes, or mention their role in breaking down complex substances into simpler ones.`}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.cancelButton}
            onClick={() => setEditingQuestion((prev) => !prev)}
          >
            Cancel
          </button>
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditMarkModal;
