import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const textsToType = [
  "Backend Developer",
  "DevSecOps Enthusiast",
  "Computer Science Student",
];
const socialLinks = [
  {
    icon: <Github size={28} />,
    url: "https://github.com/Ablebil",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={28} />,
    url: "https://linkedin.com/in/hafizhfaiq",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={28} />,
    url: "mailto:hafizhfaiq07@gmail.com",
    label: "Email",
  },
];

const Hero: React.FC<{ scrollToSection: (id: string) => void }> = ({
  scrollToSection,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textsToType[textIndex];
      const updatedText = isDeleting
        ? currentText.substring(0, displayText.length - 1)
        : currentText.substring(0, displayText.length + 1);
      setDisplayText(updatedText);
      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textsToType.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? 50 : 125);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className="text-cyan-400 text-lg md:text-xl mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          Hafizh Faiqunnabil
        </h1>
        <div className="h-12 md:h-16 mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
        </div>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          I build the robust backend systems that power modern applications,
          driven by a passion for problem-solving and the thrill of creating
          seamless digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </button>
          <a
            href="/cv/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-2"
          >
            <FileText size={20} />
            View CV
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel={
                social.url.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
          <ChevronDown
            size={32}
            className="text-cyan-400"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
