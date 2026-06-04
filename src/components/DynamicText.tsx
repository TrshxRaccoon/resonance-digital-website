import { useState, useEffect } from "react";

const phrases = [
  { text: "VFX & Animation", color: "#1fbed6" }, // Example hex code - replace with your actual hex
  { text: "Real Estate Mar-Tech", color: "#ff717e" }, // Example hex code - replace with your actual hex
  { text: "Brand Solutions", color: "#bfd76f" }, // Example hex code - replace with your actual hex
  { text: "Motion Pictures", color: "#a277e1" }, // Example hex code - replace with your actual hex
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrase.text.length) {
          setCurrentText(phrase.text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deleting

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <span className="relative inline-block">
      <span style={{ color: phrases[currentIndex].color }}>
        {currentText}
      </span>
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default DynamicText;
