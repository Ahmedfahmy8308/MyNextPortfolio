'use client';

import dynamic from "next/dynamic";

const LoadingSpinner = dynamic(() => import("./loading-spinner"), { 
  ssr: false 
});

export default LoadingSpinner;
