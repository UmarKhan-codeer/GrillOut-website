import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Sample events data
const eventsData = [
  {
    id: 1,
    title: 'Birthday Bash at Grillout',
   time: '4:00 PM - 10:00 PM',
   location: 'Grillout Main Hall, RoofTop',
   description: 'Celebrate your special day in style with us at Grillout! Enjoy a fun-filled night with customized birthday BBQ platters, refreshing drinks, and live entertainment. Whether it’s your birthday or you’re here to celebrate with friends, we’ll make it an unforgettable evening!', 
    image: 'eventassets/event2.jpg', // Ensure this image exists in public/assets/images/
  },
  {
    id: 2,
    title: 'Bridal Shower Celebration',
    time: '4:00 PM - 10:00 PM',
    location: 'Grillout Main Hall, RoofTop',
    description: 'Join us for an elegant and memorable bridal shower at the beautiful Grillout Garden. Enjoy deliciously crafted dishes, refreshing drinks, and a charming atmosphere perfect for celebrating the bride-to-be. With personalized décor, thoughtful touches, and plenty of fun, this is the perfect way to shower her with love before the big day!',
    image: '/eventassets/bridalevent.jpg', // Ensure this image exists in public/assets/images/
  },
  {
    id: 3,
   title: 'Wedding Anniversary Celebration',
   time: '4:00 PM - 10:00 PM',
   location: 'Grillout Main Hall, RoofTop',
   description: 'Celebrate love and togetherness with an unforgettable evening at Grillout Lounge. Enjoy a romantic setting, gourmet grilled dishes, and special anniversary cocktails, all designed to make your night extraordinary',
   image: '/eventassets/weddingevent.jpeg', // Ensure this image exists in public/assets/images/
  },
  // Add more events as needed
];

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Events</h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: event.id * 0.2 }}
              >
                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openModal(event.image)} // Open modal on click
                />

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

                  {/* Event Date */}
                  <div className="flex items-center text-gray-600 mb-1">
                    
                    <span>{event.date}</span>
                  </div>

                  {/* Event Time */}
                  <div className="flex items-center text-gray-600 mb-1">
                    <FaClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>

                  {/* Event Location */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>

                  {/* Event Description */}
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal to display full-size image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Events;
