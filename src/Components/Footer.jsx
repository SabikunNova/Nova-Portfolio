import React from "react";

export default function Footer(){
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center">S</div>
          <span className="font-semibold">Sabikun Nahar Nova</span>
        </div>
        
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sabikun Nahar Nova. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
}
