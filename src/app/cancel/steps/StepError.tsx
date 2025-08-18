import React from "react";


export default function StepError({ nextStep }: { nextStep: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4 text-red-600">Error</h2>
      <p className="mb-6 text-gray-700">Something went wrong. Please try again.</p>
      <button onClick={nextStep} className="px-6 py-3 bg-gray-100 text-red-600 rounded-lg font-medium hover:bg-gray-200 transition-colors">Retry</button>
    </div>
  );
}
