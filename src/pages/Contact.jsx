function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <h1>
            Let's <span className="accent">Connect</span>
          </h1>
          <p>
            I'm open to frontend roles, collaborations and technical
            discussions. Feel free to reach out.
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message" required></textarea>
          </div>

          <button className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
