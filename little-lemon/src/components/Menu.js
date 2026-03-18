import salad from "../images/salad.jpg";
import bruschetta from "../images/bruschetta.jpg";
import dessert from "../images/dessert.jpg";

function Menu() {
  const items = [
    {
      name: "Greek Salad",
      price: "$12",
      desc: "Fresh salad with feta cheese",
      img: salad,
    },
    {
      name: "Bruschetta",
      price: "$8",
      desc: "Grilled bread with tomato",
      img: bruschetta,
    },
    {
      name: "Lemon Dessert",
      price: "$6",
      desc: "Sweet lemon cake",
      img: dessert,
    },
  ];

  return (
    <div className="menu">

      <h2>This Week Specials</h2>

      <div className="menu-grid">

        {items.map((item, i) => (
          <div key={i} className="menu-card">

            <img src={item.img} alt={item.name} />

            <h3>
              {item.name} - {item.price}
            </h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Menu;