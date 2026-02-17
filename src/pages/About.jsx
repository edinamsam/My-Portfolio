function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-intro">
          <h1>
            About <span className="accent">Me</span>
          </h1>
          <p>
            I'm a frontend developer focused on building scalable, accessible,
            and performance-driven web applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>My Approach</h3>
            <p>
              I believe in clean architecture, reusable components, and
              thoughtful user experience. Every line of code should serve
              clarity and performance.
            </p>
          </div>

          <div className="about-card">
            <h3>Tech Stack</h3>
            <p>
              React, Vite, modern CSS, REST APIs, and component-driven design
              systems. I focus on maintainable and scalable code.
            </p>
          </div>

          <div className="about-card">
            <h3>Beyond Code</h3>
            <p>
              I'm passionate about continuous learning, mentoring, and building
              products that make real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
