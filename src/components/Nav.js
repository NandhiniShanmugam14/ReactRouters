import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const styles = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to="/" style={styles}>
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={styles} to="/about">
          <li>About us</li>
        </Link>
        <Link style={styles} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
