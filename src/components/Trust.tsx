import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Lock, Award } from 'lucide-react';

export function Trust() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    'City of Austin',
    'Los Angeles DOT',
    'Miami-Dade County',
    'Seattle Transit',
    'Phoenix Transportation',
    'Portland Metro',
  ];

  const certifications = [
    { icon: Shield, title: 'SOC 2 Certified', description: 'Enterprise security compliance' },
    { icon: Clock, title: '99.9% Uptime', description: 'Reliable 24/7 operations' },
    { icon: Lock, title: 'End-to-End Encryption', description: 'Secure data transmission' },
    { icon: Award, title: 'ISO 27001', description: 'Information security standard' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Trusted by Cities & Industry Leaders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Powering intelligent infrastructure across North America
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center justify-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="text-gray-600 text-center group-hover:text-gray-900 transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <cert.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Cities Connected</div>
            </div>
            <div>
              <div className="text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Traffic Signals</div>
            </div>
            <div>
              <div className="text-purple-600 mb-2">10M+</div>
              <div className="text-gray-600">Connected Devices</div>
            </div>
            <div>
              <div className="text-amber-600 mb-2">500M+</div>
              <div className="text-gray-600">Daily Predictions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
