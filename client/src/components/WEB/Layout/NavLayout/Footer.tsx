import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-2 border-primary/10 mt-10 pt-12 pb-6 px-4 font-jakarta-Regular">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="col-span-1">
            <h2 className="text-3xl font-jakarta-Extrabold text-primary mb-2">Govaly</h2>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">Bangladesh's Favorite Online Fashion Mall</p>
            <div className="flex flex-col gap-3 w-36">
              <img src="/google-play.png" alt="Play Store" className="cursor-pointer hover:opacity-80 transition" />
              <img src="/app-store.png" alt="App Store" className="cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>

          <div>
            <h3 className="font-jakarta-bold mb-5 text-sm uppercase tracking-wider">Govaly Policies</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="hover:text-primary cursor-pointer transition">Return & Refund Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Shipping & Delivery Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-jakarta-bold mb-5 text-sm uppercase tracking-wider">Govaly Seller</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="hover:text-primary cursor-pointer transition">Become A Seller</li>
              <li className="hover:text-primary cursor-pointer transition">Seller Policy</li>
              <li className="hover:text-primary cursor-pointer transition">Product Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-jakarta-bold mb-5 text-sm uppercase tracking-wider">Social Links</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="hover:text-primary cursor-pointer transition">Facebook</li>
              <li className="hover:text-primary cursor-pointer transition">Instagram</li>
              <li className="hover:text-primary cursor-pointer transition">TikTok</li>
              <li className="hover:text-primary cursor-pointer transition">WhatsApp</li>
            </ul>
          </div>
        </div>

        {/* পেমেন্ট সেকশন - হালকা primary বর্ডার সহ */}
        <div className="border-y border-primary/10 py-8 flex flex-wrap justify-center items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
           <img src="/visa.png" className="h-6" alt="Visa" />
           <img src="/mastercard.png" className="h-6" alt="Mastercard" />
           <img src="/bkash.png" className="h-6" alt="Bkash" />
           <img src="/nagad.png" className="h-6" alt="Nagad" />
           <img src="/upay.png" className="h-6" alt="Upay" />
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-8 font-jakarta-medium">
          © {new Date().getFullYear()} Govaly Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;