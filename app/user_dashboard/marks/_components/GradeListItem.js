import React from "react";
import styles from "../../dashboard.module.css";
import StatusTag from "./StatusTag";
import Link from "next/link";

const GradeListItem = ({
  studentId,
  studentName,
  studentEmail,
  marks,
  totalMarks,
  status,
  student,
  test,
}) => {
  return (
    <li className={styles.list}>
      <input type="checkbox" />
      <p>{studentId}</p>
      <p>{studentName}</p>
      <p>{studentEmail}</p>

      <p>
        {marks}/{totalMarks}
      </p>
      <Link href={`/user_dashboard/marks/${student}?testId=${test}`}>
        <StatusTag status={status} />
      </Link>
      <p>...</p>
    </li>
  );
};

export default GradeListItem;
