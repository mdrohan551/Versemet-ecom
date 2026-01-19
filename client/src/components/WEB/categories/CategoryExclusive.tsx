import { Link } from 'react-router-dom';
import {
  HiOutlineCash,
  HiOutlineRefresh,
  HiOutlineTruck,
  HiOutlineBadgeCheck
} from "react-icons/hi";

const CategoryExclusive = () => {
  const services = [
    { id: 1, title: "Cash On Delivery", icon: <HiOutlineCash className="w-5 h-5 md:w-6 md:h-6 text-primary" /> },
    { id: 2, title: "Instant Return", icon: <HiOutlineRefresh className="w-5 h-5 md:w-6 md:h-6 text-primary" /> },
    { id: 3, title: "Delivery Within 48hrs", icon: <HiOutlineTruck className="w-5 h-5 md:w-6 md:h-6 text-primary" /> },
    { id: 4, title: "Best Price Deal", icon: <HiOutlineBadgeCheck className="w-5 h-5 md:w-6 md:h-6 text-primary" /> },
  ];

  return (
    <section className="w-full py-6 bg-primary/5 dark:bg-Dark_primary overflow-hidden">
      <div className="container mx-auto px-4">

        {/* --- Top Service Icons Section --- */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:gap-4 mb-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center gap-2 md:gap-3 p-0 sm:p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md"
            >
              {service.icon}
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-200">
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* --- Exclusive Collection Static Cards (Always Side by Side) --- */}
        <div className="flex flex-row gap-2 md:gap-4">

          {/* Women's Collection Card */}
          <Link
            to="/category/women"
            className="relative flex-1 h-[160px] sm:h-[250px] md:h-[380px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src="/images/women.gif"
              alt="Women Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </Link>

          {/* Men's Collection Card */}
          <Link
            to="/category/men"
            className="relative flex-1 h-[160px] sm:h-[250px] md:h-[380px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src="/images/men.gif"
              alt="Men Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CategoryExclusive;