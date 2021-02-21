import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </ul>
    </nav>
  );
}
