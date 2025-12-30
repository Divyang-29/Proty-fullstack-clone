import { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Annette Black",
    role: "CEO Themesflat",
    text:
      "Aenean orci lorem, pharetra ac imperdiet eget, tristique ac magna. In aliquet efficitur turpis, et posuere tellus commodo at.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Floyd Miles",
    role: "CEO Themesflat",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam tempus urna id interdum.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Jacob Jones",
    role: "CEO Themesflat",
    text:
      "My experience with property management services has exceeded expectations. They efficiently manage properties with a professional approach.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
  },
  {
    name: "Eleanor Pena",
    role: "CEO Themesflat",
    text:
      "In hac habitasse platea dictumst. Sed eleifend aliquam dui quis convallis.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    name: "Cody Fisher",
    role: "CEO Themesflat",
    text:
      "Vivamus at nisl ornare, vulputate turpis finibus, posuere metus.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Ralph Edwards",
    role: "CEO Themesflat",
    text:
      "Quisque tincidunt, nunc vitae maximus lobortis, tellus risus fringilla mi.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(6);

  return (
    <section className="testimonials">
      <h2>Clients Testimonials</h2>
      <p className="subtitle">
        Thousands of luxury home enthusiasts just like you visit our website.
      </p>

      <div className="testimonial-grid">
        {testimonialsData.slice(0, visible).map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {"★".repeat(item.rating)}
            </div>

            <p className="text">{item.text}</p>

            <div className="author">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visible < testimonialsData.length && (
        <button
          className="show-more"
          onClick={() => setVisible(visible + 3)}
        >
          Show more...
        </button>
      )}
    </section>
  );
}
