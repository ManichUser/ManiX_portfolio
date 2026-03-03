'use client';

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="#" className="flex flex-col lg:flex-row items-center justify-center gap-16 py-12 px-6  h-screen bg-[#0B0F1A]">
      
      {/* LEFT — IMAGE WITH CUSTOM SHAPE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-72 h-96 rounded-[120px] overflow-hidden border border-gray-700 bg-white shadow-2xl"
      >

        <img
          src="/profile.png"
          alt="Profile"
          className="w-full h-full  object-cover"
        />
      </motion.div>

      {/* RIGHT — TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-6xl font-bold text-white mb-2 tracking-tight">
          Manich Dibakto
        </h1>

        <p className="text-gray-300 text-xl font-light mb-10 tracking-wide">
          FULL-STACK DEVELOPER <br /> & (Data Scientist Student)
        </p>

        {/* TAGS */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="bg-white/10 text-gray-200 px-6 py-2 rounded-2xl w-fit mx-auto lg:mx-0 backdrop-blur-md">
          Je crée <span className="font-semibold">web applications</span>
          </span>

          <span className="bg-white/10 text-gray-200 px-6 py-2 rounded-2xl w-fit mx-auto lg:mx-0 backdrop-blur-md">
          Je développe <span className="font-semibold">des applications mobiles</span>
          </span>

          <span className="bg-white/10 text-gray-200 px-6 py-2 rounded-2xl w-fit mx-auto lg:mx-0 backdrop-blur-md">
          Je crée<span className="font-semibold">des API backend</span>
          </span>
          <span className="bg-white/10 text-gray-200 px-6 py-2 rounded-2xl w-fit mx-auto lg:mx-0 backdrop-blur-md">
          Je crée <span className="font-semibold">des designs frontend</span>
          </span>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap lg:justify-start">
        <a
            href="https://wa.me/237657857548?text=Salut%20!%20J'esp%C3%A8re%20que%20vous%20allez%20bien.%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20en%20d%C3%A9veloppement%20et%20je%20serais%20ravi%20d'en%20discuter%20avec%20vous.%20Merci%20beaucoup%20!"
            target="_blank"
            rel="noopener noreferrer"
        >
          <button className="bg-[#1c264e] text-white px-9 py-6 rounded-xl font-medium hover:bg-[#343a53] transition-all shadow-lg">
            Discuter
          </button>
        </a>

        </div>
      </motion.div>
    </section>
  );
}
