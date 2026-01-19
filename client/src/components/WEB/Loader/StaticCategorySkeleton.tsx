import React from 'react';

interface Props {
    count?: number;
}

const StaticCategorySkeleton: React.FC<Props> = ({ count = 9 }) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-5 md:gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 animate-pulse">
                    {/* Skeleton Box */}
                    <div className="w-full aspect-square rounded-2xl bg-primary/20 dark:bg-gray-800 border border-gray-100 dark:border-gray-700" />

                    {/* Skeleton Text */}
                    <div className="h-3 w-16 bg-primary/20 dark:bg-gray-800 rounded-md" />
                </div>
            ))}
        </div>
    );
};

export default StaticCategorySkeleton;