import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;