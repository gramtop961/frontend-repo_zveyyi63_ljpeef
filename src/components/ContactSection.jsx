import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // For demo purposes we simply open the mail client
    const subject = encodeURIComponent(`New inquiry from ${payload.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Hello,\n\nI would like to discuss an event.\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nMessage: ${payload.message}`);
    window.location.href = `mailto:hello@yourevents.co?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Let’s talk about your event</h2>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-600">
            Share a few details and we’ll get back within one business day. Prefer direct contact? Use the options below.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:hello@yourevents.co" className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-gray-200 transition hover:bg-gray-50">
              <div className="mt-0.5 rounded-md bg-gray-900 p-2 text-white"><Mail className="h-4 w-4" /></div>
              <div>
                <div className="text-sm font-medium text-gray-900">Email</div>
                <div className="text-sm text-gray-600">hello@yourevents.co</div>
              </div>
            </a>
            <a href="tel:+11234567890" className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-gray-200 transition hover:bg-gray-50">
              <div className="mt-0.5 rounded-md bg-gray-900 p-2 text-white"><Phone className="h-4 w-4" /></div>
              <div>
                <div className="text-sm font-medium text-gray-900">Phone</div>
                <div className="text-sm text-gray-600">+1 (123) 456-7890</div>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-gray-200">
              <div className="mt-0.5 rounded-md bg-gray-900 p-2 text-white"><MapPin className="h-4 w-4" /></div>
              <div>
                <div className="text-sm font-medium text-gray-900">Location</div>
                <div className="text-sm text-gray-600">Downtown, Business District · Open Mon–Fri</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" type="text" required className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-0 transition focus:border-gray-400 focus:ring-0" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" type="tel" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-0 transition focus:border-gray-400 focus:ring-0" placeholder="+1 234 567 8901" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-0 transition focus:border-gray-400 focus:ring-0" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none ring-0 transition focus:border-gray-400 focus:ring-0" placeholder="Tell us about your event, date, location, guests..." />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-gray-900/10 transition hover:bg-gray-800">
                Send inquiry
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
