import React from 'react';
import { Code2, Terminal } from 'lucide-react';

export const LoadingIntro = () => {
  return (
    <div className="fixed inset-0 bg-bat-black z-50 flex items-center justify-center">
      <div className="relative">
        <div className="animate-logo-spin">
          <Code2 className="w-16 h-16 text-bat-yellow animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Terminal className="w-8 h-8 text-white animate-bounce" />
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="h-2 w-48 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-bat-yellow animate-loading-bar" />
          </div>
          <div className="mt-4 text-gray-400 animate-fade-in">
            <span className="animate-typing">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};