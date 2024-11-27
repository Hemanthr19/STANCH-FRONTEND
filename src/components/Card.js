import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ car }) => {
  return (
    <motion.div
      className="bg-white p-4 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-4 text-xl font-semibold">{car.name}</h2>
      <p className="mt-2 text-gray-600">{car.description}</p>
      <Link
        to={`/car/${car.id}`}
        className="inline-block mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-accent"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default Card;
