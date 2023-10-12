import styles from "./dashboard.module.css";
import Link from "next/link";
import ProfileIcon from "./marks/_components/ProfileIcon";

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
        <Link href="/dev_form" className={styles.newAssessmentButton}>
          + Create assessment
        </Link>
      </nav>
      {children}
      <ProfileIcon />
    </section>
  );
};

export default DashboardLayout;
