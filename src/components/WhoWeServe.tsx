import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Building2, Bus, Car, Smartphone } from 'lucide-react';

export function WhoWeServe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: Building2,
      title: 'Cities & Agencies',
      benefits: [
        'Reduce congestion by up to 25%',
        'Improve emergency response times',
        'Real-time traffic analytics and insights',
        'Infrastructure ROI optimization',
      ],
      useCases: [
        'Citywide signal network optimization',
        'Emergency vehicle preemption',
        'Public transit signal priority',
        'Data-driven infrastructure planning',
      ],
      metrics: { value: '150+', label: 'Cities Connected' },
    },
    {
      icon: Bus,
      title: 'Transit Operators',
      benefits: [
        'Reduce bus delays by 20%',
        'Improve schedule reliability',
        'Enhanced passenger experience',
        'Lower operational costs',
      ],
      useCases: [
        'Transit signal priority (TSP)',
        'Real-time schedule optimization',
        'Multi-route coordination',
        'Performance analytics',
      ],
      metrics: { value: '40%', label: 'Faster Transit' },
    },
    {
      icon: Car,
      title: 'Automotive OEMs',
      benefits: [
        'Enhanced driver safety features',
        'Improved navigation accuracy',
        'Reduced fuel consumption',
        'Competitive differentiation',
      ],
      useCases: [
        'V2I integration in vehicles',
        'Predictive navigation systems',
        'Green light optimization',
        'ADAS enhancement',
      ],
      metrics: { value: '15+', label: 'OEM Partners' },
    },
    {
      icon: Smartphone,
      title: 'Mobility & Apps',
      benefits: [
        'Better route recommendations',
        'Accurate ETA predictions',
        'User engagement increase',
        'Premium feature opportunities',
      ],
      useCases: [
        'Navigation app integration',
        'Ride-sharing optimization',
        'Last-mile delivery routing',
        'Multi-modal trip planning',
      ],
      metrics: { value: '10M+', label: 'Connected Devices' },
    },
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
          <h2 className="text-gray-900 mb-4">Who We Serve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Intelligent infrastructure solutions for every stakeholder in the mobility ecosystem
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg border transition-all duration-300 ${
                activeTab === i
                  ? 'bg-emerald-50 border-emerald-300 text-gray-900 shadow-sm'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-gray-900 mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {tabs[activeTab].benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-emerald-700 mb-2">{tabs[activeTab].metrics.value}</div>
                  <div className="text-gray-600">{tabs[activeTab].metrics.label}</div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-6">Use Cases</h3>
                <div className="space-y-4">
                  {tabs[activeTab].useCases.map((useCase, i) => (
                    <motion.div
                      key={i}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <p className="text-gray-700">{useCase}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
