"use client";
import React, { useState } from "react";

const CreateStudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  return (
    <form
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
            console.log(result);
          } catch (err) {
            console.log(err);
          }
        };
        addStudent();
      }}
    >
      <input
        onChange={(e) => setStudentName(e.target.value)}
        value={studentName}
        type="text"
        required
        placeholder="student name"
      />
      <input
        onChange={(e) => setStudentEmail(e.target.value)}
        value={studentEmail}
        type="email"
        required
        placeholder="student email"
      />
      <input
        onChange={(e) => setStudentId(e.target.value)}
        value={studentId}
        type="text"
        required
        placeholder="student ID"
      />
      <button type="submit">Add student</button>
    </form>
  );
};

export default CreateStudentForm;
