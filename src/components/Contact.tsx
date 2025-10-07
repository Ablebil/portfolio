import React from "react";
import { Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const socialLinks = [
  { icon: <Github />, url: "https://github.com/Ablebil", label: "GitHub" },
  {
    icon: <Linkedin />,
    url: "https://linkedin.com/in/hafizhfaiq",
    label: "LinkedIn",
  },
];

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("myzndgpy");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >
        <div className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-slate-400">
              Your message has been sent successfully. I'll get back to you
              shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-32 -right-32 animate-pulse"></div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mb-8">
              I'm always excited to connect! Whether you have a project in mind,
              a question, or just want to discuss tech, feel free to send me a
              message.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {React.cloneElement(social.icon, { className: "w-7 h-7" })}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all outline-none resize-none"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>{state.submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
