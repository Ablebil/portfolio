import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const socialLinks = [
  { icon: <Github />, url: "https://github.com/Ablebil", label: "GitHub" },
  {
    icon: <Linkedin />,
    url: "https://linkedin.com/in/hafizhfaiq",
    label: "LinkedIn",
  },
];
const contactEmail = "hafizhfaiq07@gmail.com";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 pt-16 pb-8 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Button Back to Top */}
        <button
          onClick={() => scrollToSection("home")}
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer inline-block"
            >
              Hafizh Faiqunnabil
            </h3>
            <p className="text-slate-400 mt-2 text-sm max-w-xs">
              A backend developer passionate about building scalable and
              efficient web solutions.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wider">
                Get in Touch
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all"
                  >
                    {contactEmail}
                  </a>
                </li>
                <li>
                  <a
                    href={"tel:+6282132377147"}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all"
                  >
                    +62 821-3237-7147
                  </a>
                </li>
                {/* Anda bisa menambahkan nomor telepon di sini jika mau */}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wider">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center gap-2"
                    >
                      {React.cloneElement(social.icon, {
                        className: "w-5 h-5",
                      })}{" "}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 tracking-wider">
                Built With
              </h4>
              <ul className="space-y-3">
                <li className="text-slate-400 text-sm">React & TypeScript</li>
                <li className="text-slate-400 text-sm">Tailwind CSS</li>
                <li className="text-slate-400 text-sm">Framer Motion</li>
                <li className="text-slate-400 text-sm">Vercel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Muhammad Hafizh Faiqunnabil. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
