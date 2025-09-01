import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <>
    <div id="contact">
    <div className="card">
      <h1>Contact</h1>
      <div className="contact-icons">
        <i className="fab fa-github fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
        <i className="fab fa-linkedin fa-2x"></i>
        <a href="https://leetcode.com/your-username" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
