import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-4 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listen">Listen</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
      </ul>
    </nav>
  );
}
