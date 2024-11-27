import { useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../data";

const CheckoutPage = () => {

  
  const [timeSlot, setTimeSlot] = useState("");
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiryDate: "", cvv: "" });

  
  const [totalPrice, setTotalPrice] = useState(0);
  const [rentalHours, setRentalHours] = useState(1); 


  const handleTimeSlotChange = (event) => {
    setTimeSlot(event.target.value);
  };


  const handleCardChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleRentalHoursChange = (event) => {
    const hours = event.target.value;
    setRentalHours(hours);
    setTotalPrice(car.pricePerHour * hours);
  };


  const { id } = useParams();
  const car = mockData.find((car) => car.id === parseInt(id));

  if (!car) return <div className="p-4 text-red-500">Car not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>


      <div className="flex items-center space-x-6 mb-6">
        <img src={car.image} alt={car.name} className="w-40 h-40 object-cover rounded-md" />
        <div>
          <h2 className="text-2xl font-bold">{car.name}</h2>
          <p className="text-gray-600">{car.description}</p>
          <p className="text-lg font-semibold text-gray-900">₹{car.pricePerHour} per hour</p>
        </div>
      </div>

 
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Select Rental Time Slot</h3>
        <select
          onChange={handleTimeSlotChange}
          value={timeSlot}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">-- Select a Time Slot --</option>
          <option value="9am-12pm">9:00 AM - 12:00 PM</option>
          <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
          <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
        </select>
      </div>

      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Rental Duration (hours)</h3>
        <input
          type="number"
          value={rentalHours}
          onChange={handleRentalHoursChange}
          className="mt-2 p-3 w-1/4 border border-gray-300 rounded-md"
          min="1"
        />
        <p className="mt-2 text-lg font-semibold">Total: ₹{totalPrice}</p>
      </div>

      
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Payment Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              placeholder="1234 5678 9101 1121"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleCardChange}
              placeholder="MM/YY"
              className="mt-2 p-3 w-1/4 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardChange}
              placeholder="123"
              className="mt-2 p-3 w-1/4 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-xl font-semibold">Bill Details</h3>
        <div className="flex justify-between py-2">
          <span className="font-medium">Car Rental:</span>
          <span>₹{totalPrice}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-medium">Tax (5%):</span>
          <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="font-medium">Total:</span>
          <span className="font-semibold text-xl">₹{(totalPrice * 1.05).toFixed(2)}</span>
        </div>
      </div>

      
      <div className="mt-6">
        <button className="w-full py-3 bg-green-500 text-white text-lg font-bold rounded-md">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
