import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">

      <h2>🍋 Little Lemon</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Reserve</Link>
      </div>

    </nav>
  );
}

export default Navbar;