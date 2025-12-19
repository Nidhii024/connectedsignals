import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Building2, Bus, Car, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhoWeServePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const audiences = [
    {
      icon: Building2,
      title: 'Cities & Transportation Agencies',
      description: 'Optimize traffic flow, improve emergency response, and gain real-time insights into your transportation network.',
      benefits: [
        'Reduce congestion by up to 25%',
        'Improve emergency response times',
        'Real-time traffic analytics',
        'Data-driven infrastructure planning',
      ],
      caseStudy: 'City of Austin reduced traffic delays by 23% in the first year',
      image: 'https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2NjA4MDkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Bus,
      title: 'Transit Operators',
      description: 'Enhance schedule reliability, reduce delays, and provide better service to passengers with transit signal priority.',
      benefits: [
        'Reduce bus delays by 20%',
        'Improve schedule reliability',
        'Lower operational costs',
        'Enhanced passenger experience',
      ],
      caseStudy: 'Seattle Transit improved on-time performance from 72% to 91%',
      image: 'https://images.unsplash.com/photo-1670039765868-a9d357257559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc2l0JTIwYnVzfGVufDF8fHx8MTc2NjE0NDgzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Car,
      title: 'Automotive OEMs',
      description: 'Integrate V2I capabilities to enhance driver safety, improve navigation, and differentiate your vehicles.',
      benefits: [
        'Enhanced driver safety features',
        'Improved navigation accuracy',
        'Reduced fuel consumption',
        'Competitive differentiation',
      ],
      caseStudy: 'Partners report 15% improvement in navigation accuracy',
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjYwNTg5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Smartphone,
      title: 'Mobility & App Developers',
      description: 'Access real-time signal data to power better routing, accurate ETAs, and enhanced user experiences.',
      benefits: [
        'Better route recommendations',
        'Accurate ETA predictions',
        'Increased user engagement',
        'Premium feature opportunities',
      ],
      caseStudy: 'Navigation apps see 30% improvement in ETA accuracy',
      image: 'https://images.unsplash.com/photo-1756076893979-fcf3f55d10b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzY2MDc0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
            <h1 className="text-gray-900 mb-6">Who We Serve</h1>
            <p className="text-gray-600 mb-8">
              Intelligent infrastructure solutions for every stakeholder in the mobility ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audiences */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {audiences.map((audience, i) => (
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
                    <audience.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h2 className="text-gray-900 mb-4">{audience.title}</h2>
                  <p className="text-gray-600 mb-6">{audience.description}</p>
                  
                  <h4 className="text-gray-900 mb-4">Key Benefits</h4>
                  <ul className="space-y-3 mb-6">
                    {audience.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 mb-6">
                    <p className="text-emerald-800 italic">"{audience.caseStudy}"</p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                  >
                    Learn How We Can Help
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Trusted Across the Ecosystem</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Cities Connected' },
              { value: '40', label: 'Transit Agencies' },
              { value: '15+', label: 'OEM Partners' },
              { value: '10M+', label: 'Connected Devices' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6">Let's Discuss Your Needs</h2>
          <p className="text-gray-600 mb-8">
            Every organization has unique requirements. Contact us to explore how we can help you.
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
