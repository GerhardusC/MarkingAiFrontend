import React from "react";
import styles from "../../dashboard.module.css";

const StatusTag = ({ status }) => {
  switch (status) {
    case "Ready to review":
      return (
        <div className={`${styles.statusTag} ${styles.readyTag}`}>{status}</div>
      );
    case "Reviewed":
      return (
        <div className={`${styles.statusTag} ${styles.reviewedTag}`}>
          {status}
        </div>
      );
    case "Queried":
      return (
        <div className={`${styles.statusTag} ${styles.queriedTag}`}>
          {status}
        </div>
      );
    default:
      return <div>No status available</div>;
  }
};

export default StatusTag;
