import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Working...</p>
      <Link href="/prov_marking_form">Marking form</Link>
    </main>
  );
}
