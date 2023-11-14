// components/LoadingSkeleton.tsx
import React from 'react';

const LoadingSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse">
            {/* Your skeleton loader UI here */}
            <div className="bg-gray-200 h-4 w-16 mb-2"></div>
            <div className="bg-gray-200 h-4 w-24 mb-2"></div>
            <div className="bg-gray-200 h-4 w-20"></div>
        </div>
    );
};

export default LoadingSkeleton;
