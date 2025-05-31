import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 text-center footer-layout mb-5">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Animated Gift Box */}
        <motion.div
          animate={{
            y: [0, -10, 0], // bounce effect
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="text-4xl"
        >
          🎁
        </motion.div>

        {/* Thank you note */}
        <p className="text-white text-lg font-normal">
          Thank you for being a part of{" "}
          <span className="text-white font-bold">Trend Wear</span>! 💖
        </p>
        <p className="text-white text-sm font-light mt-1">
            Crafted with ❤️ by <span className="font-semibold">Kamlesh Vishwakarma</span>
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-white text-2xl">
          <a
            href="https://instagram.com/trend_wear41"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/8085860860"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

        <small className="text-white/80">
          &copy; {new Date().getFullYear()} Trend Wear. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
