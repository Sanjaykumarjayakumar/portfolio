import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {SiLeetcode} from "react-icons/si"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="contact">
      <div className="card">
        <h1>Contact</h1>
        <form className="contactform" onSubmit={handleSubmit}>
          <h2>Get Connected</h2>

          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <p>E-mail</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <p>Description</p>
          <input
            type="text"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Connect</button>
        </form>

        <div className="contact-icons">
          <i className="fab fa-github fa-2x"></i>
          <i className="fab fa-instagram fa-2x"></i>
          <i className="fab fa-linkedin fa-2x"></i>
          <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer">
          <SiLeetcode/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
