import React from "react";
import GradeListItem from "./_components/GradeListItem";
import styles from "../dashboard.module.css";

const MarksPage = () => {
  const courses = [
    "Grade 10 Physical Science Test Term 1",
    "Grade 10 Physical Science Test Term 2",
    "Grade 11 Physical Science Test Term 1",
    "Grade 11 Physical Science Test Term 2",
    "Grade 12 Physical Science Test Term 1",
    "Grade 12 Physical Science Test Term 2",
    "Grade 10 Life Science Test Term 1",
    "Grade 10 Life Science Test Term 2",
    "Grade 11 Life Science Test Term 1",
    "Grade 11 Life Science Test Term 2",
    "Grade 12 Life Science Test Term 1",
    "Grade 12 Life Science Test Term 2",
  ];

  const studentGrades = [
    {
      studentId: "#876364",
      name: "Arrora Gaur",
      email: "aurroragaur@gmail.com",
      mark: 45,
      total: 50,
      status: "Ready to review",
    },
    {
      studentId: "#876364",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      mark: 32,
      total: 50,
      status: "Ready to review",
    },
    {
      studentId: "#876364",
      name: "Robert Bacins",
      email: "robertbacins@gmail.com",
      mark: 37,
      total: 50,
      status: "Reviewed",
    },
    {
      studentId: "#876364",
      name: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      mark: 49,
      total: 50,
      status: "Queried",
    },
    {
      studentId: "#876364",
      name: "Anne Jacob",
      email: "annejacob@gmail.com",
      mark: 21,
      total: 50,
      status: "Reviewed",
    },
    {
      studentId: "#876364",
      name: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      mark: 45,
      total: 50,
      status: "Ready to review",
    },
    {
      studentId: "#876364",
      name: "Arrora Gaur",
      email: "aurroragaur@gmail.com",
      mark: 45,
      total: 50,
      status: "Reviewed",
    },
  ];
  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <h1>Grades</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.shareButton}>Share with moderator</button>
          <button className={styles.publishButton}>Publish all grades</button>
        </div>
      </div>
      {/* User inputs */}
      <div className={styles.userInputsContainer}>
        <select>
          {courses.map((course, index) => {
            return <option key={index}>{course}</option>;
          })}
        </select>
        <div>
          <input type="text" placeholder="Search" />
          <button>
            <img src="/searchicon.svg" />
          </button>
        </div>
      </div>
      {/* Table */}
      <ul>
        {/* Heading */}
        <li className={`${styles.listHeader} ${styles.list}`}>
          <input type="checkbox" />
          <div>
            <div>Student ID</div>
            <img src="/downarrow.svg" alt="icon" />
          </div>
          <div>
            <div>Name</div>
            <img src="/downarrow.svg" alt="icon" />
          </div>
          <div>
            <div>Email</div>
            <img src="/downarrow.svg" alt="icon" />
          </div>
          <div>
            <div>Marks</div>
            <img src="/downarrow.svg" alt="icon" />
          </div>
          <div>
            <div>Status</div>
            <img src="/downarrow.svg" alt="icon" />
          </div>
          <div>
            <img src="/delete.svg" alt="icon" />
          </div>
        </li>
        {/* Table content */}
        {studentGrades.map((studentGrade, index) => {
          return <GradeListItem {...studentGrade} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default MarksPage;