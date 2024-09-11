import React from 'react';

const StarIcon = ({ isActive, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={isActive ? 'gold' : 'gray'}
    width="24px"
    height="24px"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path d="M12 2l2.39 7.35h7.71l-6.22 4.52 2.39 7.35-6.22-4.52-6.22 4.52 2.39-7.35-6.22-4.52h7.71z" />
  </svg>
);

export default StarIcon;
