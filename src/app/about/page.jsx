// pages/about.js
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is the about page.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
