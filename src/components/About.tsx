import React from "react";
import { Code2, Cloud, Brain, CheckCircle, Shield } from "lucide-react";
import { motion, easeOut } from "framer-motion";

const About: React.FC = () => {
  const interests = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Backend Development",
      description: "Specializing in building robust and scalable APIs.",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "DevSecOps",
      description:
        "Passionate about CI/CD, automation, and security integration.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Cloud Computing",
      description: "Exploring secure system architecture on the cloud.",
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI Enthusiast",
      description: "Interested in integrating AI into backend systems.",
    },
  ];

  const currentFocus = [
    "Deepening my expertise in backend technologies and modern DevSecOps practices.",
    "Exploring cloud computing, cybersecurity, and system scalability.",
    "Dabbling in Artificial Intelligence and how it can be integrated into robust systems.",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-slate-800 rounded-2xl p-2 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-xl object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231e293b" width="400" height="400"/%3E%3Ctext fill="%2322d3ee" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EYour Photo%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="md:col-span-3">
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm a Computer Science student at{" "}
              <span className="font-semibold text-cyan-400">
                Brawijaya University
              </span>
              , driven by the joy of turning ideas into reality through code. My
              passion lies deeply in{" "}
              <span className="font-semibold text-cyan-400">
                backend development
              </span>
              , as I'm fascinated by the intricate logic that powers
              applications behind the scenes. While others might focus on the
              user interface, I thrive on architecting the business logic, data
              systems, security and infrastructure that make everything work
              seamlessly.
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">
              Currently, I'm focusing on:
            </h3>
            <ul className="space-y-3 mb-8">
              {currentFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300 leading-relaxed">
              My long-term goal is to build a successful career in software
              development. For the short-term, I am actively seeking
              opportunities where I can contribute my skills and passion, and
              grow to my fullest potential alongside a talented team.
            </p>
          </div>
        </div>

        {/* Interests / Highlights Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            My Areas of Interest
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center group hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-900 p-3 rounded-full group-hover:bg-cyan-400/10 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
