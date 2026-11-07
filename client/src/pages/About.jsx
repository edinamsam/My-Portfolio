function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-intro">
          <h1>
            About <span className="accent">Me</span>
          </h1>
          <p>
            I'm a full-stack developer focused on building scalable, accessible,
            and high-performance web applications, delivering seamless
            experiences across both frontend and backend systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>My Approach</h3>
            <p>
              I believe in clean architecture, reusable components, efficient
              backend systems, and intuitive user experiences. From designing
              responsive interfaces to building robust APIs and managing
              databases, I strive to write maintainable, secure, and scalable
              code where every line serves a purpose.
            </p>
          </div>

          <div className="about-card">
            <h3>Tech Stack</h3>
            <p>
              React, Node.js, Express.js, MongoDB, REST APIs, Vite, and modern
              CSS. I focus on building responsive frontend interfaces, robust
              backend services, and scalable full-stack applications using
              clean, maintainable code.
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
