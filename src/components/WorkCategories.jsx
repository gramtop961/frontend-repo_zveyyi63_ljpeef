import React from 'react';
import { Briefcase, Calendar, Users, Music } from 'lucide-react';

const categories = [
  {
    icon: Briefcase,
    title: 'Corporate Events',
    desc: 'Board meetings, product launches and offsites with executive polish and absolute precision.',
  },
  {
    icon: Calendar,
    title: 'Conferences',
    desc: 'End-to-end coordination for multi-track agendas, speakers, sponsors and attendee experience.',
  },
  {
    icon: Users,
    title: 'Social & Weddings',
    desc: 'Bespoke celebrations designed around your story — elegant, effortless and memorable.',
  },
  {
    icon: Music,
    title: 'Concerts & Festivals',
    desc: 'Stage, sound, talent liaison and logistics — we orchestrate the energy and the details.',
  },
];

export default function WorkCategories() {
  return (
    <section id="categories" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            What we manage
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Structured services tailored to your goals. Choose a category — we’ll craft a plan and deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ring-1 ring-gray-900/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/5" />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
