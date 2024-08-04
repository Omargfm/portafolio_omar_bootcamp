// pages/projects.js
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>This is the projects page.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
