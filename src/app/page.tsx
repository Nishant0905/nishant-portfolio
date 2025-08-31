'use client';

import { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'certificates', 'achievements', 'contact'];
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.currentTarget;
    
    try {
      // NOTE: Replace with your actual EmailJS Service ID, Template ID, and Public Key
      const SERVICE_ID = 'service_ggsok4b';
      const TEMPLATE_ID = 'template_gdlvy88';
      const PUBLIC_KEY = 'HLYInVnyiiigTWXUT';
      
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">NS</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certificates', label: 'Certificates' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nishant Sreekumar
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            AI & Robotics Engineer | Data Scientist
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Persuing B.Tech in AI & Robotics – Dayananda Sagar University<br />
            Persuing BS in Data Science – IIT Madras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Nishant0905"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-sreekumar-9207a427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/Nishant_Sreekumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-8 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">Backend & ML Intern</h3>
              <p className="text-gray-300 mb-4">Bluestock Fintech (Remote)</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Developed a full-stack IPO web app using Django REST and ReactJS</li>
                <li>Built a financial analysis ML platform with Flask</li>
                <li>Conducted API testing and managed deployment documentation</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">JPMorgan Forage Virtual Internship</h3>
              <p className="text-gray-300 mb-4">Virtual Experience</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Engineered a financial transaction simulator, &apos;Midas Core&apos;</li>
                <li>Used Spring Boot, Apache Kafka, and SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-400">CNN-Based Mango Leaf Disease Detection</h3>
              <p className="text-gray-400 mb-4">Compared VGG16, ResNet50, and custom models for an 8-class mango leaf dataset.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">PyTorch</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">CNN</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Transfer Learning</span>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Bluestock IPO Platform</h3>
              <p className="text-gray-400 mb-4">Full-stack Django & React platform with REST APIs and JWT auth.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">JWT</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Jetson Nano Image Processing</h3>
              <p className="text-gray-400 mb-4">Real-time image recognition benchmarking models like ResNet-18 and SSD-MobileNet-v2.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Jetson Nano</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">GPU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Languages</h3>
              <div className="space-y-3">
                {['Python', 'Java', 'C', 'JavaScript', 'SQL'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Frameworks & Libraries</h3>
              <div className="space-y-3">
                {['Django REST', 'Flask', 'Spring Boot', 'Node.js', 'ReactJS', 'CSS'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Tools & Technologies</h3>
              <div className="space-y-3">
                {['Postman', 'GitHub', 'VS Code', 'Jetson Nano', 'Kafka', 'MySQL'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Software Engineering Job Simulation</h3>
                  <p className="text-gray-300 font-medium">JPMorgan Chase & Co.</p>
                  <p className="text-gray-500 text-sm">Forage • 2025</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-xs">JPM</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Virtual experience program focusing on software engineering practices at JPMorgan Chase with hands-on projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">Spring Boot</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">Apache Kafka</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">REST API</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">SQL</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">H2 Database</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">Testing</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Business Fundamentals for Entrepreneurs</h3>
                  <p className="text-gray-300 font-medium">Indian Institute of Technology, Bombay</p>
                  <p className="text-gray-500 text-sm">IIT Bombay • 2024</p>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-xs">IIT</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Comprehensive course covering essential business concepts and entrepreneurial skills from one of India&apos;s premier institutes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Entrepreneurship</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Business Strategy</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Innovation</span>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Machine Learning Professional Certification</h3>
                  <p className="text-gray-300 font-medium">Altair RapidMiner</p>
                  <p className="text-gray-500 text-sm">RapidMiner • 2024</p>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-sm">ML</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Professional certification covering comprehensive machine learning concepts and practical applications using RapidMiner platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Machine Learning</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Supervised Learning</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Unsupervised Learning</span>
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Predictive Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Research & Achievements</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Research Papers</h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>CNN-Based Mango Leaf Disease Detection</li>
                <li>IoT-Based Automatic Soil Moisture Detection System (Simulation)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Competitions & Programs</h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>NCSRC Hackathon 2025 – Semi-finalist, recognized for 3 impactful vulnerabilities in state-level bug bounty round</li>
                <li>NASA Space Apps Hackathon 2024 – People&apos;s Choice Award Winner. Conceptualized solution for gender and climate action featuring educational tools and a marketplace for women artisans using React, Node.js, and Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                Interested in collaborating or have a question? Feel free to reach out to me directly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <span className="text-gray-300">nishantsreekumar@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">💼</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/nishant-sreekumar-9207a427a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">🐙</span>
                  </div>
                  <a 
                    href="https://github.com/Nishant0905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <span className="text-gray-300">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 p-8 rounded-lg">
              <form id="contactForm" onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                    <p>✅ Message sent successfully! I&apos;ll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-600 text-white p-4 rounded-lg text-center">
                    <p>❌ Failed to send message. Please try again or email me directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Nishant Sreekumar</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nishantsreekumar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              title="Send email to nishantsreekumar@gmail.com"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-sreekumar-9207a427a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Nishant0905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
