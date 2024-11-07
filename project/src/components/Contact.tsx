import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useContactForm } from '../hooks/useContactForm';

export const Contact = () => {
  const {
    formData,
    errors,
    isLoading,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <section id="contact" className="py-20">
      <SectionHeading>Get In Touch</SectionHeading>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY7c3RvcC1vcGFjaXR5OjAuMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZjtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0idXJsKCNncmFkKSIvPjwvc3ZnPg==')] opacity-20 animate-pulse"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative">Contact Information</h3>
              <div className="space-y-6 relative">
                <a 
                  href="mailto:saikirangoud2901@gmail.com" 
                  className="flex items-center gap-4 transform hover:translate-x-2 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 animate-pulse" />
                  <span className="hover:text-blue-200 transition-colors">
                    saikirangoud2901@gmail.com
                  </span>
                </a>
                
                <a 
                  href="tel:913-563-0506" 
                  className="flex items-center gap-4 transform hover:translate-x-2 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span className="hover:text-blue-200 transition-colors">
                    913-563-0506
                  </span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/sai-kiran-goud-ravula/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 transform hover:translate-x-2 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 animate-pulse" />
                  <span className="hover:text-blue-200 transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
                
                <a 
                  href="https://www.google.com/maps/place/Overland+Park,+KS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 transform hover:translate-x-2 transition-all duration-300"
                >
                  <MapPin className="w-6 h-6 animate-pulse" />
                  <span className="hover:text-blue-200 transition-colors">
                    Overland Park, KS
                  </span>
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {submitError && (
                <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200 text-sm">
                  {submitError}
                </div>
              )}
              
              {isSuccess && (
                <div className="p-3 bg-green-900/50 border border-green-500 rounded-lg text-green-200 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <div className="transform hover:translate-y-[-2px] transition-all duration-300">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500
                           transition-all duration-300 hover:bg-gray-600 ${
                             errors.name ? 'border-red-500 focus:ring-red-500' : ''
                           }`}
                  placeholder="Your name"
                  disabled={isLoading}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div className="transform hover:translate-y-[-2px] transition-all duration-300">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500
                           transition-all duration-300 hover:bg-gray-600 ${
                             errors.email ? 'border-red-500 focus:ring-red-500' : ''
                           }`}
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div className="transform hover:translate-y-[-2px] transition-all duration-300">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500
                           transition-all duration-300 hover:bg-gray-600 h-32 resize-none ${
                             errors.message ? 'border-red-500 focus:ring-red-500' : ''
                           }`}
                  placeholder="Your message..."
                  disabled={isLoading}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg
                         transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                         flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};