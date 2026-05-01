import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Contact Us</h2>
        <p className="mt-2 text-4xl font-extrabold text-base-content sm:text-5xl">
          Get in Touch with <span className="text-primary">TilesPro</span>
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Have questions about our premium ceramic collections or need a custom quote? 
          Our team is here to help you transform your space.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Information Cards */}
        <div className="space-y-6">
          <div className="card bg-base-200 shadow-xl p-6 transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Office Location</h3>
                <p className="text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl p-6 transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Phone Number</h3>
                <p className="text-gray-500">+880 1234 567890</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl p-6 transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email Address</h3>
                <p className="text-gray-500">support@tilespro.com</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl p-6 transition-transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Business Hours</h3>
                <p className="text-gray-500">Saturday - Thursday: 10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-2xl p-8 border border-primary/10">
          <form className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Full Name</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered focus:input-primary w-full" 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="yourname@example.com" 
                className="input input-bordered focus:input-primary w-full" 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Subject</span>
              </label>

              <select 
                className="select select-bordered focus:select-primary w-full"
                defaultValue="placeholder"
              >
                <option value="placeholder" disabled>Select Inquiry Type</option>
                <option value="product">Product Information</option>
                <option value="bulk">Bulk Order Support</option>
                <option value="shipping">Shipping & Delivery</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="general">General Support</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content">Your Message</span>
              </label>
              <textarea 
                className="textarea textarea-bordered focus:textarea-primary h-32 w-full" 
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full gap-2 text-white shadow-lg transition-all hover:shadow-primary/30">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-lg h-96 bg-base-200 border border-base-300 relative group">
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-grid-pattern">
            <MapPin className="w-12 h-12 mb-2 text-primary opacity-50 group-hover:animate-bounce" />
            <p className="text-lg font-medium">Dhaka, Bangladesh</p>
            <p className="text-sm italic">Google Maps Integration Ready</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;