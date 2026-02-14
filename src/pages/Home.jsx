import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hi, I'm Samuel</h1>
      <p>Frontend Developer builing clean and scalable interfaces.</p>
    </motion.section>
  );
}

export default Home;
