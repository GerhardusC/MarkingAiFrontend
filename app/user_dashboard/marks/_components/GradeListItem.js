import React from "react";
import styles from "../../dashboard.module.css";
import StatusTag from "./StatusTag";

const GradeListItem = ({ studentId, name, email, mark, total, status }) => {
  return (
    <li className={styles.list}>
      <input type="checkbox" />
      <p>{studentId}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>
        {mark}/{total}
      </p>
      <StatusTag status={status} />
      <p>...</p>
    </li>
  );
};

export default GradeListItem;
