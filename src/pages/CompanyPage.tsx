import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CompanyPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Making cities safer and more efficient through intelligent infrastructure.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working together with cities, agencies, and partners to create better solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Continuously pushing the boundaries of traffic technology and predictive intelligence.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and service.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize traffic management' },
    { year: '2019', title: 'First City Deployment', description: 'Successfully deployed in our first major city' },
    { year: '2021', title: '50 Cities Milestone', description: 'Reached 50 connected cities across North America' },
    { year: '2023', title: 'OEM Partnerships', description: 'Launched partnerships with major automotive manufacturers' },
    { year: '2024', title: '150+ Cities', description: 'Now serving over 150 cities and 50,000 traffic signals' },
    { year: '2025', title: 'Global Expansion', description: 'Expanding to international markets' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former transportation engineer with 15+ years in smart city infrastructure',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MDc4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'AI/ML expert specializing in real-time prediction systems',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MDc4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Jennifer Park',
      role: 'Chief Data Scientist',
      bio: 'PhD in Computer Science, specializing in traffic flow optimization',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2MDc4NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
            <h1 className="text-gray-900 mb-6">About Connected Signals</h1>
            <p className="text-gray-600 mb-8">
              We're on a mission to make cities safer, more efficient, and more livable through intelligent traffic infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Connected Signals was born from a simple observation: traffic signals operate in isolation, creating inefficiencies and frustration for millions of people every day.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, a transportation engineer and an AI researcher, envisioned a world where traffic signals could communicate, predict, and adapt in real-time. Today, we're making that vision a reality across 150+ cities.
              </p>
              <p className="text-gray-600">
                We're proud to be at the forefront of the smart city revolution, working with forward-thinking cities, transit agencies, and automotive companies to create a more connected future.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2NjA4MDkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="City skyline"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={ref} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform traffic infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-emerald-600 mb-2">{milestone.year}</div>
                  <h4 className="text-gray-900 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation in intelligent transportation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-emerald-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're always looking for talented people who share our passion for making cities better
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
