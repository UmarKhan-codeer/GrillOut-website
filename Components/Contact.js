import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';

const Contact = () => {
  const phoneNumber = "+923345332323"; // Replace with your number in international format
  const message = "Assalam o Alikum, I would like to place an order!"; // Pre-filled message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">For More Details</h2>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="text-white bg-green-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800 gap-2"
              >
                <BsWhatsapp />
                Message
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Address */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-2xl mr-4 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Our Location</h3>
                <p>GT Road, near Shahi Restaurant, Harīpur, Haripur, Khyber Pakhtunkhwa</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <FaPhoneAlt className="text-2xl mr-4 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <a href="tel:+923345332323" className="text-blue-500 hover:underline">
                  +92 3345332323
                </a>
              </div>
            </div>


            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-2xl mr-4 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p>contact@grillout.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/GrillOutHaripur" aria-label="Facebook" className="text-2xl hover:text-orange-400 transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/grilloutharipur" aria-label="Instagram" className="text-2xl hover:text-orange-400 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Whatsapp" className="text-2xl hover:text-orange-400 transition-colors duration-300">
                <BsWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Optional: Google Maps Integration */}
        <motion.div
          className="w-full h-64 mt-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13231.64580986295!2d72.9456183!3d33.9948081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb31cff1ef905%3A0xe7742b5d0bbf7c54!2sGrill%20Out!5e0!3m2!1sen!2s!4v1728460639167!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Grillout Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
