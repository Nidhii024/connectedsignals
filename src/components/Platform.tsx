import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Cloud, Brain, Lock, Gauge } from 'lucide-react';

export function Platform() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: Cloud, title: 'Real-time Data', description: 'Live signal status from connected infrastructure' },
    { icon: Brain, title: 'ML Predictions', description: 'Advanced algorithms predict signal changes' },
    { icon: Lock, title: 'Secure Distribution', description: 'Encrypted, enterprise-grade data delivery' },
    { icon: Gauge, title: 'Scalable Infrastructure', description: 'Built to serve millions of endpoints' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            End-to-end intelligent traffic infrastructure platform
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Traffic Signals', subtitle: 'Connected Infrastructure', color: 'emerald' },
              { title: 'Cloud Intelligence', subtitle: 'ML Processing', color: 'blue' },
              { title: 'Vehicles', subtitle: 'Real-time Updates', color: 'purple' },
              { title: 'Cities', subtitle: 'Analytics & Control', color: 'amber' },
            ].map((node, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className={`bg-gradient-to-br from-${node.color}-50 to-${node.color}-100 rounded-2xl p-6 border border-${node.color}-200 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                  <motion.div
                    className={`absolute inset-0 bg-${node.color}-100`}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-${node.color}-200 rounded-lg flex items-center justify-center mb-4`}>
                      <div className={`w-3 h-3 bg-${node.color}-600 rounded-full`}></div>
                    </div>
                    <h4 className="text-gray-900 mb-1">{node.title}</h4>
                    <p className="text-gray-600">{node.subtitle}</p>
                  </div>
                </div>

                {/* Connecting arrows */}
                {i < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.2 }}
                  >
                    <div className="flex items-center">
                      <motion.div
                        className="w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                      <div className="w-2 h-2 bg-blue-500 rounded-full -ml-1"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
