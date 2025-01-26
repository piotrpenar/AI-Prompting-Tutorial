import React, { useState, useEffect, useRef } from 'react';
import { tutorialContent } from '../content/tutorialContent';

export const ScrollTutorial = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let newActiveSection = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (ref && scrollPosition >= ref.offsetTop) {
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff3e0]">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8 py-24">
        <p className="text-center text-sm text-gray-500 mb-4">By Piotr Penar</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column - Scrollable Content */}
          <div className="space-y-48">
            {tutorialContent.map((section, index) => (
              <div
                key={section.id}
                ref={el => sectionRefs.current[index] = el}
                className="scroll-mt-24"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.content}
                </div>
                {/* Mobile right content */}
                <div className="lg:hidden mt-12">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    {section.rightContent}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Fixed Content */}
          <div className="hidden lg:block">
            <div className="sticky top-1/2 -translate-y-1/2 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-12 transition-all duration-700 ease-in-out transform">
                {tutorialContent[activeSection].rightContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}