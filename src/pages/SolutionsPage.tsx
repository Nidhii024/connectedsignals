import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Clock, Workflow, Smartphone, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolutionsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: Clock,
      title: 'Predictive Signal Timing',
      description: 'Machine learning algorithms predict signal changes before they happen, enabling smoother traffic flow and reduced wait times.',
      features: [
        'Real-time signal phase prediction',
        'Green light optimization',
        'Adaptive signal timing',
        'Historical pattern analysis',
      ],
      image: 'https://images.unsplash.com/photo-1626232541899-c2fc4409623c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwbGlnaHRzJTIwY2l0eXxlbnwxfHx8fDE3NjYxNDQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Workflow,
      title: 'Signal Priority Systems',
      description: 'Grant priority to emergency vehicles, buses, and transit, reducing response times and improving public transportation efficiency.',
      features: [
        'Emergency vehicle preemption',
        'Transit signal priority (TSP)',
        'Priority request management',
        'Multi-modal coordination',
      ],
      image: 'https://images.unsplash.com/photo-1670039765868-a9d357257559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc2l0JTIwYnVzfGVufDF8fHx8MTc2NjE0NDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Smartphone,
      title: 'EnLighten Platform',
      description: 'Consumer and vehicle integration that brings real-time signal intelligence directly to drivers and navigation systems.',
      features: [
        'Mobile app integration',
        'In-vehicle display support',
        'Navigation system compatibility',
        'Real-time ETA optimization',
      ],
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjYwNTg5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Database,
      title: 'Secure V2I Data Platform',
      description: 'Enterprise-grade vehicle-to-infrastructure connectivity with encrypted data transmission and scalable cloud architecture.',
      features: [
        'End-to-end encryption',
        'Scalable cloud infrastructure',
        'Real-time data streaming',
        'API access and integration',
      ],
      image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6">Our Solutions</h1>
            <p className="text-gray-600 mb-8">
              Comprehensive intelligent infrastructure technology designed to transform urban mobility and traffic management
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h2 className="text-gray-900 mb-4">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6">Ready to Transform Your Traffic Infrastructure?</h2>
          <p className="text-gray-600 mb-8">
            Contact us to learn how our solutions can benefit your city or organization
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
