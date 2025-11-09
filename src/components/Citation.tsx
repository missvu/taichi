import { useState, useRef, useEffect } from 'react';

interface CitationProps {
  number: number;
  author: string;
  year: string;
  shortTitle: string;
  variant?: 'light' | 'dark';
  customTooltip?: string;
}

export function Citation({ number, author, year, shortTitle, variant = 'dark', customTooltip }: CitationProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(`ref-${number}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Flash the reference briefly
      element.classList.add('bg-yellow-100');
      setTimeout(() => {
        element.classList.remove('bg-yellow-100');
      }, 2000);
    }
  };
  
  const handleMouseEnter = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 8,
        left: rect.right + 8
      });
      setShowTooltip(true);
    }
  };
  
  const linkColors = variant === 'light' 
    ? 'text-blue-300 hover:text-blue-100' 
    : 'text-blue-600 hover:text-blue-800';
  
  return (
    <>
      <a
        ref={linkRef}
        href={`#ref-${number}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
        className={`${linkColors} transition-colors cursor-pointer no-underline ml-0.5`}
        style={{ 
          fontSize: '11px', 
          verticalAlign: 'super',
          fontWeight: 600
        }}
      >
        [{number}]
      </a>
      
      {showTooltip && (
        <div 
          className="fixed z-50 w-64 p-3 bg-gray-900 rounded-lg shadow-xl pointer-events-none"
          style={{ 
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            fontSize: '11px', 
            lineHeight: '1.4',
            color: 'white',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          <div className="absolute -left-1 top-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          {customTooltip || `${author} (${year}). ${shortTitle}`}
        </div>
      )}
    </>
  );
}
