import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { TrendingDown, Shield, Zap, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Impact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    { 
      icon: TrendingDown, 
      value: 25, 
      suffix: '%', 
      label: 'Reduction in Traffic Delays',
      color: 'emerald',
    },
    { 
      icon: Shield, 
      value: 40, 
      suffix: '%', 
      label: 'Improved Safety at Intersections',
      color: 'blue',
    },
    { 
      icon: Zap, 
      value: 30, 
      suffix: '%', 
      label: 'Faster Emergency Response',
      color: 'amber',
    },
    { 
      icon: Target, 
      value: 98, 
      suffix: '%', 
      label: 'Prediction Accuracy',
      color: 'purple',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">Measurable Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real results from real deployments across connected infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} inView={inView} />
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '500M+', label: 'Predictions Per Day' },
            { value: '24/7', label: 'Real-Time Monitoring' },
            { value: '99.9%', label: 'System Uptime' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, inView }: { metric: any; index: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = metric.value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, metric.value]);

  const colorClasses = {
    emerald: 'from-emerald-50 to-green-50 border-emerald-200',
    blue: 'from-blue-50 to-cyan-50 border-blue-200',
    amber: 'from-amber-50 to-orange-50 border-amber-200',
    purple: 'from-purple-50 to-violet-50 border-purple-200',
  };

  const iconColorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600',
    amber: 'bg-amber-100 text-amber-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClasses[metric.color as keyof typeof colorClasses]} rounded-2xl p-6 border relative overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div className="relative z-10">
        <div className={`w-12 h-12 ${iconColorClasses[metric.color as keyof typeof iconColorClasses]} rounded-xl flex items-center justify-center mb-4`}>
          <metric.icon className="w-6 h-6" />
        </div>
        
        <div className="text-gray-900 mb-2">
          {count}
          <span>{metric.suffix}</span>
        </div>
        
        <p className="text-gray-600">{metric.label}</p>
      </div>
    </motion.div>
  );
}
