// App.tsx
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Routers from "./Routers";

import { HelmetProvider } from "react-helmet-async";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import Loader from "../components/WEB/Loader/Loader";




const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // Full screen loader state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />; // Full screen loader
  return (
    <>
      <HelmetProvider>
        <Toaster position="top-center" />
        <Routers />
      </HelmetProvider>
    </>

  );
};

export default App;
