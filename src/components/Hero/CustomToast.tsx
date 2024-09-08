import React from "react";

interface CustomToastProps {
  closeToast?: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ closeToast }) => {
  return (
    <div className="flex items-center gap-4 p-4 lg:py-[0.75rem] lg:pl-4 lg:pr-[3.25rem]">
      <div className="shrink-0">Check</div>
      <div className="font-font-body flex flex-col">
        <p className="shrink-0 text-[0.875rem] leading-[1.125rem] text-white lg:text-[1rem]">
          Thank you, you&apos;re on our wailist!
        </p>
      </div>
      <button onClick={closeToast} className="shrink-0 lg:hidden">
        Close
      </button>
    </div>
  );
};

export default CustomToast;
