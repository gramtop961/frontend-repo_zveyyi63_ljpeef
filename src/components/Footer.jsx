import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:text-left">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Motive Events. All rights reserved.</p>
        <div className="text-sm text-gray-500">
          Built for premium, professional experiences.
        </div>
      </div>
    </footer>
  );
}
