// import React from 'react';

// const BetKingLogo = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     {/* SVG content goes here */}
//     <path d="M12 22s8-4 8-10V4L12 2 4 4v8c0 6 8 10 8 10z" />
//   </svg>
// );

// export default BetKingLogo;
// BetKingLogo.jsx
import React from 'react';

const BetKingLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <text x="0" y="20" className="logo-text">BetKing</text>
      {/* You can include additional SVG elements for the logo design */}
    </svg>
  );

}
export default BetKingLogo;
