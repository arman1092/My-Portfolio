import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Code,
  Database,
  Globe,
  Brain,
  Award,
  Calendar,
  Users,
  Zap,
  Star,
  ExternalLink,
  Shield,
  Network
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const skills = [
    { category: 'Languages', items: ['Java', 'PHP', 'Python', 'JavaScript', 'C++', 'C'], icon: <Code className="w-6 h-6" /> },
    { category: 'Frameworks & Libraries', items: ['Laravel', 'React.js', 'MERN Stack', 'jQuery', 'Bootstrap', 'TailwindCSS', 'Alpine.js'], icon: <Globe className="w-6 h-6" /> },
    { category: 'Databases', items: ['MySQL', 'SQLite', 'MongoDB'], icon: <Database className="w-6 h-6" /> },
    { category: 'Specialized Skills', items: ['AI-Powered Projects (Open Source Models)', 'MERN Stack Projects', 'REST APIs', 'Web Development', 'Cloud Computing'], icon: <Brain className="w-6 h-6" /> }
  ];

  const experiences = [
    {
      title: 'Full Stack PHP Developer',
      company: 'Dharmraj Infotech Pvt. Ltd.',
      period: 'May 2025 – Sep 2025',
      location: 'Patna',
      achievements: [
        'Built secure identity verification & event management systems using PHP & MySQL',
        'Developed REST APIs for QR-based authentication, trust scores & ID card generation',
        'Designed interactive dashboards with real-time verification & image processing',
        'Optimized API & query performance for scalability and security'
      ]
    },
    {
      title: 'Laravel Developer',
      company: 'Taquino India Pvt. Ltd.',
      period: 'Jul 2023 – Dec 2024',
      location: 'Patna',
      achievements: [
        'Developed full-stack education platform serving 25+ cities',
        'Built APIs for real-time course search, authentication, booking system',
        'Created dynamic dashboards & social features to enhance engagement',
        'Improved database performance & security'
      ]
    },
    {
      title: 'Web Development Trainer',
      company: 'TechPro Labz',
      period: 'Dec 2022 – Feb 2023',
      location: 'Remote',
      achievements: [
        'Trained 20 interns on PHP, HTML, CSS, Bootstrap, JavaScript, SQL',
        'Guided and delivered 6 live projects'
      ]
    },
    {
      title: 'Embedded Systems Intern',
      company: 'Robocoupler Pvt. Ltd.',
      period: 'Jun 2022 – Aug 2022',
      location: 'Internship',
      achievements: [
        'Built drowsiness detection system with Arduino & sensors',
        'Worked on hardware integration & optimization in a 6-member team'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Amity University, Patna',
      cgpa: '9.1',
      period: '2022-2024'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'B.R.A.B.U, Muzaffarpur',
      cgpa: '7.4',
      period: '2019-2022'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MD ARMAN
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'About', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Md Arman
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="typing-animation">Full Stack Developer & AI Enthusiast</span>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web solutions with expertise in PHP, Laravel, React.js, MERN Stack, and AI-powered applications. 
            Transforming ideas into scalable, user-centric digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Live Projects Showcase */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Live Projects
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my production-ready applications serving real users with cutting-edge technology and seamless user experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* HIdentity Project */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">HIdentity</h3>
                    <p className="text-blue-400 font-semibold">Identity Verification Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A comprehensive identity verification and event management system built with core full stack PHP & MySQL. 
                  Features secure QR-based authentication, trust scoring algorithms, and real-time verification dashboards.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Core PHP', 'MySQL', 'REST APIs', 'QR Authentication', 'Real-time Processing'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="https://hidentity.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Explore Platform</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            {/* HIdentity Nexus Project */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">HIdentity Nexus</h3>
                    <p className="text-purple-400 font-semibold">Event Management Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced event management platform built with core full stack PHP. 
                  Integrates comprehensive event planning, attendee management, real-time updates, and secure identity verification systems.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Core PHP', 'Event Management', 'Attendee Tracking', 'Real-time Updates', 'Integrated Verification'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="https://hidentitynexus.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-xl font-semibold text-white hover:from-purple-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span>Visit Nexus</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Project Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-300 font-medium">Live Projects</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">Uptime</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Available</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Secure</div>
              <div className="text-gray-300 font-medium">& Scalable</div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies and AI integration. 
                With a strong foundation in both frontend and backend development, I create seamless digital experiences 
                that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from building secure identity verification systems to developing comprehensive 
                education platforms serving 25+ cities. I specialize in PHP, Laravel, React.js, and MERN stack 
                development, while also exploring the fascinating world of AI-powered applications.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Patna, Bihar, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Available for Projects</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300">Cities Served</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-emerald-400 mb-2">20+</div>
                <div className="text-gray-300">Interns Trained</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-purple-400 mb-2">6+</div>
                <div className="text-gray-300">Live Projects</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                <div className="text-gray-300">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-emerald-400 mr-3">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Tools & Platforms</h3>
              <p className="text-gray-300">Git, GitHub, Bitbucket, AWS, Hostinger, WordPress, Shopify, Tableau</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Methodologies</h3>
              <p className="text-gray-300">Agile Development, Scrum, RESTful APIs, Responsive Design</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 rounded-xl p-6 border border-emerald-500/30">
              <Brain className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI & Innovation</h3>
              <p className="text-gray-300">Open Source AI Models, Machine Learning Integration, IoT Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-emerald-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 h-full">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 font-semibold">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-emerald-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {index < experiences.length - 1 && (
                  <div className="hidden md:block absolute left-1/3 top-full w-px h-12 bg-gradient-to-b from-purple-400 to-transparent transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-emerald-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.period}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-emerald-400">{edu.cgpa}</div>
                    <div className="text-sm text-gray-400">CGPA</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a href="mailto:armanmlk360@gmail.com" className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">armanmlk360@gmail.com</div>
                  </div>
                </a>
                
                <a href="tel:+917294131084" className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+91 7294131084</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">Gola Road, Patna, Bihar, India – 801503</div>
                  </div>
                </div>
                
                <a href="https://linkedin.com/in/devarman07" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-gray-300">linkedin.com/in/devarman07</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                {['English', 'Hindi', 'Urdu'].map((language, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-semibold">{language}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Ready to Collaborate?</h4>
                <p className="text-gray-300 mb-4">
                  I'm always open to discussing new opportunities and innovative projects. 
                  Let's create something extraordinary together!
                </p>
                <a 
                  href="mailto:armanmlk360@gmail.com?subject=Project Collaboration"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Md Arman. Crafted with passion and precision. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;