import React from "react";


export default function StepJobQuestion({ nextStep, prevStep }: { nextStep: (data?: boolean) => void; prevStep: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Did you get a job?</h2>
      <div className="space-x-4">
  <button onClick={() => nextStep(true)} className="px-4 py-2 bg-[#8952fc] text-white rounded-lg">Yes</button>
  <button onClick={() => nextStep(false)} className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg">No</button>
      </div>
      <button onClick={prevStep} className="mt-4 text-sm text-gray-700 underline">Back</button>
    </div>
  );
}
