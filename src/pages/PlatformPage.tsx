import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Activity, BarChart3, Bell, Settings, Users, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlatformPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Live signal status dashboard with instant updates from your entire network.',
      image: 'https://images.unsplash.com/photo-1544535031-b2fe56200d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHRyYWZmaWMlMjBpbnRlcnNlY3Rpb258ZW58MXx8fHwxNzY2MTQ0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into traffic patterns, performance metrics, and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Proactive notifications for signal issues, maintenance needs, and anomalies.',
      image: 'https://images.unsplash.com/photo-1626232541899-c2fc4409623c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwbGlnaHRzJTIwY2l0eXxlbnwxfHx8fDE3NjYxNDQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Settings,
      title: 'Configuration Management',
      description: 'Centralized control for signal timing, priority settings, and system parameters.',
      image: 'https://images.unsplash.com/photo-1756076893979-fcf3f55d10b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzY2MDc0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Role-based permissions for different stakeholders and team members.',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MDc4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with audit logs, encryption, and compliance tools.',
      image: 'https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2NjA4MDkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6">The Connected Signals Platform</h1>
            <p className="text-gray-600 mb-8">
              A comprehensive management platform that gives you complete visibility and control over your traffic infrastructure
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Unified Control Center</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your traffic signal network in one intuitive interface
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Platform Dashboard"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed for traffic management professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Seamless Integration</h2>
              <p className="text-gray-600 mb-6">
                Our platform integrates with existing traffic management systems, CAD/AVL systems, and third-party applications through our comprehensive API.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'RESTful API with full documentation',
                  'Webhook support for real-time events',
                  'SDK available for major platforms',
                  'Dedicated integration support team',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
              >
                View Technical Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwOTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Integration"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6">Ready to See the Platform in Action?</h2>
          <p className="text-gray-600 mb-8">
            Schedule a personalized demo to explore how our platform can transform your traffic management
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
