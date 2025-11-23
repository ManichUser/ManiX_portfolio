'use client';
import  { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}
