import React from 'react';

interface CubicEquationProps {
  equation: string;
}

const CubicEquation: React.FC<CubicEquationProps> = ({ equation }) => {
  return (
    <div className="my-5 mx-auto py-3 px-5 bg-white border-3 border-[#bfcc94] rounded-xl w-fit">
      <h2 className="m-0 text-[#344966] font-semibold">{equation}</h2>
    </div>
  );
};

export default CubicEquation;