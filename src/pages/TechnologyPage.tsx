import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Cloud, Brain, Lock, Gauge, Server, Zap, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TechnologyPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced AI algorithms that learn traffic patterns and predict signal changes with 98% accuracy.',
      features: ['Deep learning models', 'Pattern recognition', 'Real-time predictions', 'Continuous learning'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture that handles millions of data points per second with 99.9% uptime.',
      features: ['Auto-scaling', 'Global distribution', 'Redundancy', 'Real-time processing'],
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with industry standards.',
      features: ['End-to-end encryption', 'SOC 2 certified', 'ISO 27001', 'Regular audits'],
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Ultra-low latency data delivery ensuring signals reach vehicles and systems in milliseconds.',
      features: ['Sub-100ms latency', 'Edge computing', 'CDN distribution', 'Load balancing'],
    },
  ];

  const architecture = [
    { title: 'Traffic Signals', subtitle: 'Connected Infrastructure', icon: Activity },
    { title: 'Cloud Intelligence', subtitle: 'ML Processing', icon: Brain },
    { title: 'Data Distribution', subtitle: 'Secure API', icon: Server },
    { title: 'End Users', subtitle: 'Vehicles & Apps', icon: Zap },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6">Technology That Powers Smart Cities</h1>
            <p className="text-gray-600 mb-8">
              Built on cutting-edge cloud infrastructure, machine learning, and secure data protocols
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">System Architecture</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              End-to-end intelligent traffic infrastructure platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {architecture.map((node, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <node.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-gray-900 mb-1">{node.title}</h4>
                  <p className="text-gray-600">{node.subtitle}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Core Technologies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade technology stack designed for reliability and scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <tech.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500M+', label: 'Predictions Daily' },
              { value: '99.9%', label: 'System Uptime' },
              { value: '<100ms', label: 'Data Latency' },
              { value: '98%', label: 'Accuracy Rate' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-gray-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6">Interested in Our Technology?</h2>
          <p className="text-gray-600 mb-8">
            Learn more about our API, integration options, and technical specifications
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
          >
            Contact Technical Team
          </Link>
        </div>
      </section>
    </div>
  );
}
