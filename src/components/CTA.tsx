import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-6">
            Let's build smarter intersections together
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Join the cities and companies creating the future of intelligent transportation infrastructure
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Our Team
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {[
            { bg: 'bg-red-100', border: 'border-red-400', fill: 'bg-red-500' },
            { bg: 'bg-amber-100', border: 'border-amber-400', fill: 'bg-amber-500' },
            { bg: 'bg-emerald-100', border: 'border-emerald-500', fill: 'bg-emerald-500' },
          ].map((signal, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-full ${signal.bg} border-2 ${signal.border}`}>
                <motion.div
                  className={`w-full h-full rounded-full ${signal.fill}`}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
