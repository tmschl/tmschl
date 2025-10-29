export default function App() {
  return (
    <div 
      className="h-screen w-screen flex items-center justify-center p-16"
      style={{ 
        backgroundColor: '#F5F5F0',
        fontFamily: 'Georgia, "Times New Roman", serif'
      }}
    >
      <div className="max-w-md w-full space-y-6">
        {/* Name */}
        <div>
          <p style={{ color: '#0C1B33', opacity: 0.85, fontSize: '0.95rem', letterSpacing: '0.02em' }}>
            TIMMY SCHILLER
          </p>
        </div>

        {/* Links styled as sections */}
        <div className="space-y-3">
          <div>
            <a 
              href="https://emill.rapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              style={{ color: '#0C1B33', opacity: 0.65, fontSize: '0.8rem' }}
            >
              Director of Product Engineering
            </a>
          </div>
          <div>
            <a 
              href="https://softdelight.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
              style={{ color: '#0C1B33', opacity: 0.65, fontSize: '0.8rem' }}
            >
              Fiction, Criticism, and Poetry
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="py-6"></div>

        {/* Copyright and publication details */}
        <div className="space-y-3">
          <p style={{ color: '#0C1B33', opacity: 0.55, fontSize: '0.75rem', lineHeight: '1.6' }}>
            First published 1994
          </p>
          
          <p style={{ color: '#0C1B33', opacity: 0.55, fontSize: '0.75rem', lineHeight: '1.6' }}>
            © 2025 Timmy Schiller
          </p>

          <p style={{ color: '#0C1B33', opacity: 0.55, fontSize: '0.75rem', lineHeight: '1.6' }}>
            MSt University of Oxford<br />
            BS University of California, Berkeley
          </p>

          <p style={{ color: '#0C1B33', opacity: 0.55, fontSize: '0.75rem', lineHeight: '1.6' }}>
            New York City
          </p>

          <div className="pt-4">
            <p style={{ color: '#0C1B33', opacity: 0.45, fontSize: '0.7rem', lineHeight: '1.5' }}>
              All rights reserved. No part of this publication may be<br />
              reproduced without permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

