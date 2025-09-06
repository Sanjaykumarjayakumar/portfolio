import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";
import { useState } from "react";

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
  <a href="" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} />
  </a>

  <a href="" target="_blank" rel="noopener noreferrer">
    <SiLeetcode size={30} />
  </a>

  <a href="" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={30} />
  </a>

  <a href="">
    <MdEmail size={30} />
  </a>

  <a href="" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} />
  </a>

  <a href="">
    <MdPhone size={30} />
  </a>
</div>

      </div>
    </div>
  );
};

export default Contact;
