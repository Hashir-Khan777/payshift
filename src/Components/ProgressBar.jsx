import React from 'react';

const ProgressBar = ({ paymentTab }) => {
  const isActive = (index) => paymentTab === index;

  const getCircleClass = (index) =>
    `w-8 h-8 flex items-center justify-center text-sm font-bold rounded-[4px] border ${isActive(index) ? 'bg-black text-white' : 'bg-gray-300 text-black'
    }`;

  const getLabelClass = (index) =>
    `text-sm sm:text-base font-medium ${isActive(index) ? 'text-black' : 'text-gray-400'
    }`;

  return (
    <div className="flex justify-center mb-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {/* Step 1 - Details */}
        <div className="flex items-center gap-2">
          <div className={getCircleClass(0)}>1</div>
          <span className={getLabelClass(0)}>Details</span>
        </div>

        <div className={`h-0.5 ${paymentTab >= 1 ? 'bg-black' : 'bg-gray-300'} w-10 sm:w-20 md:w-40`}></div>

        {/* Step 2 - Payment */}
        <div className="flex items-center gap-2">
          <div className={getCircleClass(1)}>2</div>
          <span className={getLabelClass(1)}>Payment</span>
        </div>

        <div className={`h-0.5 ${paymentTab === 2 ? 'bg-black' : 'bg-gray-300'} w-10 sm:w-20 md:w-40`}></div>

        {/* Step 3 - Confirmation */}
        <div className="flex items-center gap-2">
          <div className={getCircleClass(2)}>3</div>
          <span className={getLabelClass(2)}>Confirmation</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
