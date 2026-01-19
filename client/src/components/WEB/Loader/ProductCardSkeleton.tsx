import React from 'react';

interface SkeletonProps {
    count?: number;
}

const ProductCardSkeleton: React.FC<SkeletonProps> = ({ count = 1 }) => {
    const skeletonItems = Array.from({ length: count });

    return (
        <>
            {skeletonItems.map((_, index) => (
                <div
                    key={index}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden relative flex flex-col h-full animate-pulse shadow-sm"
                >

                    <div className="absolute top-3 left-3 z-10 bg-gray-200 h-5 w-14 rounded-full"></div>


                    <div className="absolute top-3 right-3 z-10 bg-white rounded-full w-8 h-8 border border-gray-100 flex items-center justify-center">
                        <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
                    </div>


                    <div className="h-44 md:h-56 bg-gray-50 w-full flex items-center justify-center shrink-0">
                        <div className="bg-gray-200 w-32 h-32 rounded-lg"></div>
                    </div>

                    <div className="p-4 flex flex-col flex-grow space-y-4">

                        <div className="flex items-center gap-1">
                            <div className="bg-gray-200 h-3 w-3 rounded-full"></div>
                            <div className="bg-gray-200 h-3 w-8 rounded"></div>
                            <div className="bg-gray-100 h-2 w-6 rounded ml-1"></div>
                        </div>


                        <div className="space-y-2 flex-grow">
                            <div className="bg-gray-200 h-4 w-full rounded"></div>
                            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                        </div>


                        <div className="mt-2 flex items-center justify-between">
                            <div className="flex flex-col space-y-2">
                                <div className="bg-gray-200 h-6 w-20 rounded"></div>
                                <div className="bg-gray-100 h-3 w-12 rounded"></div>
                            </div>

                            <div className="bg-pink-100 h-10 w-10 rounded-xl flex items-center justify-center">
                                <div className="bg-pink-200 w-5 h-5 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductCardSkeleton;