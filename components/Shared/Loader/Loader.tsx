'use client';

import Lottie from 'lottie-react';
import loadingAnimation from '@/public/animations/loading.json';

export function Loader() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs">
      <div className="relative w-80 h-80">
        <Lottie
          animationData={loadingAnimation}
        />
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
}
