import React from "react";
import { skillsData } from "../data/skills";
import { motion, easeOut } from "framer-motion";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-900"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of technologies and tools I leverage to build modern,
            robust, and scalable solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillsData.map((category) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="flex"
              >
                <div className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 h-full hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group hover:-translate-y-2">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-white transition-all duration-200 cursor-default border border-slate-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400">
            ... and I'm always excited to learn more.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
