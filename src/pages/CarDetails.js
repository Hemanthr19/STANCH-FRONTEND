import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import mockData from "../data";

const CarDetails = () => {
  const { id } = useParams();
  const car = mockData.find((car) => car.id === parseInt(id));

  if (!car) return <div className="p-4 text-red-500">Car not found</div>;

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-50"
    >
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={car.image}
          alt={car.name}
          className="w-full md:w-1/2 rounded shadow-lg"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <p className="mt-2 text-gray-700">{car.description}</p>
          <Link
            to={`/payment/${car.id}`}
            className="inline-block mt-4 px-4 py-2 bg-secondary text-white rounded hover:bg-accent"
        >Book now</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetails;
