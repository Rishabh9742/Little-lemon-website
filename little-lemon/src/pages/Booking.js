import { useState } from "react";

function Booking() {

  const [form, setForm] = useState({
    date: "",
    time: "",
    people: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table booked!");
  };

  return (
    <div className="booking">

      <h2>Book a Table</h2>

      <form onSubmit={handleSubmit}>

        {/* Date */}
        <label>Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        {/* Time */}
        <label>Time</label>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />

        {/* People */}
        <label>Number of People</label>
        <select
          name="people"
          value={form.people}
          onChange={handleChange}
          required
        >
          <option value="">Select number of people</option>
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
        </select>

        <button type="submit">
          Book Now
        </button>

      </form>

    </div>
  );
}

export default Booking;