import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Video Background - REAL TRAFFIC VIDEO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <iframe
            src="https://www.youtube.com/embed/c1ak8KNV6t8?autoplay=1&mute=1&loop=1&playlist=c1ak8KNV6t8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              transform: 'scale(1.5)',
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={() => setVideoLoaded(true)}
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-emerald-950/75"></div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1DBF73 1px, transparent 1px),
                           linear-gradient(90deg, #1DBF73 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Live Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-sm rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-emerald-100 font-medium">Live Traffic Intelligence Network</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 max-w-5xl mx-auto">
            Real-Time Intelligence for Every Traffic Signal
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Enterprise-grade predictive traffic signal data platform. Powering safer, smarter, and more efficient transportation infrastructure for cities and vehicles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/platform"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 border border-emerald-400/20"
            >
              Explore the Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '50K+', label: 'Signals Connected' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '200+', label: 'Cities Deployed' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
