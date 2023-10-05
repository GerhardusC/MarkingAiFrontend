import styles from "./dashboard.module.css";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <section className={styles.mainContainer}>
      <nav className={styles.navigationContainer}>
        <div className={styles.navigationTitle}>
          <img src="/markingai_logo_primary 2MarkingAiLogo.svg" alt="Icon" />
        </div>
        <ul className={styles.navigationList}>
          <Link href="/user_dashboard/assessments">
            <li className={styles.navigationItem}>
              <img src="/categoryassessments_icon.svg" alt="Icon" />
              <p>Assessments</p>
            </li>
          </Link>
          <Link href="/user_dashboard/marks">
            <li className={styles.navigationItem}>
              <img src="/chart_logo.svg" alt="Icon" />
              <p>Marks</p>
            </li>
          </Link>
          <Link href="/user_dashboard/settings">
            <li className={styles.navigationItem}>
              <img src="/settings_logo.svg" alt="Icon" />
              <p>Settings</p>
            </li>
          </Link>
        </ul>
        <button className={styles.newAssessmentButton}>
          + Create assessment
        </button>
      </nav>
      {children}
    </section>
  );
};

export default DashboardLayout;
