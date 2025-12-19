import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Timer, ShieldAlert, Eye, CheckCircle, Zap, Shield, Radio } from 'lucide-react';

export function ProblemSolution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    { icon: Timer, title: 'Traffic Inefficiencies', description: 'Unpredictable congestion causing billions in lost productivity' },
    { icon: AlertTriangle, title: 'Unpredictable Signal Timing', description: 'Zero real-time visibility into signal behavior' },
    { icon: ShieldAlert, title: 'Safety Risks at Intersections', description: 'Limited emergency vehicle priority systems' },
    { icon: Eye, title: 'Lack of Infrastructure Data', description: 'No access to critical signal phase and timing data' },
  ];

  const solutions = [
    { icon: CheckCircle, title: 'Real-Time Signal Status', description: 'Live data streaming from every intersection' },
    { icon: Zap, title: 'Predictive Intelligence', description: 'AI-powered signal change prediction with 99.5% accuracy' },
    { icon: Shield, title: 'Priority Systems', description: 'Emergency and transit vehicle optimization platform' },
    { icon: Radio, title: 'V2I Data Platform', description: 'Enterprise-grade vehicle-to-infrastructure connectivity' },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">The Challenge</span>
          </div>
          <h2 className="text-slate-900 mb-6">Traditional Traffic Infrastructure is Failing Cities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're solving the $160B congestion problem with real-time intelligent infrastructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-red-100 shadow-lg shadow-red-100/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Current Problems</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-200 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <problem.icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{problem.title}</h4>
                      <p className="text-slate-600">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-100 shadow-lg shadow-emerald-100/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Solutions</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                        <solution.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-1">{solution.title}</h4>
                      <p className="text-slate-600">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Banner */}
        <motion.div
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Proven Results Across 200+ Cities</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '35%', label: 'Reduction in Wait Times' },
              { value: '28%', label: 'Decrease in Emissions' },
              { value: '45%', label: 'Faster Emergency Response' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
