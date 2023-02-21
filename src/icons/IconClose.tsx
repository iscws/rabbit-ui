import React from 'react';

interface iconProps {
  color?: string;
  size?: string;
}
export default function IconClose<iconProps>({ color = '#333', size = '16' }) {
<<<<<<< HEAD
    return (
        <svg role="img" width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L40 40" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 40L40 8" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
=======
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 8L40 40"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 40L40 8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
>>>>>>> 8333b0f6ff5fc4177c3e68b675d6ece013b01fbe
}
