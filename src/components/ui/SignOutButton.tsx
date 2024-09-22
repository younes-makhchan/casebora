// components/SignOutButton.js
'use client';

import React from 'react';

const SignOutButton = ({ buttonVariants }) => {
  const handleSignOut = () => {
    window.location.href = '/api/auth/logout';
  };

  return (
    <button
      onClick={handleSignOut}
      className={buttonVariants({
        size: 'sm',
        variant: 'ghost',
      })}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
