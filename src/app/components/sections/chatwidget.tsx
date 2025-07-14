'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          backgroundColor: '#FFF',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        }}
      >
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          enableBackground={'new 0 0 24 24'}
        >
          <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H7l-5 4V4z" />
        </svg>
      </div>

   
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '360px',
            height: '500px',
            maxWidth: '90vw',
            maxHeight: '80vh',
            zIndex: 9999,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#fff',
          }}
        >

<iframe width="100%" height="100%" allow="microphone *" src="https://www.gptbots.ai/widget/eerhwzazdd6m9abewd3bglp/chat.html"></iframe>
  
        </div>
      )}
    </>
  );
}
