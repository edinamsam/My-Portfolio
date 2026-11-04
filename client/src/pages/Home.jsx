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
        <p className="hero-tag">Frontend Developer</p>

        <h1>
          Building modern,
          <span className="accent"> high-performance </span>
          web experiences.
        </h1>

        <p className="hero-subtext">
          I design and develop scalable React applications with clean
          architecture, smooth interactions, and attention to detail.
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
