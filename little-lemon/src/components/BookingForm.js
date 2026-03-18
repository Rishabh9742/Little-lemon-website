import { useState } from "react";
import { bookTable } from "../api/bookingApi";
import { useNavigate } from "react-router-dom";

function BookingForm() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await bookTable({ name, date, guests });

    navigate("/success");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <h2>Reserve a Table</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <button type="submit">
        Book Table
      </button>

    </form>
  );
}

export default BookingForm;