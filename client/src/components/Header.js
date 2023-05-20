import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="headerLink" to="/" data-cy="homeLink">
      Home
      </Link>
    </div>
  );
}
