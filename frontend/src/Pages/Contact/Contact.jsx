import { useState } from "react";
import "./contact.css";
import WorkTogether from "./WorkTogether";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* MAP BACKGROUND */}
      <div className="contact-map"></div>

      {/* FORM CARD */}
      <div className="contact-card">
        <h1>We Would Love to Hear From You</h1>
        <p className="subtitle">
          We'll get to know you to understand your selling goals, explain the
          selling process so you know what to expect.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone number:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>What are you interested in?</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Buying Property">Buying</option>
                <option value="Selling Property">Selling</option>
                <option value="Renting Property">Renting</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label>Your Message:</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}

          <button className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Contact our experts"}
          </button>
        </form>
      </div>

      <WorkTogether />
    </div>
  );
}
