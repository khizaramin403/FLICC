import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  // Different messages jo 2 sec baad change honge
  const messages = [
    "Need help? Chat with me! 🚀",
    "Want to see my prints? 📸",
    "Let's discuss your project! ✨",
    "Available for bookings! 📅",
    "Say Hi on WhatsApp! 👋"
  ];

  const phoneNumber = "+923086321448"; // Apna number yahan likhein
const defaultMsg = "Hi! I'm interested in your photography services."; // Default text

  useEffect(() => {
    // 1. Main Loop: Har 5 sec ka gap, phir 10 sec ka stay
    const mainInterval = setInterval(() => {
      setShouldShow(true);
      setMsgIndex(0); // Pehle message se shuru karein

      // 10 seconds baad icon ko hide kar do
      setTimeout(() => {
        setShouldShow(false);
      }, 10000); 

    }, 15000); // 10s stay + 5s gap = 15s total cycle

    return () => clearInterval(mainInterval);
  }, []);

  // 2. Tooltip Message Switcher: Jab icon show ho raha ho, har 2 sec baad message badlo
  useEffect(() => {
    let msgInterval;
    if (shouldShow) {
      msgInterval = setInterval(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
    }
    return () => clearInterval(msgInterval);
  }, [shouldShow]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-24 right-6 md:bottom-28 md:right-10 z-9999">
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 20 }}
            className="relative flex items-center justify-end"
          >
            {/* Dynamic Tooltip */}
            <AnimatePresence mode="wait">
              <motion.span 
                key={msgIndex} // Key badalne se Framer Motion naya animation trigger karega
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-16 w-max px-4 py-2 bg-white text-black text-[11px] font-bold rounded-xl shadow-2xl border border-gray-100"
              >
                {messages[msgIndex]}
                {/* Tooltip Tail */}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
              </motion.span>
            </AnimatePresence>

            {/* WhatsApp Icon */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.991l-.001-.001h-.001z" />
                <path d="M12.004 2c-5.517 0-9.993 4.476-9.993 9.992 0 1.763.459 3.42 1.261 4.864L2 22l5.303-1.391c1.401.765 2.997 1.2 4.701 1.2 5.517 0 9.993-4.476 9.993-9.992 0-5.517-4.476-9.993-9.993-9.993zM12.004 20.121c-1.554 0-3.048-.396-4.363-1.149l-.313-.18-3.235.849.864-3.153-.197-.314a8.103 8.103 0 01-1.241-4.201c0-4.48 3.645-8.125 8.125-8.125s8.125 3.645 8.125 8.125c.001 4.48-3.644 8.148-8.125 8.148z" />
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppIcon;