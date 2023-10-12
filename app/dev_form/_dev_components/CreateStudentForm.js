"use client";
import React, { useState } from "react";
import styles from "./devComponents.module.css";

const CreateStudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  return (
    <>
      <h1>Create student:</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const addStudent = async () => {
            try {
              const res = await fetch(
                "http://localhost:3001/student_creation/add_student",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    studentName: studentName,
                    studentEmail: studentEmail,
                    studentId: studentId,
                  }),
                }
              );
              const result = await res.json();
              alert(result.message);
            } catch (err) {
              console.log(err);
            }
          };
          addStudent();
        }}
      >
        <div className={styles.formItem}>
          <label>Student name: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
            type="text"
            required
            placeholder="student name"
          />
        </div>
        <div className={styles.formItem}>
          <label>Student email: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setStudentEmail(e.target.value)}
            value={studentEmail}
            type="email"
            required
            placeholder="student email"
          />
        </div>
        <div className={styles.formItem}>
          <label>Student ID: </label>
          <input
            className={styles.textIn}
            onChange={(e) => setStudentId(e.target.value)}
            value={studentId}
            type="text"
            required
            placeholder="student ID"
          />
        </div>
        <button type="submit">Add student</button>
      </form>
    </>
  );
};

export default CreateStudentForm;
