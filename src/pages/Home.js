import Card from "../components/Card";
import { color, motion } from "framer-motion";
import mockData from "../../src/data";
import FavoriteIcon from '@mui/icons-material/Favorite'; 

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100"
  >
    {mockData.map((car) => (
      <motion.div
        key={car.id}
        whileHover={{ scale: 1.05 }} // Slight zoom effect on hover
        className="bg-white rounded-lg shadow-lg overflow-hidden relative"
      >
        {/* Heart Icon */}
        <div className="absolute top-3 right-3 z-10">
          <FavoriteIcon
            style={{
              fontSize: "30px",
              color: "red",
              transition: "transform 0.3s ease",
            }}
            className="cursor-pointer hover:scale-110" // Adds scale on hover effect
          />
        </div>

        {/* Car Card Content */}
        <Card car={car} />
      </motion.div>
    ))}
  </motion.div>
);

export default Home;
