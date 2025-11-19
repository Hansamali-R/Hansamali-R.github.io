import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Removed type annotation for e
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send the data to an API endpoint here.
    // For demonstration, we reset the form state:
    setFormData({ name: '', email: '', message: '' }); 
  };

  // Removed type annotation for e
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hansamali.ranasinghe@example.com',
      link: 'mailto:hansamali.ranasinghe@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 XX XXX XXXX',
      link: 'tel:+94XXXXXXXXX',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Hansamali Ranasinghe',
      link: 'https://linkedin.com/in/hansamali-ranasinghe',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@hansamaliranasinghe',
      link: 'https://github.com/hansamaliranasinghe',
    },
  ];
  return (
    <section id="contact" className="relative min-h-screen px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>

      <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-purple-600/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-purple-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Let's connect and discuss opportunities in AI and Quality Assurance Engineering
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-white">Contact Information</h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                Feel free to reach out for collaborations, internship opportunities, or just a
                friendly chat about AI and software quality assurance.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 space-x-4 transition-all duration-300 border bg-gradient-to-br from-purple-900/20 to-transparent rounded-xl border-purple-500/20 hover:border-purple-500/50 hover:purple-glow group"
                  >
                    <div className="p-3 transition-transform rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 group-hover:scale-110">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-gray-400">{item.label}</div>
                      <div className="font-medium text-white transition-colors group-hover:text-purple-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 border bg-gradient-to-br from-purple-900/30 to-transparent rounded-xl border-purple-500/20">
              <h4 className="mb-3 text-xl font-bold text-white">Available For</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Internship Opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Freelance Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Collaboration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Technical Discussions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl border-purple-500/30">
            <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-black/50 border-purple-500/30 focus:outline-none focus:border-purple-500 focus:purple-glow"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg bg-black/50 border-purple-500/30 focus:outline-none focus:border-purple-500 focus:purple-glow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 text-white placeholder-gray-500 transition-all border rounded-lg resize-none bg-black/50 border-purple-500/30 focus:outline-none focus:border-purple-500 focus:purple-glow"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 hover:purple-glow-strong group"
              >
                <span>Send Message</span>
                <Send
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
