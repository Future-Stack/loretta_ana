import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface UniversalDropdownProps {
  trigger: React.ReactNode; // The clickable trigger (e.g. button or icon)
  children: React.ReactNode; // The UniversalDropdown content
  align?: "left" | "right" | "center"; // Positioning
  closeOnSelect?: boolean; // Close when an item is clicked
  className?: string; // Custom UniversalDropdown panel styling
}

const UniversalDropdown: React.FC<UniversalDropdownProps> = ({
  trigger,
  children,
  align = "left",
  closeOnSelect = true,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Optional close on item click
  const handleItemClick = () => {
    if (closeOnSelect) closeDropdown();
  };

  const alignment =
    align === "right"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer select-none">
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full mt-2 rounded-lg shadow-lg border z-50 min-w-[220px] ${alignment} ${
              className.includes("bg-") ? "" : "bg-gray-800"
            } ${
              className.includes("border-") ? "" : "border-gray-700"
            } ${className}`}
            onClick={handleItemClick}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniversalDropdown;
