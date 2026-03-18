import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">

      <h1>Little Lemon</h1>
      <p>Chicago's best Mediterranean food</p>

      <Link to="/booking">
        <button>Reserve a Table</button>
      </Link>

    </div>
  );
}

export default Hero;