import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gray-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-24">
        {/* Left: Headline and CTA */}
        <div className="z-10 w-full md:w-1/2">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/80 ring-1 ring-white/15">
            Premium Event Management
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Execute seamless events with a modern, professional touch
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We plan, design and deliver corporate and social experiences end‑to‑end — from
            concept to curtain call. Focus on your guests, we handle the rest.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-white/20 transition hover:bg-white/90"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-md bg-transparent px-5 py-3 text-sm font-medium text-white/80 ring-1 ring-white/20 transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* Right: Spline Scene */}
        <div className="relative w-full md:w-1/2">
          <div className="relative h-[360px] w-full rounded-xl border border-white/10 bg-black/60 shadow-2xl md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient vignette to blend into background */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-[1] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/10 via-fuchsia-400/10 to-transparent blur-3xl" />
    </section>
  );
}
