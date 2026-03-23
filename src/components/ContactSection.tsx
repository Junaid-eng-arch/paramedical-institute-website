import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Reveal from "@/components/Reveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", program: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto">
        <Reveal className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-black mb-4">
            Start Your <span className="text-black">Healthcare Career</span> Today
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about admissions? Fill out the form below and our team will reach out to you.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <Reveal x={-30} y={0} className="md:col-span-2 space-y-6">
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0 text-highlight" />
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-primary-foreground/80 text-sm">Little Flower Institute of Paramedical Studies, Aluva, Ernakulam, Kerala, India</p>
                    <p className="text-primary-foreground/60 text-xs mt-1">2 km from Aluva Railway Station</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 flex-shrink-0 text-highlight" />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-primary-foreground/80 text-sm">+91 484 5567865</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 flex-shrink-0 text-highlight" />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-primary-foreground/80 text-sm">info@littleflowerparamedical.in</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal x={30} y={0} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="contact-program" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Program of Interest
                  </label>
                  <select
                    id="contact-program"
                    name="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    aria-label="Program of Interest"
                    className="w-full rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                  >
                    <option value="">Select a program</option>
                    <option>BSc Medical Laboratory Technology</option>
                    <option>BSc Radiology & Imaging Technology</option>
                    <option>BSc Cardiac Care Technology</option>
                    <option>BVoc Medical Laboratory Technology</option>
                    <option>BVoc Radiology & Imaging Technology</option>
                    <option>BVoc Dialysis Technology</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-slate-400 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                  placeholder="Any questions or comments..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Submit Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
