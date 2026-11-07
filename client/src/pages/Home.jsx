import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <p className="hero-tag">Full Stack Developer</p>

        <h1>
          Building modern,
          <span className="accent"> high-performance </span>
          web experiences.
        </h1>

        <p className="hero-subtext">
          I design and develop scalable full-stack applications, combining
          intuitive React interfaces with robust backend systems, efficient
          APIs, and database integration. I prioritize clean architecture,
          seamless user experiences, and maintainable code.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
