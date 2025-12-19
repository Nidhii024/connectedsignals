import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Clock, Workflow, Smartphone, Database, ArrowRight } from 'lucide-react';

export function SolutionsOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: Clock,
      title: 'Predictive Signal Timing',
      description: 'AI-powered machine learning algorithms predict signal changes with 99.5% accuracy, enabling adaptive routing and reduced congestion.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      stats: '50K+ Signals',
    },
    {
      icon: Workflow,
      title: 'Signal Priority Systems',
      description: 'Dynamic priority management for emergency vehicles and public transit, reducing response times by up to 45% in critical situations.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      stats: '200+ Cities',
    },
    {
      icon: Smartphone,
      title: 'EnLighten Platform',
      description: 'Consumer and OEM integration delivering real-time signal intelligence to navigation systems and connected vehicles.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      stats: '10M+ Users',
    },
    {
      icon: Database,
      title: 'V2I Data Platform',
      description: 'Enterprise-grade vehicle-to-infrastructure connectivity with AES-256 encryption and 99.99% uptime SLA.',
      color: 'amber',
      gradient: 'from-amber-500 to-amber-600',
      stats: 'Enterprise Ready',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Platform Solutions</span>
          </div>
          <h2 className="text-slate-900 mb-6">Complete Traffic Intelligence Suite</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end platform powering smarter, safer, and more efficient transportation infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              className="group relative bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
                  <div className="px-3 py-1 bg-white rounded-full border border-slate-200">
                    <span className="text-xs font-semibold text-slate-600">{solution.stats}</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 text-lg">{solution.description}</p>

                <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${solution.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
