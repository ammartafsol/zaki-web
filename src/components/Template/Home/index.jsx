import Link from "next/link";
import styles from "./HomeTemplate.module.css";

export default function HomeTemplate() {
  return (
    <main className={styles.main}>
    <p className="text-center">Example Project</p>
      <Link href="/components">See Components</Link>
    </main>
  );
}
